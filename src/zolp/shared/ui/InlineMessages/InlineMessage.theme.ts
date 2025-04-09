import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes.ts';

export const inlineMessageTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      errorBackground: theme.palette.errorContainerLight,
      errorColor: theme.palette.errorLight,
      warningBackground: theme.palette.warningContainerLight,
      warningColor: theme.palette.warningLight,
      successBackground: theme.palette.warningContainerDark,
      successColor: theme.palette.successDark,
    },
    [THEME_MODES.dark]: {
      errorBackground: theme.palette.errorContainerDark,
      errorColor: theme.palette.errorDark,
      warningBackground: theme.palette.warningContainerDark,
      warningColor: theme.palette.warningDark,
      successBackground: theme.palette.successContainerDark,
      successColor: theme.palette.successDark,
    },
  });
};
