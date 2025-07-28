interface EncryptedKeys {
  encrypted_api_key: string; // RSA encrypted AES encrypted API key
  encrypted_api_secret: string; // RSA encrypted AES encrypted secret
  salt_hex: string; // For password derivation
  iv_hex: string; // IV used for AES-GCM
}

class KeyEncryption {
  constructor(private backendPublicKeyPem: string) {}

  async encryptTotpSecret(totpSecret: string): Promise<string> {
    const encoder = new TextEncoder();

    // Import the backend's public key
    const publicKey = await crypto.subtle.importKey(
      'spki',
      this.pemToArrayBuffer(this.backendPublicKeyPem),
      {
        name: 'RSA-OAEP',
        hash: 'SHA-256',
      },
      false,
      ['encrypt'],
    );

    // RSA Encrypt the TOTP secret directly
    const rsaEncryptedTotp = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      publicKey,
      encoder.encode(totpSecret),
    );

    return this.arrayBufferToBase64(rsaEncryptedTotp);
  }

  async encryptKeys(
    apiKey: string,
    apiSecret: string,
    cexPassword: string,
  ): Promise<EncryptedKeys> {
    const encoder = new TextEncoder();

    // Generate salt for password derivation
    const salt = crypto.getRandomValues(new Uint8Array(16));
    // Hex encode
    const saltHex = Array.from(salt)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // Derive AES key using PBKDF2
    const passwordKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(cexPassword),
      'PBKDF2',
      false,
      ['deriveKey'],
    );

    const aesKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt'],
    );

    // Generate IV for AES-GCM
    const iv = crypto.getRandomValues(new Uint8Array(12));
    // Hex encode
    const ivHex = Array.from(iv)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // AES-GCM Encrypt API Key
    const aesEncryptedApiKey = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      aesKey,
      encoder.encode(apiKey),
    );

    // AES-GCM Encrypt API Secret
    const aesEncryptedApiSecret = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      aesKey,
      encoder.encode(apiSecret),
    );

    // Import RSA public key
    const publicKey = await crypto.subtle.importKey(
      'spki',
      this.pemToArrayBuffer(this.backendPublicKeyPem),
      {
        name: 'RSA-OAEP',
        hash: 'SHA-256',
      },
      false,
      ['encrypt'],
    );

    // RSA Encrypt both AES encrypted API Key and Secret
    const rsaEncryptedApiKey = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      publicKey,
      aesEncryptedApiKey,
    );

    const rsaEncryptedApiSecret = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      publicKey,
      aesEncryptedApiSecret,
    );

    return {
      encrypted_api_key: this.arrayBufferToBase64(rsaEncryptedApiKey),
      encrypted_api_secret: this.arrayBufferToBase64(rsaEncryptedApiSecret),
      salt_hex: saltHex,
      iv_hex: ivHex,
    };
  }

  // Convert PEM format to ArrayBuffer
  private pemToArrayBuffer(pem: string): ArrayBuffer {
    const b64 = pem.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '');
    const binaryString = atob(b64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // Convert ArrayBuffer to Base64
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  }
}

const publicKeyPem = `
  -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjXbS4rgxoj2HRqLhkJjM
fXpDSNWBpbyA5p6/LbFY8NI6DNz0+mpYLZ2wYHayDrhYvFajGYWGewiGXt6o3eFE
Ib28RnC64RSfEvYrDn/ZKJlZ95AsOkzR3KL4vstP+6iyqADInjWEeTmVGh2Mh7GF
QgIr30vKZ+3fNhaHoulxMemw1luCoXBT6XG41Vlku8RBGhSMtQbwm95LcjrVln/c
bCYVkF7pQFlcX9U6WhPkqeUYqznu+DlVpMY7VJhtyjoLAi5v4kypO2Z0kcAri2DD
dR7gWbeAV9Os4gPMCbOiCxJRCpegkz9kgbBn5Bk3VtraMs5g8ndHholVAIJRWvBY
XQIDAQAB
-----END PUBLIC KEY-----

  `; // Replace with actual key

export const cexKeyEncryption = new KeyEncryption(publicKeyPem);
