import { componentThemeConfig } from '../../zolp/shared/lib/helpers/component-theme.config.ts';
import { DefaultTheme } from 'styled-components';
import { THEME_MODES } from '../../zolp/app/theme/theme-modes.ts';

export const logoTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      back: theme.palette.primary400,
    },
    [THEME_MODES.dark]: {
      back: theme.palette.primary800,
    },
  });
};
