import styled from 'styled-components';
import { dropdownListTheme } from './DropdownList.theme.ts';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';

export const InfinityContainer = styled.div<{
  width: string;
  maxHeight: string;
}>`
  border-radius: 0.8em;
  box-shadow: ${({ theme }) =>
    `0px 1px 3px 1px ${addAlpha(
      dropdownListTheme(theme).containerShadow,
      0.2,
    )}, 0px 1px 2px 0px ${addAlpha(
      dropdownListTheme(theme).containerShadow,
      0.2,
    )}`};
  width: ${({ width }) => `calc(${width} + 0.4em)`};
  background-color: ${({ theme }) =>
    dropdownListTheme(theme).containerBackground};

  .dropdown-infinity {
    max-height: ${({ maxHeight }) => maxHeight};

    height: auto !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    &::-webkit-scrollbar {
      width: 0.6em;
      background: ${({ theme }) =>
        dropdownListTheme(theme).containerBackground} !important;
      border-radius: 0 0.8em 0.8em 0;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
        dropdownListTheme(theme).containerBackground} !important;
    }
  }

  .dropdown {
    box-shadow: unset;
  }
`;

export const DropdownListContainer = styled.div<{
  width: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `calc(${width} + 0.4em)`};
  background-color: ${({ theme }) =>
    dropdownListTheme(theme).containerBackground};
`;

export const Container = styled.div<{
  width: string;
  maxHeight?: string;
  padding: string;
  minWidth?: string;
  height?: string;
}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  box-shadow: ${({ theme }) =>
    `0px 1px 3px 1px ${addAlpha(
      dropdownListTheme(theme).containerShadow,
      0.2,
    )}, 0px 1px 2px 0px ${addAlpha(
      dropdownListTheme(theme).containerShadow,
      0.2,
    )}`};
  border-radius: 0.8em;
  padding: ${({ padding }) => padding};
  background-color: ${({ theme }) =>
    dropdownListTheme(theme).containerBackground};
  max-height: ${({ maxHeight }) => maxHeight || 'initial'};
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.6em;
    background: ${({ theme }) =>
      dropdownListTheme(theme).containerBackground} !important;
    border-radius: 0 0.8em 0.8em 0;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      dropdownListTheme(theme).containerBackground} !important;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: background-color 0.1s ease;
  cursor: pointer;
  color: ${({ theme }) => dropdownListTheme(theme).color};

  &.active {
    background-color: ${({ theme }) =>
      addAlpha(dropdownListTheme(theme).itemHoverBackground, 0.5)};
  }
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &.static {
    pointer-events: none;
  }
  &:hover {
    background-color: ${({ theme }) =>
      dropdownListTheme(theme).itemHoverBackground};
  }
`;

export const DropdownErrorMessage = styled.span`
  padding: 0.8em 1.2em;
  font-size: 1.4em;
`;
