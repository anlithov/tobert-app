import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../app/theme/theme-modes.ts';

export const sideMenuTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundColor: theme.palette.secondary100,
    },
    [THEME_MODES.dark]: {
      backgroundColor: theme.palette.secondary900,
    },
  });
};
