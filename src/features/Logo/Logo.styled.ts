import styled from 'styled-components';
import { logoTheme } from './Logo.theme.ts';

export const Container = styled.div<{ size: string; background?: string }>`
  display: flex;
  place-content: center;
  place-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${({ theme, background }) => background ?? logoTheme(theme).back};
  padding: ${({ size }) => `calc(${size} * 0.24)`};
  border-radius: ${({ size }) => `calc(${size} * 0.2)`};
`;
