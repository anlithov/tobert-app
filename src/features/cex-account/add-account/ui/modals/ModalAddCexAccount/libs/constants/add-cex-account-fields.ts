export const ADD_CEX_ACCOUNT_FIELDS = {
  name: 'name',
  API_KEY: 'apiKey',
  API_SECRET: 'apiSecret',
  totp: 'totp',
  password: 'password',
} as const;

export type AddCexAccountFields =
  (typeof ADD_CEX_ACCOUNT_FIELDS)[keyof typeof ADD_CEX_ACCOUNT_FIELDS];
