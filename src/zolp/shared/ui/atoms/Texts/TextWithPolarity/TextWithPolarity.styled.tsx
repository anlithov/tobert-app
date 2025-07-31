import styled from 'styled-components';
import { textWithPolarityTheme } from './TextWithPolarity.theme.ts';
import { PolarityColorSlug } from '../../PolarityIcons/polarity-icons.const.tsx';

export const TextWithPolarity = styled.div<{
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
`;
