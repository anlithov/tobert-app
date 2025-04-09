import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  gap: 2em;
  width: 100%;
  height: 100vh;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  width: 50em;
  height: 42em;
  border-radius: 2em;
  > svg {
    opacity: 0.5;
  }
`;

export const TitleNum = styled.div`
  font-size: 6em;
`;
export const Title = styled.div`
  font-size: 2.4em;

  opacity: 0.5;
`;
