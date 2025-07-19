import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const tabsV2Theme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      activeTabContainer: theme.palette.primary200,
      hoverTabContainer: theme.palette.secondary200,
      hoverTabColor: theme.palette.secondary900,
      unActiveTabColor: theme.palette.textMainLight,
      backgroundContainer: addAlpha(theme.palette.secondary100, 0.5),
    },
    [THEME_MODES.dark]: {
      activeTabContainer: theme.palette.primary600,
      hoverTabContainer: theme.palette.secondary700,
      hoverTabColor: theme.palette.secondary100,
      unActiveTabColor: theme.palette.textMainDark,
      backgroundContainer: addAlpha(theme.palette.secondary900, 0.5),
    },
  });
};
