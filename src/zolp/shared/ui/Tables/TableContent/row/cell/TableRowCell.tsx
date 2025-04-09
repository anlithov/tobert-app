import React, { FC } from 'react';
import { Container } from './TableRowCell.styled.ts';
import { TableHeaderCellProps } from './TableRowCell.types.ts';

interface Props extends TableHeaderCellProps {
  background?: string;
}
const TableRowCell: FC<Props> = ({
  content,
  width,
  minWidth,
  alignVertical,
  alignHorizontal,
  background,
}) => {
  return (
    <Container
      alignVertical={alignVertical}
      alignHorizontal={alignHorizontal}
      width={width}
      minWidth={minWidth}
      background={background}
    >
      {content}
    </Container>
  );
};

export default TableRowCell;
