import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../zolp/shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../zolp/app/theme/theme-modes.ts';

export const showcaseIconButtonsTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      background: 'unset',
    },
    [THEME_MODES.dark]: {
      background: theme.palette.secondary900,
    },
  });
};
