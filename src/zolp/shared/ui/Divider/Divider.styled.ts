import styled from 'styled-components';
import { DividerProps } from './Divider';

export const DividerContainer = styled.div<DividerProps>`
  display: inline-block;
  ${({ width, height, zIndex }) => `
      width: ${width};
      height: ${height};
      z-index: ${zIndex};
    `}
  ${(props) =>
    props.flex === '1' &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
