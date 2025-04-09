import React, { FC } from 'react';
import { LOGIN_FIELDS_NAMES } from '../../libs/constants/login-field-names.const';
import Divider from '../../../../../../zolp/shared/ui/Divider/Divider.tsx';
import AppFormikField from '../../../../../../zolp/shared/ui/Fields/formik-wrapper/AppFieldFormik.tsx';
import { accountLoginFormMessages } from '../../libs/messages/account-login-form.messages.ts';
import { FormattedMessage } from 'react-intl';
import { FIELD_VARIANTS } from '../../../../../../zolp/shared/ui/Fields/libs/constants/button.variants.ts';
import { MdAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

interface Props {
  resetError: () => void;
}
const LoginFields: FC<Props> = ({ resetError }) => {
  return (
    <>
      <AppFormikField
        formikName={LOGIN_FIELDS_NAMES.name}
        placeholder={
          <FormattedMessage {...accountLoginFormMessages.userNamePlaceholder} />
        }
        height="5.6em"
        variant={FIELD_VARIANTS.OUTLINED}
        onChange={() => resetError()}
        $leftElement={<MdAccountCircle size="2em" />}
      />
      <Divider height="1em" />
      <AppFormikField
        formikName={LOGIN_FIELDS_NAMES.password}
        placeholder={
          <FormattedMessage {...accountLoginFormMessages.passwordPlaceholder} />
        }
        height="5.6em"
        variant={FIELD_VARIANTS.OUTLINED}
        type="password"
        $leftElement={<RiLockPasswordLine size="2em" />}
        onChange={() => resetError()}
      />
    </>
  );
};

export default LoginFields;
