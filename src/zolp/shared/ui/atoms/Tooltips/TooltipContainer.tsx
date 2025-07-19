import React, { FC, PropsWithChildren } from 'react';
import { Container } from './TooltipContainer.styled.ts';

interface Props extends PropsWithChildren {
  width?: string;
  borderRadius?: string;
}
const TooltipContainer: FC<Props> = ({
  children,
  borderRadius = '1.4em',
  width,
}) => {
  return (
    <Container width={width} borderRadius={borderRadius}>
      {children}
    </Container>
  );
};

export default TooltipContainer;
