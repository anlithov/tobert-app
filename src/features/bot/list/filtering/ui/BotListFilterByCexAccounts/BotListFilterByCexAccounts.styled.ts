import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Selected = styled.div`
  color: ${({ theme }) => theme.palette.primary300};
`;

export const TextContainer = styled.div`
  display: flex;
  opacity: 0.8;
  gap: 0.4em;
  font-size: 1.4em;
`;
