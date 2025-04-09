import { ReactNode } from 'react';
import { OrderDirection } from '../Table/Table.types';
import {
  AlignInputHorizontal,
  AlignInputVertical,
} from '../../../lib/constants/align-to-flex.const';

export interface TableHeaderColumnProps<SortKeys extends string> {
  minWidth?: string;
  width: string;
  content: ReactNode;
  orderDirection?: OrderDirection;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
  sorting?: { key: SortKeys; tooltip?: ReactNode }[];
}

export interface TableHeaderColumnExtended<SortKeys extends string>
  extends TableHeaderColumnProps<SortKeys> {
  orderSlug?: SortKeys;
  onClickArrow?: (sortKey: SortKeys, direction: OrderDirection) => void;
}
