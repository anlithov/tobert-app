import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const PageContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 8em);
  width: 100%;
  padding: 8em 3em 10em 10.6em;
  &.side-menu-hidden-mode {
    padding-left: 2em;
  }
`;
