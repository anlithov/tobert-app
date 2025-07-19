import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../../../app/theme/theme-modes.ts';

export const tableNotFoundTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      iconColor: theme.palette.secondary200,
      textColor: theme.palette.secondary600,
    },
    [THEME_MODES.dark]: {
      iconColor: theme.palette.secondary200,
      textColor: theme.palette.secondary400,
    },
  });
};
