import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4em;
  > * {
    width: 15em;
  }
  flex-wrap: wrap;
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  > * {
    word-break: break-all;
    overflow: hidden;
  }
`;

export const ContainerBigger = styled.div`
  display: flex;
  gap: 4em;
  > * {
    width: 30em;
  }
  flex-wrap: wrap;
`;
