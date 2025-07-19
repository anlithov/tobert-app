import styled from 'styled-components';
import { tooltipContainerTheme } from './TooltipContainer.theme.ts';

export const Container = styled.div<{ width?: string; borderRadius?: string }>`
  position: relative;
  display: flex;
  border-radius: ${({ borderRadius }) => borderRadius ?? '2em'};
  width: ${({ width }) => width};
  background-color: ${({ theme }) =>
    tooltipContainerTheme(theme).containerBackground};
  padding: 1em 1.2em;
  color: ${({ theme }) => tooltipContainerTheme(theme).color};
  span {
    line-height: 1.4em;
    font-size: 1.3em;
  }
`;
