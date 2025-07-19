import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../../../app/theme/theme-modes.ts';

export const tableHeaderCellTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      tableHeaderCellColumnNameColor: theme.palette.secondary800,
      tableHeaderCellColumnNameHoverColor: theme.palette.secondary400,
    },
    [THEME_MODES.dark]: {
      tableHeaderCellColumnNameColor: theme.palette.secondary300,
      tableHeaderCellColumnNameHoverColor: theme.palette.secondary300,
    },
  });
};
