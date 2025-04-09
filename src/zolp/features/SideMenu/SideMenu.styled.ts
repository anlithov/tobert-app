import styled from 'styled-components';
import { sideMenuTheme } from './SideMenu.theme';

export const SideMenuContainer = styled.div`
  position: fixed;
  top: 7em;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9.6em;
  align-items: center;
  padding: 10em 0;
  min-height: calc(100vh - 6.4em);
  background-color: ${({ theme }) => sideMenuTheme(theme).backgroundColor};
  z-index: 100;
  &.hidden-mode {
    margin-left: -9.6em;
    transition: 0.2s ease-in-out;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      right: -2em;
      width: 2em;
    }
    &:hover {
      margin-left: 0;
    }
  }
  &.active {
    margin-left: 0;
  }
`;

export const MainNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-bottom: 8em;
`;
