import styled from 'styled-components';
import { valueAndPercentCellTheme } from './ValueAndPercentCell.theme.ts';
import { PolarityColorSlug } from '../../../../atoms/PolarityIcons/polarity-icons.const.tsx';

export const SubTitle = styled.div<{
  polarity?: PolarityColorSlug;
  width?: string;
  justify?: string;
}>`
  display: flex;
  gap: 0.2em;
  place-items: center;
  justify-content: ${({ justify }) => justify};
  line-height: 1.33;
  font-weight: 400;
  color: ${({ theme, polarity }) =>
    polarity ? valueAndPercentCellTheme(theme)[polarity] : undefined};
  width: ${({ width }) => width};
  div {
    font-size: 1.36em;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1em;
`;

export const DotSpan = styled.span`
  line-height: 0.2em;
  opacity: 0.8;
`;
