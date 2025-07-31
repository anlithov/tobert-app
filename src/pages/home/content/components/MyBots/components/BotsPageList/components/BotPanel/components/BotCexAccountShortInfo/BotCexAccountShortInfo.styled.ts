import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 10em;
  gap: 0.2em;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 1.4em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 8em;
`;

export const ApiKey = styled.div`
  font-size: 1.3em;
  opacity: 0.6;
`;
