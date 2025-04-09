import React, { FC } from 'react';
import LogoLight from '../../assets/tobert-logo.svg';
import ImageContainer from '../../zolp/shared/ui/ImageContainer/base/ImageContainer.tsx';
import { Container } from './Logo.styled.ts';

interface LogoProps {
  size: string;
  background?: string;
}

const Logo: FC<LogoProps> = ({ size, background }) => {
  return (
    <Container size={size} background={background}>
      <ImageContainer
        height={`calc(${size} * 0.75)`}
        width={`calc(${size} * 0.67)`}
        src={<LogoLight />}
      />
    </Container>
  );
};

export default Logo;
