import React from 'react';
import {
  Container,
  FiltersAndSortingContainer,
  SearchContainer,
} from './BotsPageConfig.styled.ts';
import BotListFilterByCexAccounts from '../../../../../../../features/bot/list/filtering/ui/BotListFilterByCexAccounts/BotListFilterByCexAccounts.tsx';
import BotListFilterByStatuses from '../../../../../../../features/bot/list/filtering/ui/BotListFilterByStatuses/BotListFilterByStatuses.tsx';
import Chip from '../../../../../../../zolp/shared/ui/atoms/Chip/Chip.tsx';
import { RxTriangleDown } from 'react-icons/rx';
import BotListSearchField from '../../../../../../../features/bot/list/search/ui/BotListSearchField/BotListSearchField.tsx';

const BotsPageConfig = () => {
  return (
    <Container>
      <FiltersAndSortingContainer>
        <BotListFilterByCexAccounts />
        <BotListFilterByStatuses />
        <Chip
          padding="0.8em 1.2em"
          height="3.6em"
          width="auto"
          RightComponent={<RxTriangleDown size="1.4em" />}
          placeholder={<span style={{ opacity: 0.8 }}>Sorting</span>}
        />
      </FiltersAndSortingContainer>
      <SearchContainer>
        <BotListSearchField />
      </SearchContainer>
    </Container>
  );
};

export default BotsPageConfig;
