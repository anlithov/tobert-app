import styled from 'styled-components';

export const ImageContainers = styled.div<{
  width: string;
  height?: string;
  margin: string;
  opacity?: number;
}>`
  width: ${({ width }) => width};
  height: ${({ width, height }) => height ?? width};
  border-radius: ${({ width }) => width};
  position: relative;
  margin: ${({ margin }) => margin};
  opacity: ${({ opacity }) => opacity};
  > :nth-child(2) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
