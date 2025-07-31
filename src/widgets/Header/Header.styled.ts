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

export const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 2.2em;
  align-items: center;
  z-index: 1;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex: 1;
  padding: 0 1em;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 3.2em;
  gap: 2em;
  transition: 0.3s;

  @media screen and (max-width: 1000px) {
    padding: 0 2em;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.secondary100};
  font-size: 1.6em;
  opacity: 0.7;
  cursor: pointer;
  padding: 0.6em 1.4em;
  transition: 0.2s;
  height: 100%;
  &.active {
    cursor: auto;
    opacity: 1;
    color: ${({ theme }) => theme.palette.secondary100}!important;
    text-decoration: none !important;
    pointer-events: none;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.palette.primary300};
    text-decoration: underline;
  }
`;
