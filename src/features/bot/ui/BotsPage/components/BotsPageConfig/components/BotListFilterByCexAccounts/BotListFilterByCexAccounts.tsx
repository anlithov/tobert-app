import React from 'react';
import { RxTriangleDown } from 'react-icons/rx';
import Chip from '../../../../../../../../zolp/shared/ui/atoms/Chip/Chip.tsx';
import DropdownProvider from '../../../../../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/DropdownProvider.tsx';
import {
  Container,
  Selected,
  TextContainer,
} from './BotListFilterByCexAccounts.styled.ts';
import CexAccountsListSelectable from './components/CexAccountsListSelectable/CexAccountsListSelectable.tsx';
import { useDropdownControl } from '../../../../../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/hooks/useDropdownControl.tsx';
import { atomBotListCexAccountIdsFilter } from '../../../../model/bots-page.atom.ts';
import { useAtomValue } from 'jotai';

const BotListFilterByCexAccounts = () => {
  const accountIds = useAtomValue(atomBotListCexAccountIdsFilter);
  const { ref, onClickProps, showDropdown } = useDropdownControl();

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
        <CexAccountsListSelectable onClose={onClickProps.onClick} />
      }
    >
      <Chip
        padding="0.8em 1.2em"
        height="3.6em"
        width="auto"
        active={accountIds.length > 0}
        RightComponent={
          <RxTriangleDown
            size="1.4em"
            style={{ rotate: showDropdown ? '180deg' : '0deg' }}
          />
        }
        placeholder={
          <TextContainer>
            Cex Accounts
            <Selected>
              {accountIds.length > 0 && `(${accountIds.length})`}
            </Selected>
          </TextContainer>
        }
        {...onClickProps}
      />
    </DropdownProvider>
  );
};

export default BotListFilterByCexAccounts;
