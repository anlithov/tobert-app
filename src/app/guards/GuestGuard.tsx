import React, { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwtStore } from '../lib/hooks/use-jwt-tokens.hook.ts';
import { useModal } from '../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { ROUTES_NAMES } from '../../shared/lib/constants/routes-names.const.ts';
import LoadingScreen from '../../widgets/LoaderScreen/LoadingScreen.tsx';

interface IProps {
  children: ReactNode;
}
const GuestGuard: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const { jwtAccount } = useJwtStore();
  const isAuthorized = !!jwtAccount;

  console.log(jwtAccount);
  const { closeAllModals } = useModal();

  useEffect(() => {
    closeAllModals();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      navigate(ROUTES_NAMES.SHOWCASE);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      navigate(ROUTES_NAMES.SHOWCASE);
    }
  }, [jwtAccount]);

  return <>{isAuthorized ? <LoadingScreen /> : children}</>;
};

export default GuestGuard;
