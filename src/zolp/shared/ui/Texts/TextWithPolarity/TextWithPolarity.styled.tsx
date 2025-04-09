import styled from 'styled-components';
import { textWithPolarityTheme } from './TextWithPolarity.theme.ts';
import { PolarityColorSlug } from '../../PolarityIcons/polarity-icons.const.tsx';

export const TextWithPolarity = styled.div<{
  amountFontSize?: string;
  amountFontWeight?: string;
  polarity?: PolarityColorSlug | undefined;
}>`
  color: ${({ theme, polarity }) => {
    if (polarity) {
      return textWithPolarityTheme(theme)[polarity];
    }
  }};
  > * {
    color: ${({ theme, polarity }) => {
      if (polarity) {
        return textWithPolarityTheme(theme)[polarity];
      }
    }};
  }
  span {
    font-size: ${({ amountFontSize }) => amountFontSize ?? '1.3em'};
    font-weight: ${({ amountFontWeight }) => amountFontWeight};
    letter-spacing: 0.04em;
  }
`;
