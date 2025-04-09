import styled from 'styled-components';
import { appFieldTheme } from './AppField.theme';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util';
import { IoMdAlert } from 'react-icons/io';
import { NumericFormat } from 'react-number-format';

export const Container = styled.div`
  padding-top: 1em;
  width: 100%;
`;

export const InputContainer = styled.div<{
  $leftElement?: string;
  $rightElement?: string;
  value?: string;
  color?: string;
  height?: string;
  align?: string;
  backgroundColor?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  width: 100%;
  outline: 0;
  height: ${(props) => props.height ?? '3.2em'};
  background-color: inherit;
  padding: 0 1.2em;
  border-radius: 1.4em;
  ${(props) => props.$leftElement && 'padding-left: 5.2em;'};
  ${(props) => props.$rightElement && 'padding-right: 5.2em;'};
  transition: 0.1s all;
  &.disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  .inputBorder {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 1em;
    transition: 0.1s;
  }

  label {
    position: absolute;
    display: flex;
    align-items: center;
    height: 1.1em;
    color: ${(props) => appFieldTheme(props.theme).label};
    span {
      font-size: 1.6em !important;
      transition: 0.1s all;
    }
    top: ${(props) => (props.height ? `calc(${props.height} * 0.42)` : '1em')};
    padding: 0 0.5em;
    line-height: 1.13em;
    font-weight: 400;
    transition: 0.1s all;
    cursor: text;
    &.error {
      color: ${(props) => appFieldTheme(props.theme).error};
    }
  }

  &.filled {
    border-radius: 0.7em 0.7em 0 0;
    .inputBorder {
      border-radius: 0;
      border-bottom: 1px solid
        ${({ theme }) =>
          appFieldTheme(theme).appFieldInputContainerFilledFieldBorder};
    }
    background: ${({ theme, backgroundColor }) =>
      backgroundColor ??
      appFieldTheme(theme).appFieldInputContainerFilledFieldBackground};

    label {
      color: ${({ theme }) =>
        addAlpha(appFieldTheme(theme).appFieldInputContainerColor, 0.6)};
    }
    &:focus-within {
      border-radius: 0.7em;
      label {
        span {
          font-size: 1.2em !important;
        }
        top: 0.8em !important;
        padding: 0 0.5em;
      }
      .inputBorder {
        border-bottom: 3px solid
          ${({ theme }) =>
            appFieldTheme(theme)
              .appFieldInputContainerOutlinedFieldFocusWithinBorder};
      }
    }

    label {
      ${(props) => {
        if (props.align === 'left' || !props.align) {
          return 'left: -0.3em;';
        } else if (props.align === 'right') {
          return 'right: -0.3em;';
        }
      }}
      ${(props) => {
        if (props.value && props.value?.length > 0) {
          return `
          span {
              font-size: 1.2em !important;
          }
          top: 0.8em !important;
          padding: 0 0.5em;
        `;
        }
      }}
    }
    &.error {
      .inputBorder {
        border-bottom: 1px solid
          ${(props) =>
            addAlpha(appFieldTheme(props.theme).error, 0.3)}!important;
      }
    }
  }

  &.outlined {
    .inputBorder {
      border: 1px solid
        ${({ theme }) =>
          appFieldTheme(theme).appFieldInputContainerOutlinedFieldBorder};
    }
    color: ${({ theme }) =>
      appFieldTheme(theme).appFieldInputContainerOutlinedFieldColor};

    label {
      transition: 0.1s;
      opacity: 0.7;
    }

    &:focus-within {
      .inputBorder {
        border: 3px solid
          ${({ theme }) =>
            appFieldTheme(theme)
              .appFieldInputContainerOutlinedFieldFocusWithinBorder}!important;
      }
      label {
        opacity: 1;
        span {
          font-size: 1.3em !important;
        }
        top: -0.65em !important;
        padding: 0 0.5em;
        color: ${({ theme }) =>
          appFieldTheme(theme)
            .appFieldInputContainerOutlinedFieldFocusWithinBorder};
      }
    }

    &:hover {
      .inputBorder {
        border: 1px solid ${({ theme }) => appFieldTheme(theme).hover};
      }
    }
    &.error {
      label {
        color: ${({ theme }) => appFieldTheme(theme).error};
      }
      .inputBorder {
        border: 1px solid
          ${(props) =>
            addAlpha(appFieldTheme(props.theme).error, 0.3)}!important;
      }
    }

    label {
      background: ${({ theme, backgroundColor }) =>
        backgroundColor ??
        appFieldTheme(theme).appFieldInputContainerOutlinedLabelBack};
      ${(props) => {
        if (props.align === 'left' || !props.align) {
          return 'left: -0.3em;';
        } else if (props.align === 'right') {
          return 'right: -0.3em;';
        }
      }}
      ${(props) => {
        if (props.value && props.value?.length > 0) {
          return `
          span {
              font-size: 1.3em !important;
          }
          opacity: 1;
          top: -0.65em !important;
          padding: 0 0.5em;
        `;
        }
      }}
    }
  }
  &:focus-within {
    input {
      color: ${({ theme }) =>
        appFieldTheme(theme)
          .appFieldInputContainerOutlinedFieldColor}!important;
    }
  }
`;
export const InputWithLabelContainer = styled.div<{}>`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ElementContainer = styled.div<{ right?: boolean }>`
  position: absolute;
  top: 0;
  ${({ right }) => (right ? 'right: 0' : 'left: 0')};
  display: flex;
  place-items: center;
  place-content: center;
  height: 100%;
  width: auto;
  padding: 0 1.5em;
  color: ${({ theme }) => appFieldTheme(theme).appFieldElementContainerColor};
`;

export const Input = styled.input<{
  align?: string;
  color?: string;
  error?: string;
  custompaddingtop: string;
}>`
  position: absolute;
  top: 0.1em;
  font-size: 1.6em;
  font-weight: 400;
  line-height: 1.43;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding-top: ${({ custompaddingtop }) => custompaddingtop};
  border: none;
  text-align: ${(props) => props.align ?? 'left'};
  background-color: unset !important;
  color: ${({ color, theme }) =>
    color ?? appFieldTheme(theme).appFieldInputColor}!important;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => appFieldTheme(theme).appFieldInputColor};
  }

  ${(props) =>
    props.error &&
    `
      color: ${appFieldTheme(props.theme).error} !important;
      `}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ color, theme, value }) => {
      return value
        ? (color ?? appFieldTheme(theme).appFieldInputColor)
        : 'transparent';
    }}!important;
    -webkit-box-shadow: none !important;
    transition: background-color 9999999s ease-in-out 0s;
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const InputNumeric = styled(NumericFormat)<{
  align?: string;
  color?: string;
  error?: string;
  custompaddingtop: string;
}>`
  position: absolute;
  top: 0;
  font-size: 1.6em;
  font-weight: 400;
  line-height: 1.43;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding-top: ${({ custompaddingtop }) => custompaddingtop};
  border: none;
  text-align: ${(props) => props.align ?? 'left'};
  background-color: unset !important;
  color: ${({ color, theme }) =>
    color ?? appFieldTheme(theme).appFieldInputColor}!important;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => appFieldTheme(theme).appFieldInputColor};
  }

  ${(props) =>
    props.error &&
    `
      color: ${appFieldTheme(props.theme).error} !important;
      `}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ color, theme, value }) => {
      return value
        ? (color ?? appFieldTheme(theme).appFieldInputColor)
        : 'transparent';
    }}!important;
    -webkit-box-shadow: none !important;
    transition: background-color 9999999s ease-in-out 0s;
  }
`;

export const HelperTextContainer = styled.div<{
  padding: string;
}>`
  display: flex;
  justify-content: space-between;
  padding: ${({ padding }) => padding};
  gap: 1.2em;
`;

export const ErrorIcon = styled(IoMdAlert)`
  font-size: 2.8em;
  color: ${({ theme }) => addAlpha(appFieldTheme(theme).error, 0.6)};
`;

export const Subtitle = styled.span<{
  error?: boolean;
}>`
  position: relative;
  font-size: 1.3em;
  line-height: 1.34;
  color: ${({ theme, error }) =>
    error
      ? appFieldTheme(theme).error
      : appFieldTheme(theme).appFieldInputContainerFilledFieldSubtitle};
`;
