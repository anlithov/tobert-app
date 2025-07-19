import styled from 'styled-components';
import { tableRowTheme } from './TableRow.theme.ts';
import { TableThemeItemContainer } from '../../ui/TableHeaderCover/TableHeaderCover.styled.ts';

export const Container = styled(TableThemeItemContainer)<{
  padding?: string;
  onClick?: () => void;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => props?.onClick && `cursor: pointer;`};
  padding: ${({ padding }) => padding};
  justify-content: space-between;
  z-index: 1;
  transition: 0.1s;
  &.disabled {
    user-select: none;
    opacity: 0.5;
  }
  &.clickable:hover {
    background: ${({ theme }) =>
      tableRowTheme(theme).tableRowContainerHoverBackground};
  }
`;

export const RowContainer = styled.div`
  display: inline-flex;
  width: 100%;
  ${(props) => props?.onClick && `cursor: pointer;`};
`;
