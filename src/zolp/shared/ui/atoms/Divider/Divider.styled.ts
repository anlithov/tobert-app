import styled from 'styled-components';
import { DividerProps } from './Divider.tsx';

export const DividerContainer = styled.div<DividerProps>`
  display: inline-block;
  ${({ width, height, zindex }) => `
      width: ${width};
      height: ${height};
      z-index: ${zindex};
    `}
  ${(props) =>
    props.flex === '1' &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
