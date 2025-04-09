import React, { FC } from 'react';
import { Container, RowContainer } from './TableRow.styled.ts';
import TableRowCell from './cell/TableRowCell.tsx';
import { TableHeaderCellProps } from './cell/TableRowCell.types.ts';
import TableRowNumerationCell from './num-cell/TableRowNumerationCell.tsx';
import {
  AlignInputHorizontal,
  AlignInputVertical,
} from '../../../../lib/constants/align-to-flex.const.ts';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  numerationNum?: number;
  background?: string;
  cells: TableHeaderCellProps[];
  padding?: string;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
}
const TableRow: FC<Props> = ({
  disabled,
  padding,
  onClick,
  numerationNum,
  cells,
  background,
  alignVertical,
  alignHorizontal,
}) => {
  return (
    <Container
      padding={padding}
      className={`${disabled ? 'disabled' : ''} ${onClick ? 'clickable' : ''}`}
    >
      <RowContainer onClick={onClick}>
        {numerationNum && (
          <TableRowNumerationCell
            background={background}
            content={numerationNum}
            alignVertical={alignVertical}
            alignHorizontal={alignHorizontal}
            width="3.4em"
          />
        )}
        {cells.map((column, index) => {
          return (
            <TableRowCell background={background} key={index} {...column} />
          );
        })}
      </RowContainer>
    </Container>
  );
};

export default TableRow;
