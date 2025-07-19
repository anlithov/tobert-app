import { DefaultTheme } from 'styled-components';
import { Mode } from '../../../../app/providers/AppThemeProvider.tsx';

export const loadingTheme = (theme: DefaultTheme) => {
  if (theme.mode === Mode.LIGHT) {
    return {
      loadingContainerFill: theme.palette.primary500,
    };
  }

  return {
    loadingContainerFill: theme.palette.primary500,
  };
};
