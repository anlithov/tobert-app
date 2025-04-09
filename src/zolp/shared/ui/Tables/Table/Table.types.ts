import { ReactNode } from 'react';

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum TableHeaderCellAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export type TableOrderState<T extends string> = {
  orderBy: T;
  orderDirection: OrderDirection;
};

export interface TableRowWithCells<TableKey extends string> {
  onRowClick?: () => void;
  disabled?: boolean;
  cells: Record<TableKey, ReactNode>;
  BeforeComponent?: ReactNode;
  AfterComponent?: ReactNode;
}
