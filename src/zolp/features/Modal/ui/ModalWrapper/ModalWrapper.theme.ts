import { DefaultTheme } from 'styled-components';

import { addAlpha } from '../../../../shared/lib/utils/add-alpha-opacity.util.ts';
import { componentThemeConfig } from '../../../../shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const modalWrapperTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      modalWrapperContainerBackground: addAlpha(
        theme.palette.secondary900,
        0.4,
      ),
    },
    [THEME_MODES.dark]: {
      modalWrapperContainerBackground: addAlpha(
        theme.palette.secondary900,
        0.6,
      ),
    },
  });
};
