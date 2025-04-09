import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../widgets/LoaderScreen/LoadingScreen';
import {
  AUTH_SCREENS,
  ROUTES_NAMES_GENERATOR,
} from '../../shared/lib/constants/routes-names.const.ts';
import { useJwtStore } from '../lib/hooks/use-jwt-tokens.hook.ts';

const ProtectedGuard: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { jwtAccount } = useJwtStore();
  const isAuthorized = !!jwtAccount;

  useEffect(() => {
    if (!isAuthorized) {
      navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login));
    }
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login));
    }
  }, [jwtAccount]);

  const isFetchingUserData = false;

  return isFetchingUserData ? (
    <LoadingScreen
      appearingMessage={{
        timeout: 30000,
        message: '',
      }}
    />
  ) : (
    <>{children}</>
  );
};

export default ProtectedGuard;
