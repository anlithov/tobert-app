export const LOCALES = {
  EN: 'en',
  UA: 'ua',
} as const;

export type Locales = (typeof LOCALES)[keyof typeof LOCALES];
