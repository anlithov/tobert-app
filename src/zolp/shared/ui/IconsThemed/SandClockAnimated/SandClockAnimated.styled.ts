import styled, { keyframes } from 'styled-components';

const sandClockAnimation = keyframes`
 0% {
 
 }
  19.999999999% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(180deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div<{ size: string }>`
  display: flex;
  animation-name: ${sandClockAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  width: ${({ size }) => size ?? '100%'};
  height: ${({ size }) => size ?? '100%'};
  > * {
    width: ${({ size }) => size ?? '100%'};
    height: ${({ size }) => size ?? '100%'};
  }
`;
