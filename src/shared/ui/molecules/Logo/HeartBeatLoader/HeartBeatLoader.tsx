import React, { FC } from 'react';
import {
  Container,
  LoaderBlock,
  LoaderLogo,
} from './HeartBeatLoader.styled.tsx';
import Logo from '../Logo.tsx';

interface Props {
  size?: string;
}
const HeartBeatLoader: FC<Props> = ({ size = '25em' }) => {
  return (
    <Container containerHeight={size}>
      <LoaderLogo>
        <Logo background="none" size={`calc(${size} * 0.5)`} />
      </LoaderLogo>
      <LoaderBlock size={size} />
    </Container>
  );
};

export default HeartBeatLoader;
