import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6em 0 2em;
  height: 5em;
  width: 100%;
  span {
    font-size: 1.5em;
  }
  > div {
    display: flex;
    width: 2.6em;
    justify-content: center;
    align-items: center;
  }
`;
