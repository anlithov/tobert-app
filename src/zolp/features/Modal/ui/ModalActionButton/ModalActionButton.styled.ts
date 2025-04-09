import styled from 'styled-components';
import { modalActionButtonTheme } from './ModalActionButton.theme.ts';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  width: 100%;
  background: ${({ theme }) =>
    modalActionButtonTheme(theme).backgroundFilledColor};
  border-radius: 1em;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;
  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
  &:hover {
    background: ${({ theme }) =>
      modalActionButtonTheme(theme).backgroundFilledHoverColor};
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.6em;
  font-weight: 500;
`;

export const SubTitle = styled.span``;
