import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;
  padding: 0.8em 1em;
  background: ${({ theme }) => theme.palette.secondary800};
`;
