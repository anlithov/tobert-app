import React from 'react';
import { RxTriangleDown } from 'react-icons/rx';
import Chip from '../../../../../../../../zolp/shared/ui/atoms/Chip/Chip.tsx';
import DropdownProvider from '../../../../../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/DropdownProvider.tsx';
import { Container } from './BotListFilterByStatuses.styled.ts';
import StatusesListSelectable from './components/StatusesListSelectable/StatusesListSelectable.tsx';
import { useDropdownControl } from '../../../../../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/hooks/useDropdownControl.tsx';
import { useAtomValue } from 'jotai';
import { atomBotListStatusesFilter } from '../../../../model/bots-page.atom.ts';
import {
  Selected,
  TextContainer,
} from '../BotListFilterByCexAccounts/BotListFilterByCexAccounts.styled.ts';

const BotListFilterByStatuses = () => {
  const { ref, onClickProps, showDropdown } = useDropdownControl();
  const statuses = useAtomValue(atomBotListStatusesFilter);

  return (
    <DropdownProvider
      ContainerComponent={Container}
      ContainerProps={{
        ref,
      }}
      showDropdown={showDropdown}
      spaceBetween="0.5em"
      dropdownPosition={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      widthDropdownArea="24em"
      DropdownComponent={
        <StatusesListSelectable onClose={onClickProps.onClick} />
      }
    >
      <Chip
        padding="0.8em 1.2em"
        height="3.6em"
        width="auto"
        active={statuses.length > 0}
        RightComponent={
          <RxTriangleDown
            size="1.4em"
            style={{ rotate: showDropdown ? '180deg' : '0deg' }}
          />
        }
        placeholder={
          <TextContainer>
            Statuses
            <Selected>{statuses.length > 0 && `(${statuses.length})`}</Selected>
          </TextContainer>
        }
        {...onClickProps}
      />
    </DropdownProvider>
  );
};

export default BotListFilterByStatuses;
