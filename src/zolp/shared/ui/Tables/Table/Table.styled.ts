import styled from 'styled-components';
import { tableRowTheme } from '../TableContent/row/TableRow.theme.ts';

export const Container = styled.div<{
  disabled: boolean;
  size?: string;
}>`
  display: flex;
  padding: 0;
  flex-direction: column;
  ${(props) =>
    props.size &&
    `
    font-size: ${props.size};
  `}
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const TableInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em;
  gap: 0.8em;
  min-height: 30em;
  border: 1px solid
    ${({ theme }) => tableRowTheme(theme).tableRowContainerBorderColor};
  border-top: 0;
  border-radius: 0 0 2em 2em;
  > * {
    padding: 2em 0;
  }
`;
