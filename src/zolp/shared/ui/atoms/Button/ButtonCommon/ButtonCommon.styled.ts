import styled from 'styled-components';
import { buttonCommonTheme } from './ButtonCommon.theme.ts';
import { BUTTON_VARIANTS } from '../libs/constants/button.variants.ts';
import { IconButtonColors } from '../ButtonIconed/libs/types/button-iconed.types.ts';
import { ButtonCommonColorsSetup } from './ButtonCommon.types.ts';

export const ButtonContainer = styled.button<{
  height?: string;
  width?: string;
  padding?: string;
  borderRadius?: string;
  colorVariant?: IconButtonColors;
  colorCustomSetup?: ButtonCommonColorsSetup;
}>`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height ?? undefined};
  width: ${(props) => props.width ?? undefined};
  max-width: 100%;
  padding: ${(props) => props.padding ?? '1em 2.4em'};
  cursor: pointer;
  gap: 1em;
  border-radius: ${(props) => props.borderRadius ?? '3em'};

  &.blurry {
    filter: grayscale(0.3);
  }
  &.greyscale {
    filter: grayscale(0.7);
    pointer-events: none;
  }

  > span {
    display: flex;
    align-items: center;
    z-index: 1;
    font-weight: 500;
    line-height: 1.43;
  }

  &[disabled] {
    .support-layer {
      opacity: 0 !important;
    }
  }

  .support-layer {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: 0.2s all;
    opacity: 0;
  }

  transition:
    0.15s background,
    0.2s box-shadow,
    0.2s opacity;

  &.${BUTTON_VARIANTS.TONAL} {
    background: ${({ theme }) =>
      buttonCommonTheme(theme).buttonTonalBackground};
    color: ${({ theme }) => buttonCommonTheme(theme).buttonTonalColor};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonTonalColor};
    }
    &:hover {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonTonalHoverBackground};
    }
    &:active {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonTonalActiveBackground};
    }
    &[disabled] {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonDisabledBackground};
    }
  }

  &.${BUTTON_VARIANTS.FILLED} {
    background: ${({ theme }) =>
      buttonCommonTheme(theme).buttonFilledBackground};
    color: ${({ theme }) => buttonCommonTheme(theme).buttonFilledColor};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonFilledColor};
    }
    &:hover {
      box-shadow:
        0 1px 3px 1px rgba(0, 0, 0, 0.2),
        0 1px 2px 0 rgba(0, 0, 0, 0.2);
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonFilledHoverBackground};
    }
    &:active {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonFilledActiveBackground};
      box-shadow:
        0 1px 3px 1px rgba(0, 0, 0, 0),
        0 1px 2px 0 rgba(0, 0, 0, 0);
    }
    &[disabled] {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonDisabledBackground};
    }
  }

  &.${BUTTON_VARIANTS.ELEVATED} {
    box-shadow:
      0 1px 3px 1px rgba(0, 0, 0, 0.2),
      0 1px 2px 0 rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => buttonCommonTheme(theme).buttonElevatedColor};
    background: ${({ theme }) =>
      buttonCommonTheme(theme).buttonElevatedBackground};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonElevatedColor};
    }
    &:hover {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonElevatedHoverBackground};
    }
    &[disabled] {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonDisabledBackground};
    }
  }

  &.${BUTTON_VARIANTS.OUTLINED} {
    background-color: inherit;
    border: 0.1em solid
      ${({ theme }) => buttonCommonTheme(theme).buttonOutlinedBorder};
    color: ${({ theme }) => buttonCommonTheme(theme).buttonOutlinedColor};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonOutlinedColor};
    }
    &:hover {
      border: 0.1em solid
        ${({ theme }) => buttonCommonTheme(theme).buttonOutlinedBorder};
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonOutlinedHoverBackground};
    }
  }

  &.${BUTTON_VARIANTS.FLAT} {
    cursor: pointer;
    background-color: inherit;
    color: ${({ theme }) => buttonCommonTheme(theme).buttonOutlinedColor};
    &:hover {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonOutlinedHoverBackground};
    }
    &[disabled] {
      color: ${({ theme }) => buttonCommonTheme(theme).buttonDisabledColor};
    }
  }

  &.${BUTTON_VARIANTS.GRADIENT} {
    background: ${({ theme }) =>
      buttonCommonTheme(theme).buttonGradientBackground};
    color: ${({ theme }) => buttonCommonTheme(theme).buttonGradientColor};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonGradientColor};
    }
    &:hover {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonGradientHoverBackground};
    }
    &:active,
    &.active {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonGradientActiveBackground};
    }
    &[disabled] {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonDisabledBackground};
    }
  }

  &[disabled] {
    pointer-events: none;
    box-shadow: none;
    border-color: ${({ theme }) =>
      buttonCommonTheme(theme).buttonDisabledBackground};
    color: ${({ theme }) => buttonCommonTheme(theme).buttonDisabledColor};
  }

  ${({ colorCustomSetup }) => {
    if (colorCustomSetup) {
      return `
        background-color: ${colorCustomSetup?.background}!important;
        color: ${colorCustomSetup?.color}!important;
        &:hover {
          background-color: ${colorCustomSetup?.backgroundHover}!important;
        }
        `;
    }
  }}
`;

export const LoaderCoverFully = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: 1;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex: 1;
`;
