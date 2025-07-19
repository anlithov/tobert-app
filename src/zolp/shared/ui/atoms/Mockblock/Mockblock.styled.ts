import styled from 'styled-components';

export const Container = styled.div<{
  containerWidth?: string;
  containerHeight?: string;
}>`
  display: flex;
  width: ${({ containerWidth }) => containerWidth};
  height: ${({ containerHeight }) => containerHeight};
  background: ${({ theme }) => theme.palette.secondary800};
  border-radius: 0.6em;
`;
