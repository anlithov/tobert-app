import { useJwtStore } from '../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import {
  BotInternalStatus,
  CexName,
  useBotsPageQuery,
} from '../../../../../__graphql/generated.ts';
import { useAtomValue } from 'jotai';
import {
  atomBotListCexAccountIdsFilter,
  atomBotListPageNum,
  atomBotListPageSize,
  atomBotListSearchDebounced,
  atomBotListSorting,
  atomBotListStatusesFilter,
} from '../model/bots-page.atom.ts';

export const useBotsPagePreconfigured = () => {
  const { jwtAccount } = useJwtStore();

  const page = useAtomValue(atomBotListPageNum);
  const size = useAtomValue(atomBotListPageSize);
  const search = useAtomValue(atomBotListSearchDebounced);
  const onlyCexAccountIds = useAtomValue(atomBotListCexAccountIdsFilter);
  const onlyStatuses = useAtomValue(atomBotListStatusesFilter);
  const sorting = useAtomValue(atomBotListSorting);

  const query = useBotsPageQuery({
    variables: {
      input: {
        page,
        size,
        search,
        onlyCexAccountIds,
        onlyStatuses,
        sorting,
      },
    },
    context: {
      headers: {
        jwt_account: jwtAccount,
      },
    },
  });

  const data = [];
  if (query.data?.bot?.list?.items) {
    data.push(...query.data?.bot?.list?.items);
  }

  data.push(
    ...[
      {
        botId: 2,
        name: 'DCA 1',
        testMode: true,
        cexMeta: {
          cexAccountId: 1,
          cexName: CexName.Binance,
          name: 'Binance MAIN',
          image:
            'https://images.seeklogo.com/logo-png/59/2/binance-icon-logo-png_seeklogo-598330.png',
        },
        statsInfo: {
          currentValue: 1200.67,
          costBasis: 980.78,
          profitTaken: 100.67,
        },
        statusInfo: {
          status: BotInternalStatus.Running,
          timestamp: '17875876587',
        },
        symbolsStats: [
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'BTCUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'ETHUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'SOLUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
        ],
      },
      {
        botId: 4,
        cexMeta: {
          cexAccountId: 1,
          name: 'Binance 2',
          cexName: CexName.Binance,
          image:
            'https://images.seeklogo.com/logo-png/59/2/binance-icon-logo-png_seeklogo-598330.png',
        },
        name: 'DCA Bot 2323',
        testMode: false,
        statsInfo: {
          currentValue: 12500.67,
          costBasis: 980.78,
          profitTaken: -560.61,
        },
        statusInfo: {
          status: BotInternalStatus.Paused,
          timestamp: '17875876587',
        },
        symbolsStats: [
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'BTCUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'ETHUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'SOLUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'BTCUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'ETHUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'SOLUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'BTCUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'ETHUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
          {
            currentValue: 1200.67,
            coinBalance: 0.7865,
            price: 1200.76,
            symbol: 'SOLUSDT',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          },
        ],
      },
    ],
  );

  return { ...query, data };
};
