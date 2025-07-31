import React from 'react';
import SearchField from '../../../../../../zolp/shared/ui/atoms/Fields/SearchField/SearchField.tsx';
import { useTheme } from 'styled-components';
import { useAtom } from 'jotai';
import { atomBotListSearchToBeDebounced } from '../../../libs/model/bots-page.atom.ts';

const BotListSearchField = () => {
  const theme = useTheme();

  const [search, setSearch] = useAtom(atomBotListSearchToBeDebounced);

  return (
    <SearchField
      height="3.6em"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      backgroundColor={theme.palette.secondary900}
    />
  );
};

export default BotListSearchField;
