import React, { FC, useState } from 'react';
import { Formik } from 'formik';
import { FormContainer } from './AccountRegisterForm.styled.ts';
import { REGISTER_FIELDS_NAMES } from './libs/constants/register-fields.const';
import { useAccountRegisterSchema } from './libs/hooks/use-account-register.schema.tsx';
import RegisterFields from './components/RegisterFields/RegisterFields';
import RegisterErrorInformer from './components/RegisterErrorInformer/RegisterErrorInformer';
import RegisterButton from './components/RegisterButton/RegisterButton';
import Divider from '../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';

const AccountRegisterForm: FC = () => {
  const [errorMessage, setErrorMessage] = useState<{
    text: string;
    variant: 'error' | 'warning';
  } | null>(null);
  const validationSchema = useAccountRegisterSchema();

  return (
    <>
      <Formik
        initialValues={{
          [REGISTER_FIELDS_NAMES.name]: '',
          [REGISTER_FIELDS_NAMES.password]: '',
          [REGISTER_FIELDS_NAMES.passwordConfirm]: '',
          [REGISTER_FIELDS_NAMES.registerCode]: '',
        }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {() => (
          <FormContainer>
            <RegisterFields resetMessage={() => setErrorMessage(null)} />
            <Divider height="0.5em" />
            {errorMessage ? (
              <RegisterErrorInformer {...errorMessage} />
            ) : (
              <Divider height="1em" />
            )}
            <Divider height="0.5em" />
            <RegisterButton setErrorMessage={setErrorMessage} />
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default AccountRegisterForm;
