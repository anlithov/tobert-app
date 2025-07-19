import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loading } from '../../../Loading/Loading.tsx';
import { LoadingContainer } from './InfiniteScrollContainer.styled.tsx';

interface Props {
  dataLength: number;
  onLoadMore: () => void;
  hasMore: boolean;
  children?: React.ReactNode;
  className?: string;
  height?: string;
  loaderSize?: string;
  hideLoader?: boolean;
}

const InfiniteScrollContainer: FC<Props> = ({
  dataLength,
  onLoadMore,
  hasMore,
  children,
  className = 'list-infinity',
  height,
  loaderSize = '3.2em',
  hideLoader,
}) => {
  return (
    <InfiniteScroll
      style={{
        overflow: 'visible !important',
      }}
      height={height}
      className={className}
      dataLength={dataLength}
      next={onLoadMore}
      hasMore={hasMore && dataLength > 0}
      loader={
        !hideLoader ? (
          <LoadingContainer>
            <Loading size={loaderSize} />
          </LoadingContainer>
        ) : null
      }
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollContainer;
