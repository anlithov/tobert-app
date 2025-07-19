import styled from 'styled-components';
import { tableRowTheme } from './row/TableRow.theme.ts';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border: ${({ theme }) =>
    `1px solid ${tableRowTheme(theme).tableRowContainerBorderColor}`};
  border-top: 0;
  border-radius: 0 0 1em 1em;
`;

export const RowCover = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-bottom: ${({ theme }) =>
    `1px solid ${tableRowTheme(theme).tableRowContainerBorderColor}`};
  &:last-child {
    border: none;
  }
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  top: -0.1em;
  width: 100%;
`;
