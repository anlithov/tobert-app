import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const segmentedButtonsTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      border: theme.palette.secondary500,
      colorActive: theme.palette.secondary900,
      backgroundHover: addAlpha(theme.palette.primary200, 0.3),
      backgroundActive: addAlpha(theme.palette.primary200, 0.6),
    },
    [THEME_MODES.dark]: {
      border: theme.palette.secondary600,
      colorActive: theme.palette.secondary100,
      backgroundHover: addAlpha(theme.palette.primary500, 0.15),
      backgroundActive: addAlpha(theme.palette.primary500, 0.2),
    },
  });
};
