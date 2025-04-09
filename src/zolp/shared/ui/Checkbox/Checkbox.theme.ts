import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes.ts';

export const checkboxTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      uncheckedBorder: theme.palette.textMainLight,

      uncheckedBorderDisabled: theme.palette.secondary400,
      checkedBorderDisabled: theme.palette.transparent,
      checkedBackgroundDisabled: theme.palette.primary600,

      uncheckedBackground: theme.palette.transparent,
      background: theme.palette.secondary100,
      checkedBackground: theme.palette.primary600,
      afterBorder: theme.palette.containerMainLight,
      hoverBackground: theme.palette.primary50,
      focusBackground: theme.palette.primary100,
      check: theme.palette.containerMainLight,
      checkDisabled: theme.palette.secondary900,
    },
    [THEME_MODES.dark]: {
      uncheckedBorder: theme.palette.secondary200,

      uncheckedBorderDisabled: theme.palette.secondary200,
      checkedBorderDisabled: theme.palette.secondary600,
      checkedBackgroundDisabled: theme.palette.secondary700,

      uncheckedBackground: theme.palette.transparent,
      background: theme.palette.containerMainDark,
      checkedBackground: theme.palette.primary300,
      afterBorder: theme.palette.containerMainDark,
      hoverBackground: theme.palette.secondary700,
      focusBackground: theme.palette.secondary600,
      check: theme.palette.secondary700,
      checkDisabled: theme.palette.secondary900,
    },
  });
};
