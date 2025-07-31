import { atom } from 'jotai';
import {
  BotInternalStatus,
  BotsListSortBy,
  BotsListSorting,
  OrderDirection,
} from '../../../../../__graphql/generated.ts';

export const atomBotListPageNum = atom(1);
export const atomBotListPageSize = atom(10);

export const atomBotListCexAccountIdsFilter = atom<number[]>([]);
export const atomBotListStatusesFilter = atom<BotInternalStatus[]>([]);

export const atomBotListSorting = atom<BotsListSorting>({
  by: BotsListSortBy.CreationTime,
  value: OrderDirection.Desc,
});

export const atomBotListSearchToBeDebounced = atom<string>('');
export const atomBotListSearchDebounced = atom<string>('');
export const atomBotListSearchIsDebouncing = atom<boolean>(false);
