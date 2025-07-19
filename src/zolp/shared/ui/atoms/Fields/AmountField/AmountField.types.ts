import { FieldBaseTypes } from '../base/AppField.types.ts';

export interface AmountFieldProps extends FieldBaseTypes {
  step?: string | number;
  decimal?: number;
  placeholder?: string;
  beforeInput?: string;
}
