import React, { ChangeEvent, FC, ReactNode } from 'react';
import { Field, FieldAttributes, FieldProps } from 'formik';
import { FieldBaseTypes } from '../base/AppField.types.ts';
import AppField from '../base/AppField.tsx';
import getDataFromObject from './helpers/getDataFromObject.ts';
import { FieldVariants } from '../libs/constants/button.variants.ts';

export interface FieldFormikBaseTypes<R extends FieldBaseTypes> {
  label?: string;
  required?: boolean;
  formikName: string;
  inputTextAlign?: 'center' | 'right' | 'left';
  placeholder?: ReactNode;
  variant?: FieldVariants;
  Component?: FC<R>;
}
const AppFormikField = <
  T extends Record<string, string | number>,
  R extends FieldBaseTypes,
>({
  formikName,
  errors,
  onBlur: onBlurAddon,
  onChange: onChangeAddon,
  inputTextAlign,
  // @ts-ignore
  Component = AppField,
  type,
  ...otherProps
}: FieldFormikBaseTypes<R> & R) => {
  return (
    <Field name={formikName}>
      {({
        field: { name, onBlur, onChange, value },
        form: { errors: formErrors, touched, setFieldTouched },
      }: FieldAttributes<FieldProps<string | number, T>>) => {
        const nameFields: string[] = [];
        if (name.includes('.')) {
          const nameParts = name.split('.');
          nameFields.push(nameParts[0]);
          nameFields.push(String(Number(nameParts[1])));
        } else {
          nameFields.push(name);
        }
        const errorField =
          nameFields[0] in formErrors
            ? getDataFromObject(formErrors, nameFields)
            : '';
        const hasError = !!(
          nameFields[0] in touched &&
          getDataFromObject(touched, nameFields) &&
          errorField
        );
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          onChangeAddon && onChangeAddon(event);
          onChange(name)(event);
        };

        const handleBlur = (
          event: React.FocusEvent<HTMLInputElement, Element>,
        ) => {
          setFieldTouched(name);
          const eventTarget = event.target;
          onBlurAddon && eventTarget && onBlurAddon(event);
          onBlur(name);
        };

        let errorData: string[];
        if (errors?.length) {
          errorData = errors;
        } else if (hasError) {
          errorData = [errorField];
        } else {
          errorData = [];
        }

        const actualValue = typeof value === 'number' || 'string' ? value : '';

        return (
          // @ts-ignore
          <Component
            name={formikName}
            value={actualValue}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errorData}
            type={type}
            {...otherProps}
          />
        );
      }}
    </Field>
  );
};

export default AppFormikField;
