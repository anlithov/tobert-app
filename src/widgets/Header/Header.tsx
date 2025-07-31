import React from 'react';
import {
  HeaderActionsContainer,
  HeaderContainer,
  Inner,
  LogoContainer,
  MenuButton,
  MenuContainer,
} from './Header.styled';
import { useScrollPosition } from '../../zolp/shared/lib/hooks/use-scroll-position.hook.ts';
import Logo from '../../shared/ui/molecules/Logo/Logo.tsx';
import { ROUTES_NAMES } from '../../shared/lib/constants/routes-names.const.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccountNavigation } from './libs/hooks/use-account-navigation.hook.tsx';
import AvatarMenu from './components/AvatarMenu/AvatarMenu.tsx';

const Header = () => {
  const { isScrolled } = useScrollPosition();
  const navigate = useNavigate();
  const loc = useLocation();

  const navigations = useAccountNavigation();

  return (
    <HeaderContainer className={`${isScrolled ? 'scrolled' : ''}`}>
      <Inner>
        <LogoContainer
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(ROUTES_NAMES.HOME);
          }}
        >
          <Logo size="5em" />
        </LogoContainer>
        <MenuContainer>
          {navigations.map((item, index) => {
            return (
              <MenuButton
                key={index}
                className={`${
                  item.link && loc.pathname.includes(item.link) ? 'active' : ''
                } ${item.disabled ? 'disabled' : ''}`}
                onClick={
                  item.onAfterClick ??
                  (() => {
                    item.link && navigate(item.link);
                  })
                }
              >
                {item.text}
              </MenuButton>
            );
          })}
        </MenuContainer>
        <HeaderActionsContainer>
          <AvatarMenu />
        </HeaderActionsContainer>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;
