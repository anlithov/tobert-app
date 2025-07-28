import React, { FC, ReactNode } from 'react';
import {
  MainNavigationContainer,
  SideMenuContainer,
} from './SideMenu.styled.ts';
import { Link } from 'react-router-dom';
import SideMenuItem from './ui/SideMenuItem.tsx';

export interface SideMenuItemData {
  link: string;
  icon: ReactNode;
  text: ReactNode;
  disabled?: boolean;
}

interface Props {
  navigationItems: SideMenuItemData[];
}
const SideMenu: FC<Props> = ({ navigationItems }) => {
  return (
    <SideMenuContainer>
      <MainNavigationContainer>
        {navigationItems.map((navItem) => {
          const icon = <SideMenuItem navItem={navItem} />;

          return navItem.disabled ? (
            icon
          ) : (
            <Link to={navItem.link} key={navItem.link}>
              {icon}
            </Link>
          );
        })}
      </MainNavigationContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
