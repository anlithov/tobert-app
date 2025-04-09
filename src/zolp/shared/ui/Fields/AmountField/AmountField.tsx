import React, { FC } from 'react';
import bn from 'bignumber.js';

import {
  BeforeInputSymbol,
  Container,
  Input,
  InputContainer,
} from './AmountField.styled';
import { AmountFieldProps } from './AmountField.types';

const AmountField: FC<AmountFieldProps> = ({
  value,
  onChange,
  onBlur,
  errors,
  align,
  height = '3.6em',
  disabled = false,
  name,
  step = 0.001,
  decimal,
  placeholder,
  beforeInput,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onChange) {
      if (event.code === 'ArrowUp') {
        onChange({
          ...event,
          target: {
            ...event.currentTarget,
            value: bn(value || 0)
              .plus(step)
              .toString(),
          },
        });
      } else if (event.code === 'ArrowDown') {
        onChange({
          ...event,
          target: {
            ...event.currentTarget,
            value: bn(value || 0)
              .minus(step)
              .toString(),
          },
        });
      }
    }
  };

  return (
    <Container>
      <InputContainer
        align={align}
        height={height}
        error={errors && errors.length > 0 ? 'err' : ''}
        value={String(value)}
        className={`${disabled ? 'disabled' : ''}`}
      >
        {beforeInput && (
          <BeforeInputSymbol className={!value ? 'no-value' : ''}>
            {beforeInput}
          </BeforeInputSymbol>
        )}
        <Input
          allowNegative={false}
          autoComplete="off"
          name={name}
          align={align}
          value={value}
          placeholder={placeholder ?? '0.0'}
          onKeyDown={handleKeyDown}
          allowLeadingZeros
          thousandSeparator=","
          error={errors && errors.length > 0 ? 'err' : ''}
          onChange={onChange}
          onBlur={onBlur}
          decimalScale={decimal}
        />
      </InputContainer>
    </Container>
  );
};

export default AmountField;
