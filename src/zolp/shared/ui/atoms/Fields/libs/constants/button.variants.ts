export const FIELD_VARIANTS = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
} as const;

type keys = keyof typeof FIELD_VARIANTS;
export type FieldVariants = (typeof FIELD_VARIANTS)[keys];
