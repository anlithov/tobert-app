import styled from 'styled-components';
import { inlineMessageTheme } from './InlineMessage.theme.ts';

export const Container = styled.div<{
  containerHeight?: string;
  size?: string;
}>`
  display: flex;
  align-items: center;
  gap: 1.5em;
  padding: 1.4em 1.6em;
  border-radius: 1em;
  height: ${({ containerHeight }) => containerHeight};
  font-size: ${({ size }) => size};
  > span {
    display: flex;
    flex: 1;
    font-size: 1.4em;
  }

  &.error {
    background: ${({ theme }) => inlineMessageTheme(theme).errorBackground};
    color: ${({ theme }) => inlineMessageTheme(theme).errorColor};
  }
  &.warning {
    background: ${({ theme }) => inlineMessageTheme(theme).warningBackground};
    color: ${({ theme }) => inlineMessageTheme(theme).warningColor};
  }
  &.success {
    background: ${({ theme }) => inlineMessageTheme(theme).successBackground};
    color: ${({ theme }) => inlineMessageTheme(theme).successColor};
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`;
