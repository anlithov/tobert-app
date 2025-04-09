import React, { FC } from 'react';
import {
  Container,
  ProgressBarContainer,
  RowCover,
} from './TableContent.styled';
import { TableRowsProps } from './row/cell/TableRowCell.types.ts';
import TableRow from './row/TableRow.tsx';
import ProgressBar from '../../ProgressBar/ProgressBar.tsx';

interface Props {
  showProgressBar?: boolean;
  numerationAndOffset?: number;
  rows: TableRowsProps[];
  rowProps?: {
    padding?: string;
  };
}
const TableContent: FC<Props> = ({
  showProgressBar,
  rows,
  numerationAndOffset,
  rowProps,
}) => {
  return (
    <Container>
      {showProgressBar && (
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
      )}
      {rows.map((item, index) => {
        return (
          <RowCover key={index}>
            {item?.BeforeComponent}
            <TableRow
              disabled={item?.disabled}
              onClick={!item?.disabled ? item.onRowClick : undefined}
              numerationNum={
                numerationAndOffset !== undefined
                  ? index + 1 + numerationAndOffset
                  : undefined
              }
              cells={item.cells}
              {...rowProps}
            />
            {item?.AfterComponent}
          </RowCover>
        );
      })}
    </Container>
  );
};

export default TableContent;
