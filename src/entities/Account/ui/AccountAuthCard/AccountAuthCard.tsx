import React, { FC, ReactNode } from 'react';
import {
  AuthCardBox,
  AuthCardContainer,
  LogoCont,
  TitleApp,
  TitleContainer,
} from './AccountAuthCard.styled.ts';
import Logo from '../../../../features/Logo/Logo';

type UserAuthCardProps = {
  children: ReactNode;
};

const AccountAuthCard: FC<UserAuthCardProps> = ({ children }) => {
  return (
    <AuthCardContainer>
      <LogoCont>
        <Logo size="11em" />
        <TitleContainer>
          <TitleApp>Tobert</TitleApp>
          <span>trade smarter</span>
        </TitleContainer>
      </LogoCont>
      <AuthCardBox>{children}</AuthCardBox>
    </AuthCardContainer>
  );
};

export default AccountAuthCard;
