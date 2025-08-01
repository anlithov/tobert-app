import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8em;
  > * {
    width: 15em;
  }
  flex-wrap: wrap;
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  > * {
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
  &.button-Begger {
    button {
      font-size: 1.2em;
    }
  }
`;

export const GlobolStyleDivShow2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
