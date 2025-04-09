import React, { FC } from 'react';
import { AppFieldProps } from './AppField.types';
import {
  Container,
  ElementContainer,
  ErrorIcon,
  HelperTextContainer,
  Input,
  InputContainer,
  InputNumeric,
  InputWithLabelContainer,
  Subtitle,
} from './AppField.styled';
import { FIELD_VARIANTS } from '../libs/constants/button.variants.ts';

const AppField: FC<AppFieldProps> = ({
  value,
  onChange,
  type,
  onBlur,
  $leftElement,
  $rightElement,
  errors,
  helperText,
  color,
  align,
  height = '5.2em',
  placeholder,
  minCharacters,
  required = false,
  variant = FIELD_VARIANTS.OUTLINED,
  disabled = false,
  name,
  helperTextPadding = '0.5em 1.4em',
  autoFocus,
  hideErrorText,
  hideErrorIcon,
  allowNegative,
  backgroundColor,
}) => {
  const isError = errors && errors.length > 0 ? 'err' : '';

  const inputProps = {
    autoComplete: 'off',
    name,
    color,
    align,
    value,
    error: errors && errors.length > 0 ? 'err' : '',
    onChange,
    onBlur,
    autoFocus,
    custompaddingtop: placeholder && variant === 'filled' ? '0.9em' : '0',
  };

  return (
    <Container>
      <InputContainer
        align={align}
        height={height}
        color={color}
        value={String(value)}
        $leftElement={$leftElement ? 'le' : ''}
        $rightElement={$rightElement ? 're' : ''}
        className={`${variant} ${disabled ? 'disabled' : ''} ${
          isError ? 'error' : ''
        }`}
        backgroundColor={backgroundColor}
      >
        <div className="inputBorder" />
        {$leftElement && <ElementContainer>{$leftElement}</ElementContainer>}
        <InputWithLabelContainer>
          <label
            className={
              !hideErrorText && errors && errors?.length > 0 ? 'error' : ''
            }
          >
            <span>
              {placeholder ? (
                <>
                  {placeholder}
                  {`${required ? '*' : ''}`}
                </>
              ) : (
                ''
              )}
            </span>
          </label>
          {type === 'numeric-string' ? (
            <InputNumeric
              {...inputProps}
              valueIsNumericString={true}
              allowNegative={allowNegative}
            />
          ) : (
            <Input {...inputProps} type={type} />
          )}
        </InputWithLabelContainer>
        {errors && errors?.length > 0 ? (
          <ElementContainer right>
            {$rightElement}
            {!hideErrorIcon && <ErrorIcon size="0.87em" />}
          </ElementContainer>
        ) : (
          $rightElement && (
            <ElementContainer right>{$rightElement}</ElementContainer>
          )
        )}
      </InputContainer>
      {(!hideErrorText || helperText) && (
        <HelperTextContainer padding={helperTextPadding}>
          {!hideErrorText && errors && errors?.length > 0 ? (
            <>
              <Subtitle error>
                {errors.map((error, index) => {
                  return errors.length - 1 == index ? error : `${error}, `;
                })}
              </Subtitle>
              {minCharacters && value && minCharacters > value?.length && (
                <Subtitle error>
                  {value?.length}/{minCharacters}
                </Subtitle>
              )}
            </>
          ) : (
            <Subtitle>{helperText}</Subtitle>
          )}
        </HelperTextContainer>
      )}
    </Container>
  );
};

export default AppField;
