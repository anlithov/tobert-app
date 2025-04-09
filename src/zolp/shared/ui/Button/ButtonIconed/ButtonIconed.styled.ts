import styled from 'styled-components';
import { buttonIconedTheme } from './ButtonIconed.theme.ts';
import { IconButtonColors } from './libs/types/button-iconed.types.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util';
import { buttonCommonTheme } from '../ButtonCommon/ButtonCommon.theme.ts';
import { BUTTON_VARIANTS } from '../libs/constants/button.variants.ts';

export const IconButtonContainer = styled.button<{
  height?: string;
  width: string;
  color: IconButtonColors;
  borderRadius?: string;
}>`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => props.width ?? undefined};
  width: ${(props) => props.width ?? undefined};
  height: ${(props) => props.height ?? props.width};
  max-width: 100%;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius ?? props.width ?? undefined};
  padding: 0;
  &[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }

  transition:
    0.15s background,
    0.2s box-shadow,
    0.2s opacity;

  &.${BUTTON_VARIANTS.FILLED} {
    background: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonFilledBackground};
    svg {
      color: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonFilledColor};
    }
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonFilledColor};
    &.active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonFilledActiveBackground};
    }
    &:hover {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonFilledHoverBackground};
    }
    &:active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonFilledActiveBackground};
    }
  }

  &.${BUTTON_VARIANTS.FLAT} {
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonStandardColor};
    background: ${({ theme, color }) =>
      addAlpha(
        buttonIconedTheme(theme, color).iconButtonStandardActiveBackground,
        0,
      )};

    &.active,
    &:active {
      color: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonStandardActiveColor};
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonStandardActiveBackground};
    }
    &:hover {
      color: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonStandardHoverColor};
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonStandardHoverBackground};
    }
  }

  &.${BUTTON_VARIANTS.TONAL} {
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonTonalColor};

    background: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonTonalBackground};
    &:hover {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonTonalHoverBackground};
    }
    &:active,
    &.active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonTonalActiveBackground};
    }
  }

  &.${BUTTON_VARIANTS.GRADIENT} {
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonGradientColor};

    background: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonGradientBackground};
    &:hover {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonGradientHoverBackground};
    }
    &:active,
    &.active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonGradientActiveBackground};
    }
  }

  &.${BUTTON_VARIANTS.GRADIENT} {
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonGradientColor};

    background: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonGradientBackground};
    &:hover {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonGradientHoverBackground};
    }
    &:active,
    &.active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonGradientActiveBackground};
    }
  }

  &.${BUTTON_VARIANTS.OUTLINED} {
    color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonOutlinedColor};
    border-color: ${({ theme, color }) =>
      buttonIconedTheme(theme, color).iconButtonOutlinedBorderColor};
    border-style: solid;
    border-width: 0.1em;
    background: ${({ theme, color }) =>
      addAlpha(
        buttonIconedTheme(theme, color).iconButtonOutlinedActiveBackground,
        0,
      )};

    &.active,
    &:active {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonOutlinedActiveBackground};
    }
    &:hover {
      background: ${({ theme, color }) =>
        buttonIconedTheme(theme, color).iconButtonOutlinedHoverBackground};
    }
  }

  &.${BUTTON_VARIANTS.ELEVATED} {
    color: ${({ theme }) => buttonCommonTheme(theme).buttonElevatedColor};
    background: ${({ theme }) =>
      buttonCommonTheme(theme).buttonElevatedBackground};
    .loading {
      fill: ${({ theme }) => buttonCommonTheme(theme).buttonElevatedColor};
    }
    &:active,
    &.active {
      background: ${({ theme }) =>
        buttonCommonTheme(theme).buttonElevatedActiveBackground};
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
`;
