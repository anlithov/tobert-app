import styled from 'styled-components';
import { checkboxTheme } from './Checkbox.theme';

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  width: fit-content;
  z-index: 2;
  margin: 1.5em;
  input[type='checkbox'] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  &:hover {
    .backgroundContainer {
      background: ${({ theme }) => checkboxTheme(theme).hoverBackground};
    }
  }
  &:focus {
    .backgroundContainer {
      background: ${({ theme }) => checkboxTheme(theme).focusBackground};
    }
  }
`;

export const Background = styled.span`
  position: absolute;
  width: 2.9em;
  height: 2.9em;
  border-radius: 2.9em;
  z-index: -1;
  transition: 0.2s all;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .checkbox {
    display: inline-block;
    height: 1.8em;
    width: 1.8em;
    background: ${({ theme }) => checkboxTheme(theme).uncheckedBackground};
    border-radius: 0.3em;
    border: 0.2em solid ${({ theme }) => checkboxTheme(theme).uncheckedBorder};
    &.disabled {
        border: 0.2em solid
          ${({ theme }) => checkboxTheme(theme).uncheckedBackground}
     }
  &.checked {
    border-color: ${({ theme }) => checkboxTheme(theme).checkedBackground};
    background: ${({ theme }) => checkboxTheme(theme).checkedBackground};
    path {
      stroke: ${({ theme }) => checkboxTheme(theme).check};
    }
      
    &.disabled {
        border-color: transparent;
        background: ${({ theme }) =>
          checkboxTheme(theme).checkedBackgroundDisabled};
        path {
            stroke: ${({ theme }) => checkboxTheme(theme).checkDisabled};
        }
    }
  }
  
`;
