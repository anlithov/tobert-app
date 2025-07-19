import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../../app/theme/theme-modes.ts';

export const tableRowTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      tableRowContainerBorderColor: theme.palette.secondary200,
      tableRowContainerHoverBackground: addAlpha(theme.palette.primary600, 0.1),
    },
    [THEME_MODES.dark]: {
      tableRowContainerBorderColor: addAlpha(theme.palette.primary400, 0.3),
      tableRowContainerHoverBackground: addAlpha(theme.palette.primary600, 0.2),
    },
  });
};
