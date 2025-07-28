import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../zolp/shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../zolp/app/theme/theme-modes.ts';

export const headerTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      shadow: theme.palette.shadowColorLight,
      backgroundColor: theme.palette.secondary100,
    },
    [THEME_MODES.dark]: {
      shadow: theme.palette.shadowColorDark,
      backgroundColor: theme.palette.secondary900,
    },
  });
};
