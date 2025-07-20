import React, { FC } from 'react';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  AUTH_SCREENS,
  ROUTES_NAMES_GENERATOR,
} from '../../../../../shared/lib/constants/routes-names.const.ts';
import ButtonIconed from '../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { useJwtStore } from '../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';

interface Props {
  size?: string;
}
const AccountLogOutButton: FC<Props> = ({ size }) => {
  const { setJwtAccount } = useJwtStore();

  const navigate = useNavigate();
  const handleExit = () => {
    setJwtAccount('');
    navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login));
  };

  return (
    <ButtonIconed
      variant="flat"
      color="secondary"
      width={size ?? '5.6em'}
      onClick={handleExit}
    >
      <AiOutlinePoweroff size="2.4em" />
    </ButtonIconed>
  );
};

export default AccountLogOutButton;
