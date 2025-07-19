import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const tabsTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      rail: theme.palette.secondary800,
      activeTabColor: theme.palette.primary500,
      activeTabBorderColor: theme.palette.secondary300,
      hoverTabColor: theme.palette.primary700,
      unActiveTabColor: theme.palette.textMainLight,
    },
    [THEME_MODES.dark]: {
      rail: theme.palette.secondary600,
      activeTabColor: theme.palette.primary100,
      activeTabBorderColor: theme.palette.primary500,
      hoverTabColor: theme.palette.primary400,
      unActiveTabColor: theme.palette.textMainDark,
    },
  });
};
