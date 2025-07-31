import React from 'react';
import {
  Container,
  FiltersAndSortingContainer,
  SearchContainer,
} from './BotsPageConfig.styled.ts';
import Chip from '../../../../../../zolp/shared/ui/atoms/Chip/Chip.tsx';
import { RxTriangleDown } from 'react-icons/rx';
import BotListSearchField from './components/BotListSearchField/BotListSearchField.tsx';
import BotListFilterByCexAccounts from './components/BotListFilterByCexAccounts/BotListFilterByCexAccounts.tsx';
import BotListFilterByStatuses from './components/BotListFilterByStatuses/BotListFilterByStatuses.tsx';

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
        ></Chip>
      </FiltersAndSortingContainer>
      <SearchContainer>
        <BotListSearchField />
      </SearchContainer>
    </Container>
  );
};

export default BotsPageConfig;
