import { THEME_MODES, ThemeModes } from '../../../app/theme/theme-modes.ts';

export const componentThemeConfig = <T extends string>(
  mode: ThemeModes,
  modes: {
    [THEME_MODES.light]: Record<T, string>;
    [THEME_MODES.dark]: Record<T, string>;
  },
) => {
  return modes[mode];
};
