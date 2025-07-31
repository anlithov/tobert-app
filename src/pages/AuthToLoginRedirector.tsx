import React from 'react';
import {
  AUTH_SCREENS,
  ROUTES_NAMES,
  ROUTES_NAMES_GENERATOR,
} from '../shared/lib/constants/routes-names.const';
import PageRedirect from '../app/guards/PageRedirect.tsx';
import { useJwtStore } from '../app/lib/hooks/use-jwt-tokens.hook.ts';

const AuthToLoginRedirect = () => {
  const { jwtAccount } = useJwtStore();

  return jwtAccount ? (
    <PageRedirect route={ROUTES_NAMES.SHOWCASE} />
  ) : (
    <PageRedirect route={ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login)} />
  );
};

export default AuthToLoginRedirect;
