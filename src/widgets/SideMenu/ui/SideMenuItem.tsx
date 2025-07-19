import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  ContainerIcon,
  ContainerText,
} from './SideMenuItem.styled.ts';

interface Props {
  navItem: any;
}
const SideMenuItem: FC<Props> = ({ navItem }) => {
  const location = useLocation();

  return (
    <Container
      key={navItem.link}
      className={`${
        location.pathname === navItem.link ||
        location.pathname.startsWith(navItem.link)
          ? 'active'
          : ''
      } ${navItem.disabled ? 'disabled' : ''}`}
    >
      <ContainerIcon className="side-menu-icon">{navItem.icon}</ContainerIcon>
      <ContainerText className="side-menu-text">{navItem.text}</ContainerText>
    </Container>
  );
};

export default SideMenuItem;
