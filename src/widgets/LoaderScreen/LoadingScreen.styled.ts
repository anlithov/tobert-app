import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30em;
`;

export const LoadingMessage = styled.div`
  position: absolute;
  top: calc(100% + 2em);
  opacity: 0;
  text-align: center;
  transition: 0.5s;
  > * {
    text-align: center;
  }
  span {
    font-size: 1.6em;
  }
  &.active {
    height: auto;
    opacity: 1;
  }
`;

export const ThemeToggleContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.5em;
  right: 2em;
  top: 2em;
`;
