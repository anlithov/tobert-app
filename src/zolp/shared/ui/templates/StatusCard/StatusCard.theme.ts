import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const statusCardTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      textColor: theme.palette.secondary600,
    },
    [THEME_MODES.dark]: {
      textColor: theme.palette.secondary200,
    },
  });
};
