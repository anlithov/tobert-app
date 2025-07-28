import React, { FC, useEffect } from 'react';
import { useFormikContext } from 'formik';
import {
  LOGIN_FIELDS_NAMES,
  LoginFieldsNames,
} from '../../libs/constants/login-field-names.const.ts';
import { ButtonCommon } from '../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { accountLoginFormMessages } from '../../libs/messages/account-login-form.messages.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAMES } from '../../../../../../../shared/lib/constants/routes-names.const.ts';
import { useKeyPress } from '../../../../../../../shared/lib/hooks/use-key-press.hook.ts';
import { useJwtStore } from '../../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import { useAccountLoginMutation } from '../../../../../../../__graphql/generated.ts';
import { useIntl } from 'react-intl';

interface Props {
  setErrorMessage: (value: {
    text: string;
    variant: 'error' | 'warning' | 'success';
  }) => void;
}

const LoginButton: FC<Props> = ({ setErrorMessage }) => {
  const { values, isValid, isSubmitting } =
    useFormikContext<Record<LoginFieldsNames, string>>();

  const intl = useIntl();

  const [login, { data: loginData, loading, error }] =
    useAccountLoginMutation();

  useEffect(() => {
    if (error?.message.includes('Account')) {
      setErrorMessage({
        text: intl.formatMessage(
          accountLoginFormMessages.invalidPassOrUserName,
        ),
        variant: 'error',
      });
    } else if (error) {
      setErrorMessage({
        text: intl.formatMessage(accountLoginFormMessages.serverUnavailable),
        variant: 'error',
      });
    }
  }, [error]);

  const handleLogin = async () => {
    if (isSubmitting || !isValid) {
      return;
    }
    await login({
      variables: {
        name: values[LOGIN_FIELDS_NAMES.name],
        password: values[LOGIN_FIELDS_NAMES.password],
      },
    });
  };

  const navigate = useNavigate();
  const { setJwtAccount } = useJwtStore();

  useEffect(() => {
    if (loginData) {
      setJwtAccount(loginData.account.auth.login.jwtToken);
      navigate(ROUTES_NAMES.SHOWCASE);
    }
  }, [loginData]);

  useKeyPress({
    keyCode: ['Enter', 'NumpadEnter'],
    onPress: handleLogin,
  });

  return (
    <ButtonCommon
      text="Login"
      disabled={isSubmitting || !isValid}
      height="4.6em"
      onClick={handleLogin}
      loading={loading}
    />
  );
};

export default LoginButton;
