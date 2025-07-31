import React from 'react';
import LogoutRowButton from './components/LogoutRowButton/LogoutRowButton.tsx';
import DropdownList, {
  DropdownListItemProps,
} from '../../../../zolp/shared/ui/atoms/Dropdown/DropdownList/DropdownList.tsx';

const DropdownUserMenuList = () => {
  const buttons: DropdownListItemProps[] = [
    /*{
      children: <ThemeModeTowButton />,
    },*/
    {
      children: <LogoutRowButton />,
    },
  ];

  return <DropdownList width="100%" items={buttons} />;
};

export default DropdownUserMenuList;
