import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes.ts';

export const tooltipContainerTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      containerBackground: theme.palette.secondary800,
      color: theme.palette.secondary100,
    },
    [THEME_MODES.dark]: {
      containerBackground: theme.palette.secondary700,
      color: theme.palette.secondary100,
    },
  });
};
