import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const chipTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      // filled
      backgroundFilledColor: theme.palette.secondary100,
      backgroundFilledHoverColor: theme.palette.primary200,
      backgroundFilledActiveColor: theme.palette.primary200,
      // outlined
      borderOutlinedColor: theme.palette.secondary800,
      backgroundOutlinedColor: theme.palette.secondary700,
      backgroundOutlinedHoverColor: theme.palette.secondary700,
      backgroundOutlinedActiveColor: theme.palette.primary800,
    },
    [THEME_MODES.dark]: {
      // filled
      backgroundFilledColor: theme.palette.secondary800,
      backgroundFilledHoverColor: theme.palette.secondary700,
      backgroundFilledActiveColor: theme.palette.primary800,
      // outlined
      borderOutlinedColor: theme.palette.secondary400,
      backgroundOutlinedColor: theme.palette.secondary800,
      backgroundOutlinedHoverColor: theme.palette.secondary800,
      backgroundOutlinedActiveColor: theme.palette.primary500,
    },
  });
};
