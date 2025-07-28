import React from 'react';
import {
  HeaderActionsContainer,
  HeaderContainer,
  LogoContainer,
} from './Header.styled';
import { useScrollPosition } from '../../zolp/shared/lib/hooks/use-scroll-position.hook.ts';
import Logo from '../../shared/ui/molecules/Logo/Logo.tsx';

const Header = () => {
  const { isScrolled } = useScrollPosition();

  return (
    <HeaderContainer className={`${isScrolled ? 'scrolled' : ''}`}>
      <LogoContainer>
        <Logo size="5em" />
      </LogoContainer>
      <HeaderActionsContainer
        style={isScrolled ? { fontSize: '0.9em' } : undefined}
      ></HeaderActionsContainer>
    </HeaderContainer>
  );
};

export default Header;
