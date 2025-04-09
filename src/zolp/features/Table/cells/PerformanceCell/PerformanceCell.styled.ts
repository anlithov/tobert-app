import styled from 'styled-components';
import { performanceCellTheme } from './PerformanceCell.theme';

export const Container = styled.div<{
  performance: 'positive' | 'negative' | 'neutral';
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1em;
  color: ${({ theme, performance }) =>
    performanceCellTheme(theme)[performance]};
  font-weight: 500;
`;

export const Percent = styled.div<{ fontSize: string }>`
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-size: ${({ fontSize }) => fontSize};
`;
