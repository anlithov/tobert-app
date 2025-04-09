import 'styled-components';

export interface Palette {
  transparent: string;

  white: string;

  textMainLight: string;
  containerMainLight: string;
  successLight: string;
  successContainerLight: string;
  successContrastLight: string;
  errorLight: string;
  errorContainerLight: string;
  errorContrastLight: string;
  warningLight: string;
  warningContainerLight: string;
  infoLight: string;
  purpleLight: string;
  yellowLight: string;
  orangeLight: string;
  shadowColorLight: string;
  dropdownBackgroundLight: string;
  aprLight: string;

  textMainDark: string;
  containerMainDark: string;
  successDark: string;
  successContainerDark: string;
  successContrastDark: string;
  errorDark: string;
  errorContainerDark: string;
  errorContrastDark: string;
  warningDark: string;
  warningContainerDark: string;
  infoDark: string;
  purpleDark: string;
  yellowDark: string;
  orangeDark: string;
  shadowColorDark: string;
  dropdownBackgroundDark: string;
  aprDark: string;

  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;

  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
}

export type PaletteKeys = keyof Palette;

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeModes;
    palette: Palette;
  }
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
