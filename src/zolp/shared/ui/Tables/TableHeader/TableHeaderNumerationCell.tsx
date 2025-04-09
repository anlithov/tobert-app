import React, { FC } from 'react';
import {
  ColumnName,
  ContainerNumeration,
} from './base/TableHeaderCell/TableHeaderCell.styled.ts';
import { TableHeaderColumnProps } from './TableHeaderCell.types';

const TableHeaderNumerationCell: FC<TableHeaderColumnProps<any>> = ({
  content,
  width,
  alignHorizontal,
  alignVertical,
}) => {
  return (
    <ContainerNumeration
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      width={width}
    >
      <ColumnName>{content}</ColumnName>
    </ContainerNumeration>
  );
};

export default TableHeaderNumerationCell;
