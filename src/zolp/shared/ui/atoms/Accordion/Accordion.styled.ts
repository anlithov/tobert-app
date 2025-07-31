import styled from 'styled-components';
import { accordionTheme } from './Accordion.theme.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div<{
  width?: string;
  padding: string;
}>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: 2em;
  &.hoverable {
    cursor: pointer;
  }

  &.filled {
    background-color: ${({ theme }) =>
      accordionTheme(theme).containerFilledBackground};
  }

  &.outlined {
    background-color: ${({ theme }) =>
      addAlpha(accordionTheme(theme).containerOutlinedBackground, 0.3)};
    border: 1px solid
      ${({ theme }) =>
        addAlpha(accordionTheme(theme).containerOutlinedBorder, 0.4)};
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
