import React, { ReactNode } from 'react';
import { OrderDirection } from '../../../Table/Table.types.ts';
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExpandUpDownFill,
} from 'react-icons/ri';

interface Props<SortKey extends string> {
  orderSlug?: SortKey;
  sortingSetup: {
    key: SortKey;
    tooltip?: ReactNode;
  };
  orderDirection?: OrderDirection;
  onClickArrow?: (sortKey: SortKey, orderDirection: OrderDirection) => void;
}
const TableHeaderCellArrows = <SortKey extends string>({
  orderSlug,
  sortingSetup,
  orderDirection,
  onClickArrow,
}: Props<SortKey>) => {
  const onClick = () => {
    const newOrder =
      orderDirection === OrderDirection.DESC
        ? OrderDirection.ASC
        : OrderDirection.DESC;

    onClickArrow && onClickArrow(sortingSetup.key, newOrder);
  };

  let arrow;
  if (orderSlug === sortingSetup.key) {
    if (orderDirection === OrderDirection.ASC) {
      arrow = <RiArrowUpSFill size="1.5em" onClick={onClick} />;
    } else if (OrderDirection.DESC === orderDirection) {
      arrow = <RiArrowDownSFill size="1.5em" onClick={onClick} />;
    }
  } else {
    arrow = (
      <RiExpandUpDownFill size="1.5em" opacity={0.25} onClick={onClick} />
    );
  }

  return arrow;
};

export default TableHeaderCellArrows;
