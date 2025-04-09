import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes';

export const searchFieldTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      iconColor: theme.palette.secondary800,
      iconHoverColor: theme.palette.secondary500,
    },
    [THEME_MODES.dark]: {
      iconColor: theme.palette.secondary500,
      iconHoverColor: theme.palette.secondary800,
    },
  });
};
