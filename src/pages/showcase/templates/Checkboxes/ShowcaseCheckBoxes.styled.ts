import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4em;
  > * {
    width: 15em;
  }
  flex-wrap: wrap;
`;

export const BoxInputs = styled.div<{
  width?: string;
}>`
  width: ${(props) => props.width};
  display: flex;
  gap: 1em;
  flex-direction: column;
`;
