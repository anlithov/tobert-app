import React, { FC } from 'react';
import { Container } from './Mockblock.styled.ts';

interface Props {
  w?: string;
  h?: string;
}
const Mockblock: FC<Props> = ({ w, h }) => {
  return <Container containerHeight={h} containerWidth={w} />;
};

export default Mockblock;
