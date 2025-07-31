import { DefaultTheme } from 'styled-components';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const buttonCommonTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      buttonTonalBackground: addAlpha(theme.palette.primary200, 0.6),
      buttonTonalColor: theme.palette.secondary800,
      buttonTonalHoverBackground: addAlpha(theme.palette.primary200, 0.8),
      buttonTonalActiveBackground: theme.palette.primary200,

      buttonGradientBackground:
        'linear-gradient(to right, #729ff2, rgb(107, 41, 231))',
      buttonGradientColor: theme.palette.primary200,
      buttonGradientHoverBackground:
        'linear-gradient(to right, #729ff2, rgba(107, 41, 231, 0.7))',
      buttonGradientActiveBackground: addAlpha(theme.palette.primary500, 0.4),

      buttonFilledBackground: theme.palette.primary600,
      buttonFilledColor: theme.palette.containerMainLight,
      buttonFilledHoverBackground: theme.palette.primary700,
      buttonFilledActiveBackground: theme.palette.primary700,

      buttonOutlinedColor: theme.palette.primary600,
      buttonOutlinedBorder: addAlpha(theme.palette.secondary500, 1),
      buttonOutlinedHoverBackground: theme.palette.primary100,
      buttonOutlinedActiveBackground: theme.palette.primary100,

      buttonElevatedColor: theme.palette.primary600,
      buttonElevatedBackground: theme.palette.containerMainLight,
      buttonElevatedHoverBackground: theme.palette.primary100,
      buttonElevatedActiveBackground: theme.palette.primary100,

      buttonCommonColor: theme.palette.primary600,
      buttonCommonBackground: theme.palette.containerMainLight,

      buttonDisabledBackground: theme.palette.secondary800,
      buttonDisabledColor: theme.palette.secondary700,
    },
    [THEME_MODES.dark]: {
      buttonTonalBackground: addAlpha(theme.palette.primary500, 0.26),
      buttonTonalColor: theme.palette.primary200,
      buttonTonalHoverBackground: addAlpha(theme.palette.primary500, 0.35),
      buttonTonalActiveBackground: addAlpha(theme.palette.primary500, 0.4),

      buttonGradientBackground:
        'linear-gradient(to right, rgb(114 159 242), rgb(107, 41, 231))',
      buttonGradientColor: theme.palette.primary100,
      buttonGradientHoverBackground:
        'linear-gradient(to right, rgba(114, 159, 242, 0.8), rgba(107, 41, 231, 0.8))',
      buttonGradientActiveBackground:
        'linear-gradient(to right, rgba(114, 159, 242, 0.9), rgba(107, 41, 231, 0.9))',

      buttonFilledBackground: theme.palette.primary400,
      buttonFilledColor: theme.palette.primary900,
      buttonFilledHoverBackground: addAlpha(theme.palette.primary400, 0.9),
      buttonFilledActiveBackground: theme.palette.primary500,

      buttonOutlinedColor: theme.palette.primary300,
      buttonOutlinedBorder: addAlpha(theme.palette.secondary500, 0.5),
      buttonOutlinedHoverBackground: addAlpha(theme.palette.primary500, 0.1),
      buttonOutlinedActiveBackground: addAlpha(theme.palette.primary500, 0.1),

      buttonElevatedColor: theme.palette.primary400,
      buttonElevatedBackground: addAlpha(theme.palette.primary400, 0.08),
      buttonElevatedHoverBackground: addAlpha(theme.palette.secondary600, 0.4),
      buttonElevatedActiveBackground: addAlpha(theme.palette.secondary600, 0.3),

      buttonCommonColor: theme.palette.primary600,
      buttonCommonBackground: theme.palette.containerMainDark,

      buttonDisabledBackground: addAlpha(theme.palette.secondary700, 0.5),
      buttonDisabledColor: theme.palette.secondary500,
    },
  });
};
