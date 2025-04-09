import styled from 'styled-components';
import { modalWrapperTheme } from './ModalWrapper.theme.ts';

export const Container = styled.div<{ background?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  opacity: 0;
  background: ${(props) =>
    props.background ??
    modalWrapperTheme(props.theme).modalWrapperContainerBackground};
  transition: 0.2s ease;
  z-index: 999;
  &.active {
    opacity: 1;
  }
`;

export const ClickableOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ContentScrollContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 2em;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 1em;
  z-index: 1000;
`;
