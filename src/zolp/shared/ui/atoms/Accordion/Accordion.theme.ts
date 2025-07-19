import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const accordionTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      containerBackground: theme.palette.containerMainLight,
    },
    [THEME_MODES.dark]: {
      containerBackground: theme.palette.containerMainDark,
    },
  });
};
