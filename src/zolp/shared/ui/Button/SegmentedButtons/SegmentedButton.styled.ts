import styled from 'styled-components';
import { segmentedButtonsTheme } from './SegmentedButtons.theme.ts';

export const Container = styled.div<{
  height?: string;
}>`
  position: relative;
  display: flex;
  height: ${(props) => props.height ?? undefined};
`;

export const BlockContainer = styled.div<{
  paddingVertical?: string;
  paddingHorizontal?: string;
  blockWidth: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ blockWidth }) => blockWidth};
  padding-left: ${(props) => props.paddingHorizontal ?? '2em'};
  padding-right: ${(props) => props.paddingHorizontal ?? '2em'};
  border: 1px solid ${({ theme }) => segmentedButtonsTheme(theme).border};
  transition: 0.1s;
  font-weight: 500;
  cursor: pointer;
  &.first {
    border-radius: 2em 0 0 2em;
    padding-left: ${(props) =>
      props.paddingHorizontal
        ? `calc(${props.paddingHorizontal} * 1.2)`
        : '2.4em'};
  }
  &.last {
    padding-right: ${(props) =>
      props.paddingHorizontal
        ? `calc(${props.paddingHorizontal} * 1.2)`
        : '2.4em'};
    border-radius: 0 2em 2em 0;
  }
  > * {
    opacity: 0.9;
  }
  &:hover {
    color: ${({ theme }) => segmentedButtonsTheme(theme).colorActive};
    background: ${({ theme }) => segmentedButtonsTheme(theme).backgroundHover};
    > * {
      opacity: 1;
    }
  }

  &.active {
    pointer-events: none;
    color: ${({ theme }) => segmentedButtonsTheme(theme).colorActive};
    background: ${({ theme }) => segmentedButtonsTheme(theme).backgroundActive};
    > * {
      opacity: 1;
    }
  }
`;
