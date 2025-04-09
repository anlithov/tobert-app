import React, { FC, ReactNode, useEffect } from 'react';
import { MainNavigationContainer, SideMenuContainer } from './SideMenu.styled';
import { Link } from 'react-router-dom';
import SideMenuItem from './ui/SideMenuItem.tsx';
import { useRecoilState } from 'recoil';
import { atomSideMenuVisibility } from './libs/store/side-,menu.atom.ts';

export interface SideMenuItemData {
  link: string;
  icon: ReactNode;
  text: ReactNode;
  disabled?: boolean;
}

interface Props {
  hiddenMode?: boolean;
  navigationItems: SideMenuItemData[];
}
const SideMenu: FC<Props> = ({ navigationItems, hiddenMode }) => {
  const [visible, setVisible] = useRecoilState(atomSideMenuVisibility);
  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <SideMenuContainer
      onMouseLeave={() => {
        setVisible(false);
      }}
      className={`${hiddenMode ? 'hidden-mode' : ''} ${
        visible ? 'active' : ''
      }`}
    >
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
