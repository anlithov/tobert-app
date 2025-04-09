import styled from 'styled-components';
import { tableHeaderTheme } from './TableHeader.theme';
import { tableRowTheme } from '../TableContent/row/TableRow.theme.ts';

export const Container = styled.div<{
  margin?: string;
}>`
  display: flex;
  width: 100%;
  background: ${({ theme }) =>
    tableHeaderTheme(theme).tableHeaderContainerBackgroundColor};
  margin: ${({ margin }) => margin};
  border-radius: 2em 2em 0 0;
  justify-content: space-between;
  border: 1px solid
    ${({ theme }) => tableRowTheme(theme).tableRowContainerBorderColor};
`;
