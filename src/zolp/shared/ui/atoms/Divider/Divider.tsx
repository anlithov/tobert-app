import React, { FC, PropsWithChildren } from 'react';
import * as Styled from './Divider.styled.ts';

export interface DividerProps extends PropsWithChildren {
  flex?: string;
  width?: string;
  height?: string;
  zindex?: string;
}
const Divider: FC<DividerProps> = ({
  flex,
  width = 'auto',
  height = 'auto',
  zindex = 'auto',
  children,
}) => {
  return (
    <Styled.DividerContainer
      flex={flex}
      width={width}
      height={height}
      zindex={zindex}
    >
      {children}
    </Styled.DividerContainer>
  );
};
export default Divider;
