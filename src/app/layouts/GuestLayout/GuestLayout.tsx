import React, { FC, PropsWithChildren } from 'react';
import { Container } from './GuestLayout.styled.ts';
import GuestGuard from '../../guards/GuestGuard.tsx';

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GuestGuard>
      <Container>{children}</Container>
    </GuestGuard>
  );
};

export default GuestLayout;
