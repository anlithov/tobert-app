import { ICON_BUTTON_COLORS } from '../constants/button-iconed-colors.const.ts';

type keys = keyof typeof ICON_BUTTON_COLORS;

export type IconButtonColors = (typeof ICON_BUTTON_COLORS)[keys];
