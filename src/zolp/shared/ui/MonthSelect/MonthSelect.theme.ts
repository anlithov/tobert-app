import { DefaultTheme } from 'styled-components';
import { addAlpha } from '../../lib/utils/add-alpha-opacity.util';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes';

export const monthSelectTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundColor: theme.palette.secondary100,
      itemHoverBackground: addAlpha(theme.palette.primary600, 0.1),
    },
    [THEME_MODES.dark]: {
      backgroundColor: theme.palette.secondary900,
      itemHoverBackground: theme.palette.secondary800,
    },
  });
};
