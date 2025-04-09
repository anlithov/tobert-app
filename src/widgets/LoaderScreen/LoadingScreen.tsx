import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  Container,
  LoaderContainer,
  LoadingMessage,
  ThemeToggleContainer,
} from './LoadingScreen.styled';
import AccountLogOutButton from '../../entities/Account/components/AccountLogOutButton/AccountLogOutButton.tsx';
import HeartBeatLoader from '../../features/Logo/HeartBeatLoader/HeartBeatLoader.tsx';

interface Props {
  appearingMessage?: {
    timeout: number;
    message: ReactNode;
  };
}
const LoadingScreen: FC<Props> = ({ appearingMessage }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (appearingMessage) {
      setTimeout(() => {
        setShowMessage(true);
      }, appearingMessage.timeout);
    }
  }, [appearingMessage]);

  return (
    <Container>
      <ThemeToggleContainer>
        <AccountLogOutButton size="5.6em" />
      </ThemeToggleContainer>
      <LoaderContainer>
        <HeartBeatLoader size="24em" />
        <LoadingMessage className={showMessage ? 'active' : ''}>
          {appearingMessage && <span>{appearingMessage.message}</span>}
        </LoadingMessage>
      </LoaderContainer>
    </Container>
  );
};

export default LoadingScreen;
