import React from 'react';
import { ButtonTitle, Container, Header, Inner } from './HomeContent.styled.ts';
import Divider from '../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import MyBots from './components/MyBots/MyBots.tsx';
import ButtonIconed from '../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { FaPlus } from 'react-icons/fa';

const HomeContent = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <h1>My Bots</h1>
          <ButtonIconed width="12em" height="5em" borderRadius="1.6em">
            <FaPlus size="1.8em" />
            <Divider width="1em" />
            <ButtonTitle>Create</ButtonTitle>
          </ButtonIconed>
        </Header>
        <Divider height="2em" />
        <MyBots />
      </Inner>
    </Container>
  );
};

export default HomeContent;
