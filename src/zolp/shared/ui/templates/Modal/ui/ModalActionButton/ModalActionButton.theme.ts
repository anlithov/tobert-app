import { DefaultTheme } from 'styled-components';
import { THEME_MODES } from '../../../../../../app/theme/theme-modes.ts';
import { addAlpha } from '../../../../../lib/utils/add-alpha-opacity.util.ts';
import { componentThemeConfig } from '../../../../../lib/helpers/component-theme.config.ts';

export const modalActionButtonTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      backgroundFilledColor: theme.palette.containerMainLight,
      backgroundFilledHoverColor: addAlpha(theme.palette.primary200, 0.4),
      backgroundFilledActiveColor: addAlpha(theme.palette.primary200, 0.6),
    },
    [THEME_MODES.dark]: {
      backgroundFilledColor: theme.palette.containerMainDark,
      backgroundFilledHoverColor: addAlpha(theme.palette.secondary900, 0.4),
      backgroundFilledActiveColor: addAlpha(theme.palette.primary900, 1),
    },
  });
};
