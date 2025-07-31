import React from 'react';
import BotsPageConfig from './components/BotsPageConfig/BotsPageConfig.tsx';
import { Container } from './MyBots.styled.ts';
import BotsPageList from './components/BotsPageList/BotsPageList.tsx';
import Divider from '../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { useDebounceJotai } from '../../../../../zolp/shared/lib/hooks/timer/use-debounce-jotai.hook.ts';
import {
  atomBotListSearchDebounced,
  atomBotListSearchIsDebouncing,
  atomBotListSearchToBeDebounced,
} from '../../../../../features/bot/list/libs/model/bots-page.atom.ts';

const MyBots = () => {
  useDebounceJotai(
    {
      atomToBeDebouncedValue: atomBotListSearchToBeDebounced,
      atomDebouncedValue: atomBotListSearchDebounced,
      atomLoading: atomBotListSearchIsDebouncing,
    },
    1000,
  );

  return (
    <Container>
      <BotsPageConfig />
      <Divider height="2em" />
      <BotsPageList />
    </Container>
  );
};

export default MyBots;
