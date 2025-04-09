import styled from 'styled-components';
import { loadingTheme } from './Loading.theme';

export const Container = styled.svg<{ color?: string }>`
  animation: spin 1s linear infinite;
  fill: ${({ theme, color }) =>
    color ?? loadingTheme(theme).loadingContainerFill};
  circle {
    color: #000;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
