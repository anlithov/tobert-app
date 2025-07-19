import React, { ReactNode } from 'react';
import { InfinityContainer } from '../DropdownList.styled.ts';
import InfiniteScrollContainer from '../../../ScrollContainers/instances/InfiniteScrollContainer/InfiniteScrollContainer.tsx';

type Props = {
  children: ReactNode;
  width?: string;
  maxHeight?: string;
  infiniteScrollProps: {
    dataLength: number;
    onLoadMore: () => void;
    hasMore: boolean;
  };
};

const DropdownListInfinityContainer = ({
  children,
  width = '100%',
  maxHeight = '12em',
  infiniteScrollProps,
}: Props) => {
  return (
    <InfinityContainer width={width} maxHeight={maxHeight}>
      <InfiniteScrollContainer
        className="dropdown-infinity"
        loaderSize="2.4em"
        height={maxHeight}
        {...infiniteScrollProps!}
      >
        {children}
      </InfiniteScrollContainer>
    </InfinityContainer>
  );
};

export default DropdownListInfinityContainer;
