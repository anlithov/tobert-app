import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const switchTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundActive: theme.palette.primary700,
      backgroundInActive: addAlpha(theme.palette.secondary400, 0.3),
      borderActive: theme.palette.primary300,
      borderInActive: addAlpha(theme.palette.secondary800, 0.3),
      thumbBackgroundActive: theme.palette.secondary100,
      thumbBackgroundActiveHovered: theme.palette.secondary200,
      thumbBackgroundPressed: theme.palette.primary700,
      thumbBackgroundInActive: theme.palette.secondary400,
      thumbBackgroundInActiveHovered: theme.palette.secondary500,
      thumbColorActive: theme.palette.secondary200,
      thumbColorInActive: addAlpha(theme.palette.secondary500, 0.3),
    },
    [THEME_MODES.dark]: {
      backgroundActive: theme.palette.primary300,
      backgroundInActive: theme.palette.secondary700,
      borderActive: theme.palette.primary300,
      borderInActive: addAlpha(theme.palette.secondary800, 0.3),
      thumbBackgroundActive: theme.palette.primary900,
      thumbBackgroundActiveHovered: theme.palette.primary800,
      thumbBackgroundPressed: theme.palette.primary700,
      thumbBackgroundInActive: theme.palette.secondary400,
      thumbBackgroundInActiveHovered: theme.palette.secondary300,
      thumbColorActive: theme.palette.secondary200,
      thumbColorInActive: addAlpha(theme.palette.secondary500, 0.3),
    },
  });
};
