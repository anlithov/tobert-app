import React, { ReactNode } from 'react';
import TableHeader from '../TableHeader/TableHeader.tsx';
import TableContent from '../TableContent/TableContent.tsx';
import { Container, TableInfoContainer } from './Table.styled.ts';
import { TableHeaderColumnProps } from '../TableHeader/TableHeaderCell.types.ts';
import { TableOrderState, TableRowWithCells } from './Table.types.ts';
import { Loading } from '../../Loading/Loading.tsx';
import {
  TableHeaderCellProps,
  TableRowsProps,
} from '../TableContent/row/cell/TableRowCell.types.ts';
import StatusCardNotFound from '../../../templates/StatusCard/instances/StatusCardProcessUncompleted/StatusCardNotFound.tsx';
import StatusCardLoadingData from '../../../templates/StatusCard/instances/StatusCardLoadingData/StatusCardLoadingData.tsx';
import ProgressBar from '../../ProgressBar/ProgressBar.tsx';
import { ProgressBarContainer } from '../TableContent/TableContent.styled.ts';

interface Props<TableKey extends string, SortKey extends string> {
  // Order
  orderState: TableOrderState<SortKey>;
  setOrderState?: (order: TableOrderState<SortKey>) => void;
  // Table items
  columns: Record<TableKey, TableHeaderColumnProps<SortKey>>;
  rows: TableRowWithCells<TableKey>[];
  // state
  loading?: boolean;
  fetching?: boolean;
  disabled?: boolean;
  // Placeholders
  ComponentNotFound?: ReactNode;
  ComponentInitialLoading?: ReactNode;
  customItemsSetup?: TableRowsProps[];
  // Style config
  numeration?: {
    // to use - write 0 at least
    numOffset?: number;
  };
  scale?: string;
  headerProps?: {
    margin?: string;
  };
  rowProps?: {
    padding?: string;
  };
}
const Table = <TableKey extends string, SortKey extends string>({
  columns,
  rows,
  orderState,
  setOrderState,
  numeration,
  disabled = false,
  loading = false,
  fetching = false,
  scale,
  ComponentNotFound = <StatusCardNotFound />,
  ComponentInitialLoading = <StatusCardLoadingData />,
  customItemsSetup,
  headerProps,
  rowProps,
}: Props<TableKey, SortKey>) => {
  const transformIntoSetups = (
    columns: Record<TableKey, TableHeaderColumnProps<SortKey>>,
    rows: TableRowWithCells<TableKey>[],
  ): {
    columnsSetup: TableHeaderColumnProps<SortKey>[];
    rowsSetup: {
      BeforeComponent?: ReactNode;
      AfterComponent?: ReactNode;
      onRowClick?: () => void;
      cells: TableHeaderCellProps[];
    }[];
  } => {
    const columnsSetup = Object.values(
      columns,
    ) as TableHeaderColumnProps<SortKey>[];

    const sumRatio = columnsSetup.reduce((accum, _, index) => {
      const width = columnsSetup[index].width;

      if (width.includes('%')) {
        return accum + parseInt(width.slice(0, -1));
      } else {
        return accum + parseInt(width);
      }
    }, 0);

    const allWidth = columnsSetup.map((_, index) => {
      const width = columnsSetup[index].width;

      let ratio;
      if (width.includes('%')) {
        ratio = parseInt(width.slice(0, -1));
      } else {
        ratio = parseInt(width);
      }

      return String((ratio / sumRatio) * 100) + '%';
    });

    const itemsList: TableRowsProps[] = rows.map((record) => {
      const values = Object.values(record.cells) as (
        | ReactNode
        | string
        | number
      )[];

      return {
        disabled: record.disabled,
        onRowClick: record.onRowClick,
        BeforeComponent: record?.BeforeComponent,
        AfterComponent: record?.AfterComponent,
        cells: values.map((value, index) => ({
          width: allWidth[index],
          content: value,
          alignVertical: columnsSetup[index].alignVertical,
          alignHorizontal: columnsSetup[index].alignHorizontal,
        })) as TableHeaderCellProps[],
      };
    });

    return {
      columnsSetup,
      rowsSetup: itemsList,
    };
  };

  return (
    <Container size={scale} disabled={disabled}>
      <TableHeader<SortKey>
        orderState={orderState}
        setOrderState={setOrderState}
        numeration={!!numeration}
        columns={columns}
        headerProps={headerProps}
      />
      {!rows?.length || loading ? (
        <TableInfoContainer>
          {loading ? (
            <>
              <ProgressBarContainer>
                <ProgressBar />
              </ProgressBarContainer>
              {ComponentInitialLoading || <Loading size="7.4em" />}
            </>
          ) : (
            <>{ComponentNotFound || `Oops, Nothing found`}</>
          )}
        </TableInfoContainer>
      ) : (
        <TableContent
          showProgressBar={fetching}
          numerationAndOffset={numeration?.numOffset}
          rows={
            customItemsSetup || transformIntoSetups(columns, rows).rowsSetup
          }
          rowProps={rowProps}
        />
      )}
    </Container>
  );
};

export default Table;
