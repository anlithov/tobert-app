export const THEME_MODES = {
  light: 'light',
  dark: 'dark',
} as const;

type keys = keyof typeof THEME_MODES;

export type ThemeModes = (typeof THEME_MODES)[keys];
