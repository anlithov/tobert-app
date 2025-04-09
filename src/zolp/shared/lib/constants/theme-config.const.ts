export const THEME_STORAGE_KEYS = {
  THEME_MODE: 'THEME_MODE',
  THEME_PALETTE: 'THEME_PALETTE',
} as const;
type keys = keyof typeof THEME_STORAGE_KEYS;
export type ThemeStorageKeys = (typeof THEME_STORAGE_KEYS)[keys];
