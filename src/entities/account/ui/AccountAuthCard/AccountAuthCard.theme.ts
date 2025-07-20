import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../zolp/shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../zolp/app/theme/theme-modes.ts';

export const accountAuthCardTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      containerBackground: theme.palette.containerMainLight,
    },
    [THEME_MODES.dark]: {
      containerBackground: theme.palette.secondary800,
    },
  });
};
