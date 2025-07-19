import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const tableHeaderTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      key: 'brown',
      value: 'navy',
      string: 'olive',
      backgroundColor: '#f8f8ff',
      backgroundTextColor: '#fdfdff',
      border: 'rgba(192, 192, 192, 0.25)',
    },
    [THEME_MODES.dark]: {
      key: '#f1aa8a',
      value: '#aecaf6',
      string: '#abb06b',
      backgroundColor: '#212121',
      backgroundTextColor: '#2c3034',
      border: 'rgba(42,42,42,0.25)',
    },
  });
};
