import React from 'react';
import { Container, Wrap } from './AvatarMenu.styled.ts';
import DropdownUserMenuList from './DropdownUserMenuList.tsx';
import { FaUser } from 'react-icons/fa';
import ButtonIconed from '../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import DropdownProvider from '../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/DropdownProvider.tsx';
import { useDropdownControl } from '../../../../zolp/shared/ui/molecules/PopupHelpers/providers/DropdownProvider/hooks/useDropdownControl.tsx';

const AvatarMenu = () => {
  const { showDropdown, ref, onClickProps } = useDropdownControl();

  return (
    <DropdownProvider
      ContainerComponent={Container}
      showDropdown={showDropdown}
      DropdownComponent={<DropdownUserMenuList />}
      widthDropdownArea="18em"
      spaceBetween="0.5em"
      dropdownPosition={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
    >
      <Wrap ref={ref}>
        <ButtonIconed
          color="primary"
          variant="tonal"
          width="4.6em"
          height="4.6em"
          borderRadius="1.6em"
          onClick={onClickProps.onClick}
        >
          <FaUser size="1.6em" />
        </ButtonIconed>
      </Wrap>
    </DropdownProvider>
  );
};

export default AvatarMenu;
