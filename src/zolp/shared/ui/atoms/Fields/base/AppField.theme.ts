import { DefaultTheme } from 'styled-components';
import { componentThemeConfig } from '../../../../lib/helpers/component-theme.config.ts';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

export const appFieldTheme = (theme: DefaultTheme) => {
  return componentThemeConfig(theme.mode, {
    [THEME_MODES.light]: {
      error: theme.palette.errorLight,

      success: theme.palette.primary500,
      color: theme.palette.secondary800,
      backgroundColor: theme.palette.secondary100,
      subtitleColor: theme.palette.secondary400,
      active: theme.palette.primary600,
      hover: theme.palette.primary500,

      label: theme.palette.secondary400,

      appFieldInputContainerColor: theme.palette.neutral400,

      appFieldInputContainerFilledFieldBorder: theme.palette.secondary400,
      appFieldInputContainerFilledFieldBackground: theme.palette.secondary100,
      appFieldInputContainerFilledFieldFocusedBorder: theme.palette.neutral300,
      appFieldInputContainerFilledFieldSubtitle: theme.palette.secondary400,

      appFieldInputContainerOutlinedFieldBorder: theme.palette.primary400,
      appFieldInputContainerOutlinedFieldBorderHover: theme.palette.primary500,
      appFieldInputContainerOutlinedFieldColor: theme.palette.neutral700,
      appFieldInputContainerOutlinedFieldFocusWithinBorder:
        theme.palette.primary600,
      appFieldInputContainerOutlinedLabelBack: theme.palette.secondary900,

      appFieldElementContainerColor: theme.palette.primary900,
      appFieldCalcedAmountColor: theme.palette.textMainLight,
      appFieldInputColor: theme.palette.textMainLight,
    },
    [THEME_MODES.dark]: {
      error: theme.palette.errorDark,

      success: theme.palette.primary500,
      color: theme.palette.secondary800,
      backgroundColor: theme.palette.secondary100,
      subtitleColor: theme.palette.secondary400,
      active: theme.palette.primary600,
      hover: theme.palette.secondary400,

      label: theme.palette.secondary300,

      appFieldInputContainerColor: theme.palette.secondary300,

      appFieldInputContainerFilledFieldBorder: theme.palette.secondary400,
      appFieldInputContainerFilledFieldBackground: theme.palette.secondary900,
      appFieldInputContainerFilledFieldFocusedBorder: theme.palette.primary400,
      appFieldInputContainerFilledFieldSubtitle: theme.palette.secondary400,

      appFieldInputContainerOutlinedFieldBorder: theme.palette.secondary600,
      appFieldInputContainerOutlinedFieldBorderHover:
        theme.palette.secondary500,
      appFieldInputContainerOutlinedFieldColor: theme.palette.secondary100,
      appFieldInputContainerOutlinedFieldFocusWithinBorder:
        theme.palette.primary300,
      appFieldInputContainerOutlinedLabelBack: theme.palette.secondary800,

      appFieldElementContainerColor: theme.palette.textMainDark,
      appFieldCalcedAmountColor: theme.palette.neutral400,
      appFieldInputColor: theme.palette.textMainDark,
    },
  });
};
