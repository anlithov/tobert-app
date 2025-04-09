import { ReactNode } from 'react';
import {
  AlignInputHorizontal,
  AlignInputVertical,
} from '../../../../../lib/constants/align-to-flex.const.ts';

export interface TableRowsProps {
  disabled?: boolean;
  onRowClick?: () => void;
  cells: TableHeaderCellProps[];
  BeforeComponent?: ReactNode;
  AfterComponent?: ReactNode;
}

export interface TableHeaderCellProps {
  minWidth?: string;
  width: string;
  content: ReactNode;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
}
