import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { FieldVariants } from '../libs/constants/button.variants.ts';

export interface FieldBaseTypes {
  name?: string;
  disabled?: boolean;
  value?: string;
  helperText?: string;
  height?: string;
  align?: string;
  type?: HTMLInputTypeAttribute | 'numeric-string';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  errors?: string[];
  helperTextPadding?: string;
  hideErrorText?: boolean;
  hideErrorIcon?: boolean;
  allowNegative?: boolean;
  variant?: FieldVariants;
  color?: string;
  backgroundColor?: string;
}

export interface AppFieldProps extends FieldBaseTypes {
  minCharacters?: number;
  placeholder?: ReactNode;
  required?: boolean;
  autoFocus?: boolean;
  color?: string;
  $rightElement?: ReactNode;
  $leftElement?: ReactNode;
}
