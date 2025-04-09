import styled from 'styled-components';
import { sideMenuItemTheme } from './SideMenuItem.theme.ts';
import { addAlpha } from '../../../shared/lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.4em;
  flex-direction: column;
  color: ${({ theme }) =>
    addAlpha(sideMenuItemTheme(theme).iconButtonStandardColor, 1)};
  > div {
    transition: 0.15s all;
  }
  &:hover {
    color: ${({ theme }) =>
      sideMenuItemTheme(theme).iconButtonStandardHoverColor};
    .side-menu-icon {
      background: ${({ theme }) =>
        sideMenuItemTheme(theme).iconButtonStandardHoverBackground};
    }
    .side-menu-text {
      opacity: 1;
    }
  }

  &.active {
    pointer-events: none;
    color: ${({ theme }) =>
      sideMenuItemTheme(theme).iconButtonStandardActiveColor};
    .side-menu-icon {
      background: ${({ theme }) =>
        addAlpha(
          sideMenuItemTheme(theme).iconButtonStandardActiveBackground,
          0.3,
        )};
    }

    .side-menu-text {
      opacity: 1;
    }

    &:hover {
      color: ${({ theme }) =>
        sideMenuItemTheme(theme).iconButtonStandardHoverColor};
      .side-menu-icon {
        background: ${({ theme }) =>
          addAlpha(
            sideMenuItemTheme(theme).iconButtonStandardActiveBackground,
            0.4,
          )};
      }
    }
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 3.4em;
  border-radius: 2em;
  background: ${({ theme }) =>
    addAlpha(sideMenuItemTheme(theme).iconButtonStandardActiveBackground, 0)};
`;

export const ContainerText = styled.div`
  display: flex;
  font-size: 1.2em;
  opacity: 0.7;
`;
