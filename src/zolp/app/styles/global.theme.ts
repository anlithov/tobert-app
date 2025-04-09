import { DefaultTheme } from 'styled-components';
import { THEME_MODES } from '../theme/theme-modes';
import { componentThemeConfig } from '../../shared/lib/helpers/component-theme.config.ts';

export const globalTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      bodyColor: theme.palette.textMainLight,
      bodyBackgroundColor: theme.palette.secondary100,
      bodyContainerColor: theme.palette.containerMainLight,
      linkColor: theme.palette.primary600,
      linkHoverColor: theme.palette.primary700,
    },
    [THEME_MODES.dark]: {
      bodyColor: theme.palette.textMainDark,
      bodyBackgroundColor: theme.palette.secondary900,
      bodyContainerColor: theme.palette.containerMainDark,
      linkColor: theme.palette.primary400,
      linkHoverColor: theme.palette.primary500,
    },
  });
};
