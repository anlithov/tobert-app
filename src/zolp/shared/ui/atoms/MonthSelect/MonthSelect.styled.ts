import styled from 'styled-components';
import { monthSelectTheme } from './MonthSelect.theme.ts';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const ControlField = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-top: 0.2em;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4em;
  line-height: 1.43;
  letter-spacing: 0.01em;
`;

export const Variants = styled.div<{
  open?: boolean;
}>`
  background-color: ${({ theme }) => monthSelectTheme(theme).backgroundColor};
  height: 19em;
  z-index: 100;
  position: absolute;
  left: -2em;
  font-size: 1.4em;
  width: 18.7em;
  overflow: hidden;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  overflow-y: auto;
  padding: ${({ open }) => (open ? '0em 0.5em' : '0em')};
  box-sizing: border-box;
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => monthSelectTheme(theme).backgroundColor};
    width: 0.5em;
  }
  &::-webkit-scrollbar {
    background: ${({ theme }) => monthSelectTheme(theme).backgroundColor};
    width: 0.5em;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1em 1em;
  margin: 0.3em;
  height: 2em;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => monthSelectTheme(theme).itemHoverBackground};
    border-radius: 2em;
  }
  &.disabled {
    opacity: 0.25;
    user-select: none;
    pointer-events: none;
  }
`;
