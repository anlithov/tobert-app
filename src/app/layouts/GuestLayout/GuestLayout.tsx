import React, { FC, PropsWithChildren } from 'react';
import { Container } from './GuestLayout.styled.ts';
import GuestGuard from '../../guards/GuestGuard.tsx';
import { Outlet } from 'react-router-dom';

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GuestGuard>
      <Container>
        {children}
        <Outlet />
      </Container>
    </GuestGuard>
  );
};

export default GuestLayout;
