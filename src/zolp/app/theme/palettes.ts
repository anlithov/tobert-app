import { PALETTE_NAMES } from './theme-names';
import { lightGreenPalette } from './palettes/light-green.palette.ts';
import { Palette } from './styled-components';
import { lightBluePalette } from './palettes/light-blue.palette.ts';

export const PALLETS: { [key: string]: Palette } = {
  [PALETTE_NAMES.lightGreen]: lightGreenPalette,
  [PALETTE_NAMES.lightBlue]: lightBluePalette,
} as const;
