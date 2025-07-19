import styled from 'styled-components';
import { amountFieldTheme } from './AmountField.theme.ts';
import { NumericFormat } from 'react-number-format';
import { NumberCell } from '../../../lib/styled/NumberCell.styled.ts';

export const Container = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div<{
  value?: string;
  error?: string;
  height: string;
  align?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  outline: 0;
  height: ${({ height }) => height};
  background-color: inherit;
  border-radius: 9.9em;
  transition: 0.1s all;
  &.disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const Input = styled(NumericFormat)<{
  align?: string;
  error?: string;
}>`
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 3em;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  text-align: ${(props) => props.align ?? 'left'};
  background-color: unset !important;
  color: ${({ theme }) =>
    amountFieldTheme(theme).amountFieldInputColor} !important;

  &::placeholder {
    color: ${({ theme }) =>
      amountFieldTheme(theme).amountFieldPlaceholderColor} !important;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.error &&
    `
      color: ${amountFieldTheme(props.theme).error} !important;
      `};
`;

export const BeforeInputSymbol = styled(NumberCell)`
  font-size: 3em;
  &.no-value {
    opacity: 0.3;
  }
`;
