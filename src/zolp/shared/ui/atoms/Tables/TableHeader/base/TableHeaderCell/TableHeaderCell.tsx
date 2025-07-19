import React from 'react';
import { ColumnName, Container } from './TableHeaderCell.styled.ts';
import { TableHeaderColumnExtended } from '../../TableHeaderCell.types.ts';
import TableHeaderCellArrows from '../TableHeaderCellArrows/TableHeaderCellArrows.tsx';
import { OrderDirection } from '../../../Table/Table.types.ts';

const TableHeaderCell = <SortKey extends string>({
  content,
  orderDirection,
  width,
  minWidth,
  alignHorizontal,
  alignVertical,
  orderSlug,
  onClickArrow,
  sorting,
}: TableHeaderColumnExtended<SortKey>) => {
  return (
    <Container
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      width={width}
      minWidth={minWidth}
      onClick={
        sorting?.length === 1 && onClickArrow
          ? () => {
              onClickArrow(
                sorting[0].key,
                orderDirection === OrderDirection.DESC
                  ? OrderDirection.ASC
                  : OrderDirection.DESC,
              );
            }
          : undefined
      }
    >
      <ColumnName
        className={`${sorting ? 'sorting' : ''} ${
          sorting && alignHorizontal === 'right'
            ? 'sorting-negative-margin'
            : ''
        }`}
      >
        {content}
        {
          <>
            {sorting &&
              sorting.map((setup, index) => (
                <TableHeaderCellArrows
                  key={index}
                  orderSlug={orderSlug}
                  sortingSetup={setup}
                  orderDirection={orderDirection}
                  onClickArrow={onClickArrow}
                />
              ))}
          </>
        }
      </ColumnName>
    </Container>
  );
};

export default TableHeaderCell;
