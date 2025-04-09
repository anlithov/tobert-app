import { DependencyList, useEffect, useState } from 'react';
import { InfiniteData, QueryObserverResult } from '@tanstack/react-query';
import { DropdownListItemProps } from '../../../../../shared/ui/Dropdown/DropdownList/DropdownList.tsx';

export const useDropdownInfiniteScroll = ({
  refetch,
  fetchNextPage,
  pagesQuantity,
  nextPage = [],
  nextCursor,
}: {
  refetch: () => Promise<QueryObserverResult<InfiniteData<any>>>;
  fetchNextPage: ({ pageParam }: { pageParam: number }) => void;
  nextPage: DropdownListItemProps[];
  pagesQuantity: number;
  nextCursor?: number;
  deps?: DependencyList;
}) => {
  const [combinedPage, setCombinedPage] = useState<{
    cursor?: number;
    items: DropdownListItemProps[];
  }>({
    items: [],
  });
  const [processing, setProcessing] = useState(false);

  const onLoadMore = () => {
    if (nextCursor) {
      fetchNextPage({ pageParam: nextCursor });
    }
  };

  useEffect(() => {
    setProcessing(true);
    setCombinedPage({
      items: [],
    });
    refetch();
  }, []);

  useEffect(() => {
    if (pagesQuantity <= 1) {
      setCombinedPage({
        items: [...nextPage],
      });
    } else {
      setCombinedPage({
        cursor: nextCursor,
        items: [...combinedPage.items, ...nextPage],
      });
    }
    setProcessing(false);
  }, [nextPage]);

  return {
    items: combinedPage.items,
    onLoadMore,
    processing,
  };
};
