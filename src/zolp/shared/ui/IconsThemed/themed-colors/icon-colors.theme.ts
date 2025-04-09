import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const iconColorsTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      success: theme.palette.successLight,
      error: addAlpha(theme.palette.errorLight, 0.6),
      info: theme.palette.infoLight,
      default: theme.palette.secondary200,
    },
    [THEME_MODES.dark]: {
      success: theme.palette.successDark,
      error: addAlpha(theme.palette.errorDark, 0.7),
      info: theme.palette.infoDark,
      default: theme.palette.secondary600,
    },
  });
};
