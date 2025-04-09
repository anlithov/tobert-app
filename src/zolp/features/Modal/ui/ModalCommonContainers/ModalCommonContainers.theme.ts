import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const modalCommonContainersTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      containerShadow: theme.palette.shadowColorLight,
      borderColor: theme.palette.secondary200,
      separatorColor: theme.palette.secondary300,
    },
    [THEME_MODES.dark]: {
      containerShadow: theme.palette.shadowColorDark,
      borderColor: theme.palette.secondary700,
      separatorColor: theme.palette.secondary600,
    },
  });
};
