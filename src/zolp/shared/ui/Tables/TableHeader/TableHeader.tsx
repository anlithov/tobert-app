import React, { useMemo } from 'react';
import { Container } from './TableHeader.styled';
import TableHeaderCell from './base/TableHeaderCell/TableHeaderCell.tsx';
import { TableHeaderColumnProps } from './TableHeaderCell.types';
import TableHeaderNumerationCell from './TableHeaderNumerationCell';
import { OrderDirection, TableOrderState } from '../Table/Table.types';

interface Props<SortKey extends string> {
  orderState: TableOrderState<SortKey>;
  setOrderState?: (order: TableOrderState<SortKey>) => void;
  numeration: boolean;
  columns: Record<string, TableHeaderColumnProps<SortKey>>;
  headerProps?: {
    margin?: string;
  };
}
const TableHeader = <SortKey extends string>({
  numeration,
  orderState,
  setOrderState,
  columns,
  headerProps,
}: Props<SortKey>) => {
  const sumRatio = Object.values(columns).reduce((accum, col, index) => {
    const width = col.width;

    if (width.includes('%')) {
      return accum + parseInt(width.slice(0, -1));
    } else {
      return accum + parseInt(width);
    }
  }, 0);

  return useMemo(() => {
    const columnNames = Object.keys(columns) as SortKey[];

    return (
      <Container {...headerProps}>
        {numeration && (
          <TableHeaderNumerationCell
            content="#"
            width="3.4em"
            alignVertical="center"
            alignHorizontal="left"
          />
        )}
        {columnNames.map((columnName, index) => {
          const widthCol = columns[columnName].width;
          let ratio;
          if (widthCol.includes('%')) {
            ratio = parseInt(widthCol.slice(0, -1));
          } else {
            ratio = parseInt(widthCol);
          }

          const width = String((ratio / sumRatio) * 100) + '%';

          const onClickArrow =
            columns?.[columnName].sorting && setOrderState
              ? (sortKey: SortKey, orderDirection: OrderDirection) => {
                  setOrderState({
                    orderBy: sortKey,
                    orderDirection,
                  });
                }
              : undefined;

          return (
            <TableHeaderCell
              alignVertical={columns[columnName].alignVertical}
              alignHorizontal={columns[columnName].alignHorizontal}
              key={index + columnName}
              minWidth={columns[columnName].minWidth}
              width={width}
              content={columns[columnName].content}
              orderDirection={orderState.orderDirection}
              orderSlug={orderState.orderBy}
              onClickArrow={onClickArrow}
              sorting={columns?.[columnName].sorting}
            />
          );
        })}
      </Container>
    );
  }, [columns, orderState]);
};

export default TableHeader;
