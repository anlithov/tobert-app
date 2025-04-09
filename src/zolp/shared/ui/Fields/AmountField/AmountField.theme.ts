import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util';

export const amountFieldTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      error: theme.palette.errorLight,
      inputColor: theme.palette.neutral400,
      amountFieldSubtitle: theme.palette.secondary400,
      amountFieldInputColor: theme.palette.textMainLight,
      amountFieldPlaceholderColor: addAlpha(theme.palette.textMainLight, 0.25),
    },
    [THEME_MODES.dark]: {
      error: theme.palette.errorDark,
      inputColor: theme.palette.secondary500,
      amountFieldSubtitle: theme.palette.secondary400,
      amountFieldInputColor: theme.palette.textMainDark,
      amountFieldPlaceholderColor: addAlpha(theme.palette.textMainDark, 0.25),
    },
  });
};
