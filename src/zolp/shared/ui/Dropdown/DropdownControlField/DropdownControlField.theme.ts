import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const dropdownFieldTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundColor: theme.palette.secondary100,
      success: theme.palette.primary500,
      active: theme.palette.secondary300,
      hover: theme.palette.primary400,

      backgroundFilledColor: addAlpha(theme.palette.secondary100, 0.5),
      backgroundFilledHoverColor: addAlpha(theme.palette.secondary100, 0.75),
      backgroundFilledActiveColor: theme.palette.secondary200,

      backgroundFilledAltColor: addAlpha(theme.palette.secondary100, 0.5),
      backgroundFilledAltHoverColor: addAlpha(theme.palette.secondary100, 0.75),
      backgroundFilledAltActiveColor: theme.palette.secondary200,
    },
    [THEME_MODES.dark]: {
      backgroundColor: theme.palette.secondary900,
      success: theme.palette.secondary700,
      active: theme.palette.secondary600,
      hover: addAlpha(theme.palette.primary300, 0.35),

      backgroundFilledColor: addAlpha(theme.palette.secondary900, 0.7),
      backgroundFilledHoverColor: addAlpha(theme.palette.secondary900, 0.4),
      backgroundFilledActiveColor: addAlpha(theme.palette.secondary900, 0.6),

      backgroundFilledAltColor: theme.palette.secondary800,
      backgroundFilledAltHoverColor: theme.palette.secondary700,
      backgroundFilledAltActiveColor: addAlpha(theme.palette.secondary800, 0.7),
    },
  });
};
