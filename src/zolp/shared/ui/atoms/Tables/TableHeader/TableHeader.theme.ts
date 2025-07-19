import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const tableHeaderTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      tableHeaderContainerBackgroundColor: theme.palette.secondary100,
    },
    [THEME_MODES.dark]: {
      tableHeaderContainerBackgroundColor: addAlpha(
        theme.palette.secondary800,
        0.5,
      ),
    },
  });
};
