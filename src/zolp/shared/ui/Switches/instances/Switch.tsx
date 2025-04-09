import React, { FC } from 'react';
import { Container, Thumb, ThumbContainer } from '../base/Switch.styled.ts';

interface Props {
  active: boolean;
  thumbSize?: string;
  width?: string;
  onClick?: () => void;
}
const Switch: FC<Props> = ({
  active,
  thumbSize = '3.2em',
  width = '5.2em',
  onClick,
}) => {
  return (
    <Container
      className={`${active ? 'active' : ''}`}
      thumbSize={thumbSize}
      width={width}
      onClick={onClick}
    >
      <ThumbContainer size={thumbSize} className={`${active ? 'active' : ''}`}>
        <Thumb size={thumbSize} className={`thumb ${active ? 'active' : ''}`} />
      </ThumbContainer>
    </Container>
  );
};

export default Switch;
