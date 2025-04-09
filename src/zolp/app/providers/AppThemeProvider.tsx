import { THEME_MODES, ThemeModes } from '../theme/theme-modes.ts';
import { PALETTE_NAMES, ThemesNames } from '../theme/theme-names.ts';
import { create } from 'zustand/react';
import { ThemeProvider } from 'styled-components';
import { FC, PropsWithChildren } from 'react';
import { PALLETS } from '../theme/palettes.ts';

export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeStore = {
  mode: ThemeModes;
  setMode: (mode: ThemeModes) => void;
  palette: ThemesNames;
  setPalette: (palette: ThemesNames) => void;
};

export const useThemeStore = create<ThemeStore>()((set) => ({
  mode: THEME_MODES.dark,
  setMode: (theme: ThemeModes) => set({ mode: theme }),
  palette: PALETTE_NAMES.lightBlue,
  setPalette: (theme: ThemesNames) => set({ palette: theme }),
}));

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { mode, palette } = useThemeStore();

  return (
    <ThemeProvider
      theme={{
        mode,
        palette: PALLETS[palette],
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
