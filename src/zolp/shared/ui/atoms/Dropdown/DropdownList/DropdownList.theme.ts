import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const dropdownListTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      color: theme.palette.textMainLight,
      itemHoverBackground: theme.palette.secondary200,
      containerBackground: theme.palette.dropdownBackgroundLight,
      containerShadow: theme.palette.shadowColorLight,
    },
    [THEME_MODES.dark]: {
      color: theme.palette.textMainDark,
      itemHoverBackground: theme.palette.secondary700,
      containerBackground: theme.palette.dropdownBackgroundDark,
      containerShadow: theme.palette.shadowColorDark,
    },
  });
};
