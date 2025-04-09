import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowcasePage from './showcase/ShowcasePage.tsx';
import Page404 from './404/Page404.tsx';
import { ROUTES_NAMES } from '../shared/lib/constants/routes-names.const.ts';
import AuthToLoginRedirect from './AuthToLoginRedirector.tsx';
import AuthPage from './auth/AuthPage.tsx';

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.SHOWCASE} Component={ShowcasePage} />
      <Route path="*" Component={Page404} />
      <Route index Component={AuthToLoginRedirect} />
      <Route path={ROUTES_NAMES.AUTH} Component={AuthToLoginRedirect} />
      <Route path={ROUTES_NAMES.AUTH_DYNAMIC} Component={AuthPage} />
    </Routes>
  );
};
