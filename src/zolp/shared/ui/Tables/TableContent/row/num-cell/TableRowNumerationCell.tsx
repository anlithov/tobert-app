import React, { FC } from 'react';
import { ContainerNumeration } from '../cell/TableRowCell.styled.ts';
import { TableHeaderCellProps } from '../cell/TableRowCell.types.ts';

interface Props extends TableHeaderCellProps {
  background?: string;
}
const TableRowNumerationCell: FC<Props> = ({
  content,
  width,
  minWidth,
  alignHorizontal,
  alignVertical,
  background,
}) => {
  return (
    <ContainerNumeration
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      width={width}
      minWidth={minWidth}
      background={background}
    >
      <span>{content}</span>
    </ContainerNumeration>
  );
};

export default TableRowNumerationCell;
