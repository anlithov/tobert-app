import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes.ts';

export const chipTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundFilledColor: theme.palette.secondary100,
      backgroundFilledHoverColor: theme.palette.primary200,
      backgroundFilledActiveColor: theme.palette.primary200,
    },
    [THEME_MODES.dark]: {
      backgroundFilledColor: theme.palette.secondary900,
      backgroundFilledHoverColor: theme.palette.secondary700,
      backgroundFilledActiveColor: theme.palette.primary800,
    },
  });
};
