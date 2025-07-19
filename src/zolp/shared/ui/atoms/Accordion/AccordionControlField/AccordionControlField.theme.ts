import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const accordionControlFieldTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      buttonBackground: theme.palette.secondary100,
    },
    [THEME_MODES.dark]: {
      buttonBackground: theme.palette.secondary900,
    },
  });
};
