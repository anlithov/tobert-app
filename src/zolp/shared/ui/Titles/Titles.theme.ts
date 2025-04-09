import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../app/theme/theme-modes.ts';

export const titlesTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      subtitle: theme.palette.textMainLight,
    },
    [THEME_MODES.dark]: {
      subtitle: addAlpha(theme.palette.textMainDark, 0.7),
    },
  });
};
