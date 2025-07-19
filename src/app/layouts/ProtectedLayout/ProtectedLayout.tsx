import React, { FC, PropsWithChildren } from 'react';
import * as Styled from './ProtectedLayout.styled.ts';
import { PageContainer, PageContent } from './ProtectedLayout.styled.ts';
import ProtectedGuard from '../../guards/ProtectedGuard.tsx';
import { Outlet } from 'react-router-dom';
import { useProtectedStatesProvider } from './libs/hooks/use-protected-states-provider.hook.ts';

interface Props extends PropsWithChildren {
  sideMenuHiddenMode?: boolean;
}
const ProtectedLayout: FC<Props> = ({ children, sideMenuHiddenMode }) => {
  useProtectedStatesProvider();

  return (
    <ProtectedGuard>
      <Styled.Container>
        <PageContainer>
          {/* <SideMenu
            navigationItems={accountNavigationItems}
            hiddenMode={sideMenuHiddenMode}
          />*/}
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
