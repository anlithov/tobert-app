import React, { FC, PropsWithChildren } from 'react';
import * as Styled from './ProtectedLayout.styled.ts';
import { PageContainer, PageContent } from './ProtectedLayout.styled.ts';
import ProtectedGuard from '../../guards/ProtectedGuard.tsx';
import { Outlet } from 'react-router-dom';
import Header from '../../../widgets/Header/Header.tsx';

interface Props extends PropsWithChildren {
  sideMenuHiddenMode?: boolean;
}
const ProtectedLayout: FC<Props> = ({ children, sideMenuHiddenMode }) => {
  return (
    <ProtectedGuard>
      <Styled.Container>
        <Header />
        <PageContainer>
          {/*<SideMenu navigationItems={[]} />*/}
          <PageContent
            className={sideMenuHiddenMode ? 'side-menu-hidden-mode' : ''}
          >
            {children}
            <Outlet />
          </PageContent>
        </PageContainer>
      </Styled.Container>
    </ProtectedGuard>
  );
};

export default ProtectedLayout;
