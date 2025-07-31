import commonPalette from './common.palette.ts';
import { Palette } from '../styled-components';
import { tailwindColors } from '../tailwind-colors.ts';

export const lightBluePalette: Palette = {
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
  primary100: '#E0F7FA', // Lighter Aqua
  primary200: '#B3E5FC', // Soft Blue
  primary300: '#8bd7fa',
  primary400: '#6bc4ea',
  primary500: '#43a9d6', // Brand color
  primary600: '#2794c5',
  primary700: '#0c7297', // Darker for contrast
  primary800: '#005c7e',
  primary900: '#025c77', // Deepest blue tone

  // Secondary Theme (Subtle Gray-Blue for UI)
  secondary50: '#ECEFF1',
  secondary100: '#E2E7EA',
  secondary200: '#C0C9D0',
  secondary300: '#B1BAC5',
  secondary400: '#9DA6B6',
  secondary500: '#8E95A4',
  secondary600: '#6A6F7A',
  secondary700: '#373840',
  secondary800: '#27272c',
  secondary900: '#1d1e22',
};
