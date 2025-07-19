import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './AccountLoginForm.styled.ts';
import { LOGIN_FIELDS_NAMES } from './libs/constants/login-field-names.const';
import LoginButton from './components/LoginButton/LoginButton.tsx';
import LoginFields from './components/LoginFields/LoginFields';
import LoginErrorInformer from './components/LoginErrorInformer/LoginErrorInformer';
import { useAccountLoginFormValidationSchema } from './libs/hooks/use-account-login-form-validation.schema.tsx';
import Divider from '../../../../zolp/shared/ui/Divider/Divider.tsx';
import { ButtonCommon } from '../../../../zolp/shared/ui/Button/ButtonCommon/ButtonCommon.tsx';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/Button/libs/constants/button.variants.ts';
import {
  AUTH_SCREENS,
  ROUTES_NAMES_GENERATOR,
} from '../../../../shared/lib/constants/routes-names.const.ts';

const AccountLoginForm = () => {
  const [message, setMessage] = useState<{
    text: string;
    variant: 'error' | 'warning' | 'success';
  } | null>(null);

  const navigate = useNavigate();
  const validationSchema = useAccountLoginFormValidationSchema();

  return (
    <Formik
      initialValues={{
        [LOGIN_FIELDS_NAMES.name]: '',
        [LOGIN_FIELDS_NAMES.password]: '',
      }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {() => (
        <FormContainer>
          <LoginFields resetError={() => setMessage(null)} />
          <Divider height="1em" />
          {message && <LoginErrorInformer {...message} />}
          <Divider height="2em" />
          <LoginButton setErrorMessage={setMessage} />
          <Divider height="1em" />
          <ButtonCommon
            type="button"
            variant={BUTTON_VARIANTS.FLAT}
            text="Click here to register"
            onClick={() =>
              navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.register), {
                replace: true,
              })
            }
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default AccountLoginForm;
