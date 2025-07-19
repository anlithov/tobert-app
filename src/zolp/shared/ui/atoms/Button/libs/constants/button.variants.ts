export const BUTTON_VARIANTS = {
  FILLED: 'filled',
  TONAL: 'tonal',
  OUTLINED: 'outlined',
  ELEVATED: 'elevated',
  FLAT: 'flat',
  GRADIENT: 'gradient',
} as const;

type keys = keyof typeof BUTTON_VARIANTS;
export type ButtonVariants = (typeof BUTTON_VARIANTS)[keys];
