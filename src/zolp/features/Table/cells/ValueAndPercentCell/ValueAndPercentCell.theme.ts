import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../shared/lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../shared/lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const valueAndPercentCellTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      negative: theme.palette.errorLight,
      positive: theme.palette.successLight,
      neutral: addAlpha(theme.palette.textMainLight, 0.7),
    },
    [THEME_MODES.dark]: {
      negative: theme.palette.errorDark,
      positive: theme.palette.successDark,
      neutral: addAlpha(theme.palette.textMainDark, 0.7),
    },
  });
};
