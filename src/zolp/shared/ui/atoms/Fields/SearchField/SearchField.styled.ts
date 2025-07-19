import styled from 'styled-components';
import { searchFieldTheme } from './SearchField.theme.ts';

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 1em;
  height: 100%;
  z-index: 1;

  &.error {
    right: 4.2em;
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: ${({ theme }) => searchFieldTheme(theme).iconColor};
  }
`;
