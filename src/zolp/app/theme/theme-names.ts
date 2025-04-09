export const PALETTE_NAMES = {
  lightBlue: 'lightBlue',
  lightGreen: 'lightGreen',
} as const;

type keys = keyof typeof PALETTE_NAMES;

export type ThemesNames = (typeof PALETTE_NAMES)[keys];
