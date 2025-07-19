import React, { FC, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { RegisterValues } from '../../libs/types/register.types.ts';
import { useKeyPress } from '../../../../../shared/lib/hooks/use-key-press.hook.ts';
import { ButtonCommon } from '../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { REGISTER_FIELDS_NAMES } from '../../libs/constants/register-fields.const.ts';
import { accountRegisterFormMessages } from '../../libs/messages/account-login-form.messages.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAMES } from '../../../../../shared/lib/constants/routes-names.const.ts';
import { useAccountRegisterMutation } from '../../../../../__graphql/generated.ts';
import { useJwtStore } from '../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';

interface Props {
  setErrorMessage: (opts: {
    text: string;
    variant: 'error' | 'warning';
  }) => void;
}
const RegisterButton: FC<Props> = ({ setErrorMessage }) => {
  const { isSubmitting, isValid, values } = useFormikContext<RegisterValues>();

  const [register, { error, data, loading }] = useAccountRegisterMutation();

  useEffect(() => {
    if (error) {
      if (error?.message.includes('Account')) {
        setErrorMessage({
          text: accountRegisterFormMessages.invalidPassOrUserName,
          variant: 'error',
        });
      } else if (error?.message.includes('mainte')) {
        setErrorMessage({
          text: accountRegisterFormMessages.underMaintenance,
          variant: 'warning',
        });
      } else {
        setErrorMessage({
          text: accountRegisterFormMessages.serverUnavailable,
          variant: 'error',
        });
      }
    }
  }, [error]);

  const navigate = useNavigate();
  const { setJwtAccount } = useJwtStore();

  useEffect(() => {
    if (data) {
      setJwtAccount(data.account.auth.register.jwtToken);
      navigate(ROUTES_NAMES.SHOWCASE);
    }
  }, [data]);

  const handleRegister = async () => {
    if (isSubmitting || !isValid) {
      return;
    }
    await register({
      variables: {
        name: values[REGISTER_FIELDS_NAMES.name],
        password: values[REGISTER_FIELDS_NAMES.password],
        passwordConfirm: values[REGISTER_FIELDS_NAMES.passwordConfirm],
        registerCode: values[REGISTER_FIELDS_NAMES.registerCode],
      },
    });
  };

  useKeyPress({
    keyCode: ['Enter', 'NumpadEnter'],
    onPress: handleRegister,
  });

  return (
    <ButtonCommon
      type="submit"
      text="Register"
      height="4.6em"
      disabled={isSubmitting || !isValid}
      loading={loading}
      onClick={handleRegister}
    />
  );
};

export default RegisterButton;
