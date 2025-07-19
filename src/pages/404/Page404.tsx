import React from 'react';
import { Container, ContainerCard, Title, TitleNum } from './Page404.styled.ts';
import { PiSmileyXEyesLight } from 'react-icons/pi';
import Divider from '../../zolp/shared/ui/atoms/Divider/Divider.tsx';

const Page404 = () => {
  return (
    <Container>
      <ContainerCard>
        <PiSmileyXEyesLight size="20em" />
        <Divider height="1em" />
        <TitleNum>404</TitleNum>
        <Divider height="1em" />
        <Title>Oops!</Title>
        <Title>Seems like this page does not exists.</Title>
      </ContainerCard>
    </Container>
  );
};

export default Page404;
