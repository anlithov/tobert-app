import styled from 'styled-components';
import { headerTheme } from './Header.theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1.2em 0;
  z-index: 100;
  transition:
    padding 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &.scrolled {
    background-color: ${({ theme }) => headerTheme(theme).backgroundColor};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 2.2em;
  align-items: center;
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 0 3.2em;
  transition: 0.3s;
`;

export const TradeText = styled.div`
  font-size: 1.6em;
`;
