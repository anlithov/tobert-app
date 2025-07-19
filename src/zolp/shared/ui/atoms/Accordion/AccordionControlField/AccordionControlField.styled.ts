import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';
import { accordionControlFieldTheme } from './AccordionControlField.theme.ts';

export const Container = styled.div<{
  height?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  height: ${({ height }) => height};
  border-radius: 2.8em;
  transition: 0.1s;
  gap: 0.5em;

  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &.disabled-click {
    pointer-events: none;
  }
`;

export const Icon = styled(BiChevronDown)`
  background-color: ${({ theme }) =>
    accordionControlFieldTheme(theme).buttonBackground};
  border-radius: 50%;
  transition: 0.3s ease;
  &.up {
    transform: rotate(180deg);
  }
`;
