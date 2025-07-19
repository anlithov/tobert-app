export const DROPDOWN_FIELD_VARIANTS = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
  FILLED_ALT: 'filled-alt',
} as const;

type keys = keyof typeof DROPDOWN_FIELD_VARIANTS;
export type DropdownFieldVariants = (typeof DROPDOWN_FIELD_VARIANTS)[keys];
