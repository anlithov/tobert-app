import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowcasePage from './showcase/ShowcasePage.tsx';
import Page404 from './404/Page404.tsx';
import { ROUTES_NAMES } from '../shared/lib/constants/routes-names.const.ts';
import AuthToLoginRedirect from './AuthToLoginRedirector.tsx';
import AuthPage from './auth/AuthPage.tsx';
import CexAccountsPage from './cex-accounts/CexAccountsPage.tsx';
import ProtectedLayout from '../app/layouts/ProtectedLayout/ProtectedLayout.tsx';
import GuestLayout from '../app/layouts/GuestLayout/GuestLayout.tsx';
import HomePage from './home/HomePage.tsx';
import CreateBotPage from './create-bot/CreateBotPage.tsx';

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.SHOWCASE} Component={ShowcasePage} />
      <Route path="*" Component={Page404} />
      <Route index Component={AuthToLoginRedirect} />
      <Route element={<GuestLayout />}>
        <Route path={ROUTES_NAMES.AUTH} Component={AuthToLoginRedirect} />
        <Route path={ROUTES_NAMES.AUTH_DYNAMIC} Component={AuthPage} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path={ROUTES_NAMES.HOME} Component={HomePage} />
        <Route path={ROUTES_NAMES.CEX_ACCOUNTS} Component={CexAccountsPage} />
        <Route path={ROUTES_NAMES.CREATE_BOT} Component={CreateBotPage} />
      </Route>
    </Routes>
  );
};
