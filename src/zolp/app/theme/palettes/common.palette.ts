import { tailwindColors } from '../tailwind-colors.ts';

const commonPalette = {
  transparent: 'transparent',
  white: '#fff',

  successLight: '#43a047',
  successContainerLight: tailwindColors.green600,
  successContrastLight: tailwindColors.green600,
  errorLight: '#DC2626',
  errorContainerLight: '#FDEDED',
  errorContrastLight: '#DC2626',
  purpleLight: tailwindColors.purple600,
  orangeLight: tailwindColors.orange600,
  yellowLight: tailwindColors.amber700,
  warningLight: 'rgb(203,150,0)',
  warningContainerLight: '#fff4e6',
  infoLight: tailwindColors.lightBlue600,
  aprLight: tailwindColors.cyan800,

  successDark: '#aedca0',
  successContainerDark: '#213621',
  successContrastDark: tailwindColors.green500,
  errorDark: '#f58989',
  errorContainerDark: '#3a2020',
  errorContrastDark: '#e85e5e',
  purpleDark: tailwindColors.purple400,
  orangeDark: tailwindColors.orange800,
  yellowDark: tailwindColors.amber700,
  warningDark: tailwindColors.orange100,
  warningContainerDark: '#3a2d07',
  infoDark: tailwindColors.lightBlue600,
  aprDark: tailwindColors.cyan100,

  neutral50: '#FAFAFA',
  neutral100: '#F4F4F5',
  neutral200: '#E4E4E7',
  neutral300: '#D4D4D8',
  neutral400: '#A1A1AA',
  neutral500: '#71717A',
  neutral600: '#52525B',
  neutral700: '#3F3F46',
  neutral800: '#27272A',
  neutral900: '#18181B',
};

export default commonPalette;
