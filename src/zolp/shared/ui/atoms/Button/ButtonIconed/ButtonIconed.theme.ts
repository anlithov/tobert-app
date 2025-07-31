import { DefaultTheme } from 'styled-components';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { IconButtonColors } from './libs/types/button-iconed.types.ts';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { PaletteKeys } from '../../../../../app/theme/styled-components';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const buttonIconedTheme = (
  theme: DefaultTheme,
  color: IconButtonColors,
) => {
  const formColor = (tone: number) => {
    return theme.palette[(color + tone) as PaletteKeys];
  };

  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      iconButtonFilledColor: theme.palette.textMainLight,
      iconButtonFilledBackground: formColor(600),
      iconButtonFilledHoverBackground: formColor(700),
      iconButtonFilledActiveBackground: formColor(800),

      iconButtonStandardColor: formColor(600),
      iconButtonStandardInversColor: formColor(100),
      iconButtonStandardHoverBackground: addAlpha(formColor(200), 0.7),
      iconButtonStandardHoverColor: formColor(600),
      iconButtonStandardActiveBackground: formColor(200),
      iconButtonStandardActiveColor: formColor(600),

      iconButtonTonalColor: formColor(600),
      iconButtonTonalBackground: addAlpha(formColor(500), 0.2),
      iconButtonTonalHoverBackground: addAlpha(formColor(500), 0.3),
      iconButtonTonalActiveBackground: addAlpha(formColor(500), 0.4),

      iconButtonGradientColor: formColor(600),
      iconButtonGradientBackground: addAlpha(formColor(500), 0.2),
      iconButtonGradientHoverBackground: addAlpha(formColor(500), 0.3),
      iconButtonGradientActiveBackground: addAlpha(formColor(500), 0.4),

      iconButtonOutlinedColor: formColor(600),
      iconButtonOutlinedBorderColor: formColor(600),
      iconButtonOutlinedHoverBackground: formColor(200),
      iconButtonOutlinedActiveBackground: formColor(300),
    },
    [THEME_MODES.dark]: {
      iconButtonFilledColor: formColor(900),
      iconButtonFilledBackground: formColor(400),
      iconButtonFilledHoverBackground: addAlpha(formColor(300), 0.9),
      iconButtonFilledActiveBackground: addAlpha(formColor(300), 0.85),

      iconButtonStandardColor: formColor(300),
      iconButtonStandardInversColor: formColor(800),
      iconButtonStandardHoverBackground: addAlpha(formColor(500), 0.5),
      iconButtonStandardHoverColor: formColor(100),
      iconButtonStandardActiveBackground: addAlpha(formColor(600), 0.5),
      iconButtonStandardActiveColor: formColor(100),

      iconButtonTonalColor: formColor(300),
      iconButtonTonalBackground: addAlpha(formColor(500), 0.2),
      iconButtonTonalHoverBackground: addAlpha(formColor(500), 0.25),
      iconButtonTonalActiveBackground: addAlpha(formColor(500), 0.3),

      iconButtonGradientColor: formColor(100),
      iconButtonGradientBackground:
        'linear-gradient(to right, rgb(114 159 242), rgb(107, 41, 231))',
      iconButtonGradientHoverBackground:
        'linear-gradient(to right, rgba(114, 159, 242, 0.8), rgba(107, 41, 231, 0.8))',
      iconButtonGradientActiveBackground:
        'linear-gradient(to right, rgba(114, 159, 242, 0.9), rgba(107, 41, 231, 0.9))',

      iconButtonOutlinedColor: formColor(500),
      iconButtonOutlinedBorderColor: formColor(500),
      iconButtonOutlinedHoverBackground: addAlpha(formColor(500), 0.2),
      iconButtonOutlinedActiveBackground: addAlpha(formColor(500), 0.25),
    },
  });
};
