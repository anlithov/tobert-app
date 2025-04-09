import styled from 'styled-components';
import { accordionTheme } from './Accordion.theme';

export const Container = styled.div<{
  width?: string;
  padding: string;
}>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  background-color: ${({ theme }) => accordionTheme(theme).containerBackground};
  border-radius: 2em;
  &.hoverable {
    cursor: pointer;
  }
`;

export const Content = styled.div<{
  active?: boolean;
  height?: number;
}>`
  padding-top: ${({ active }) => active && '3.2em'};
  height: ${({ active, height }) =>
    active ? `calc(${height}px + 3.2em)` : '0'};
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;
