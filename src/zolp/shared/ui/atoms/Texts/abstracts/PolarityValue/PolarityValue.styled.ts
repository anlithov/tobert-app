import styled from 'styled-components';
import { TextWithPolarity } from '../../TextWithPolarity/TextWithPolarity.styled.tsx';

export const Container = styled(TextWithPolarity)<{
  amountFontSize?: string;
  amountFontWeight?: string;
}>`
  display: flex;
  font-size: ${({ amountFontSize }) => amountFontSize ?? '1.3em'};
  font-weight: ${({ amountFontWeight }) => amountFontWeight};
`;
