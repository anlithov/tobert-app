import commonPalette from './common.palette.ts';
import { Palette } from '../styled-components';
import { tailwindColors } from '../tailwind-colors.ts';

export const lightGreenPalette: Palette = {
  ...commonPalette,

  textMainLight: '#1E293B',
  containerMainLight: '#fff',
  shadowColorLight: tailwindColors.slate800,
  dropdownBackgroundLight: tailwindColors.slate100,

  textMainDark: '#e3ebf5',
  containerMainDark: '#2b2c31',
  shadowColorDark: '#070606',
  dropdownBackgroundDark: '#34353b',

  primary50: '#F0F9FF',
  primary100: '#ecf6f5',
  primary200: '#c2e0ec',
  primary300: '#b5eae6',
  primary400: '#7dcec2',
  primary500: '#55b0b7',
  primary600: '#449aa2',
  primary700: '#286f79',
  primary800: '#175c64',
  primary900: '#0c5252',

  secondary50: '#eceff1',
  secondary100: '#e2e7ea',
  secondary200: '#c0c9d0',
  secondary300: '#b1bac5',
  secondary400: '#9da6b6',
  secondary500: '#8e95a4',
  secondary600: '#6a6f7a',
  secondary700: '#3f4048',
  secondary800: '#2b2c31',
  secondary900: '#212226',
};
