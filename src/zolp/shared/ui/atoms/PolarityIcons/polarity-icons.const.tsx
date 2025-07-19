import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { RiExpandUpDownFill } from 'react-icons/ri';
import React, { ReactNode } from 'react';

export const POLARITY_COLOR_SLUG = {
  negative: 'negative',
  positive: 'positive',
  neutral: 'neutral',
} as const;

export type PolarityColorSlug =
  (typeof POLARITY_COLOR_SLUG)[keyof typeof POLARITY_COLOR_SLUG];

export const mapSymbolByPolarity = (
  size = '2em',
): Record<PolarityColorSlug, ReactNode> => ({
  negative: <FiTrendingDown color="inherit" size={size} />,
  positive: <FiTrendingUp color="inherit" size={size} />,
  neutral: <RiExpandUpDownFill opacity="0.5" size={size} color="inherit" />,
});
