import React from 'react';
import AvatarMenuButton from '../../ui/AvatarMenuButton.tsx';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import {
  AUTH_SCREENS,
  ROUTES_NAMES_GENERATOR,
} from '../../../../../../shared/lib/constants/routes-names.const.ts';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useJwtStore } from '../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import { headerMessages } from '../../../../libs/messages/header.messages.ts';

const LogoutRowButton = () => {
  const { setJwtAccount } = useJwtStore();

  const navigate = useNavigate();
  const handleExit = () => {
    setJwtAccount('');
    navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login));
  };

  return (
    <AvatarMenuButton
      onClick={() => {
        handleExit();
      }}
      title={
        <span>
          <FormattedMessage {...headerMessages.exit} />
        </span>
      }
      iconButton={
        <div>
          <AiOutlinePoweroff size="2em" />
        </div>
      }
    />
  );
};

export default LogoutRowButton;
