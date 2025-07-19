import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../../app/theme/theme-modes.ts';

export const performanceCellTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      positive: theme.palette.successLight,
      negative: theme.palette.errorLight,
      neutral: addAlpha(theme.palette.textMainLight, 0.7),
    },
    [THEME_MODES.dark]: {
      positive: theme.palette.successDark,
      negative: theme.palette.errorDark,
      neutral: addAlpha(theme.palette.textMainDark, 0.7),
    },
  });
};
