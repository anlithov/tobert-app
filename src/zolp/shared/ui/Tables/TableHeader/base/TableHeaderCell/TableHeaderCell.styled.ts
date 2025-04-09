import styled from 'styled-components';
import { tableHeaderCellTheme } from './TableHeaderCell.theme.ts';
import {
  AlignInputHorizontal,
  AlignInputVertical,
  FLEX_ALIGN_HORIZONTAL,
  FLEX_ALIGN_VERTICAL,
} from '../../../../../lib/constants/align-to-flex.const.ts';

export const Container = styled.div<{
  width: string;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
  minWidth?: string;
}>`
  display: flex;
  user-select: none;
  place-content: ${({ alignHorizontal }) =>
    alignHorizontal ? FLEX_ALIGN_HORIZONTAL[alignHorizontal] : 'flex-start'};
  place-items: ${({ alignVertical }) =>
    alignVertical ? FLEX_ALIGN_VERTICAL[alignVertical] : 'center'};
  padding: 1.4em 1em;
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  gap: 0.7em;

  &:first-child {
    padding-left: 1.8em;
  }
  &:last-child {
    padding-right: 1.8em;
  }
`;

export const ContainerNumeration = styled.div<{
  width: string;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
  minWidth?: string;
}>`
  display: flex;
  place-content: ${({ alignHorizontal }) =>
    alignHorizontal ? FLEX_ALIGN_HORIZONTAL[alignHorizontal] : 'flex-start'};
  place-items: ${({ alignVertical }) =>
    alignVertical ? FLEX_ALIGN_VERTICAL[alignVertical] : 'center'};
  padding: 1.6em 0.8em;
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  gap: 0.7em;
  &:last-child {
    padding-right: 1.6em;
  }
`;

export const ColumnName = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4em;
  font-size: 1.4em;
  line-height: 1.428;
  font-weight: 400;
  font-family:
    Product Sans,
    sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) =>
    tableHeaderCellTheme(theme).tableHeaderCellColumnNameColor};
  &.sorting {
    cursor: pointer;
    margin-right: -0.6em;
    &:hover {
      color: ${({ theme }) =>
        tableHeaderCellTheme(theme).tableHeaderCellColumnNameHoverColor};
    }
  }
  &.sorting-negative-margin {
    margin-right: -0.6em;
  }
`;
