import React from 'react';
import BotsPageConfig from './components/BotsPageConfig/BotsPageConfig.tsx';
import { Container } from './BotsPage.styled.ts';
import BotsPageList from './components/BotsPageList/BotsPageList.tsx';
import Divider from '../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { useDebounceJotai } from '../../../../zolp/shared/lib/hooks/timer/use-debounce-jotai.hook.ts';
import {
  atomBotListSearchDebounced,
  atomBotListSearchIsDebouncing,
  atomBotListSearchToBeDebounced,
} from './model/bots-page.atom.ts';

const BotsPage = () => {
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

export default BotsPage;
