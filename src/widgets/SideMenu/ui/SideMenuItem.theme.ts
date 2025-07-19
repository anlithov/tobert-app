import { DefaultTheme } from 'styled-components';
import { addAlpha } from '../../../zolp/shared/lib/utils/add-alpha-opacity.util.ts';
import { PaletteKeys } from '../../../zolp/app/theme/styled-components';
import { componentThemeConfig } from '../../../zolp/shared/lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../zolp/app/theme/theme-modes.ts';

export const sideMenuItemTheme = (theme: DefaultTheme) => {
  const formColor = (tone: number) => {
    return theme.palette[('secondary' + tone) as PaletteKeys];
  };

  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      iconButtonStandardColor: formColor(900),
      iconButtonStandardActiveColor: theme.palette.primary800,
      iconButtonStandardHoverColor: theme.palette.primary900,
      iconButtonStandardInversColor: formColor(100),
      iconButtonStandardHoverBackground: addAlpha(formColor(300), 0.4),
      iconButtonStandardActiveBackground: theme.palette.primary300,
    },
    [THEME_MODES.dark]: {
      iconButtonStandardColor: formColor(300),
      iconButtonStandardActiveColor: theme.palette.primary200,
      iconButtonStandardHoverColor: theme.palette.primary100,
      iconButtonStandardInversColor: formColor(800),
      iconButtonStandardHoverBackground: addAlpha(formColor(500), 0.5),
      iconButtonStandardActiveBackground: theme.palette.primary500,
    },
  });
};
