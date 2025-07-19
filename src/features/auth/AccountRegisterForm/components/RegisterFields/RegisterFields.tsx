import React, { FC } from 'react';
import { REGISTER_FIELDS_NAMES } from '../../libs/constants/register-fields.const.ts';
import { registerMessages } from '../../libs/constants/register-form.messages.ts';
import AppFormikField from '../../../../../zolp/shared/ui/atoms/Fields/formik-wrapper/AppFieldFormik.tsx';
import { BUTTON_VARIANTS } from '../../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';
import { FormattedMessage, useIntl } from 'react-intl';
import { FIELD_VARIANTS } from '../../../../../zolp/shared/ui/atoms/Fields/libs/constants/button.variants.ts';

interface Props {
  resetMessage: () => void;
}
const RegisterFields: FC<Props> = ({ resetMessage }) => {
  const intl = useIntl();

  return (
    <>
      <AppFormikField
        formikName={REGISTER_FIELDS_NAMES.name}
        placeholder={
          <FormattedMessage {...registerMessages.userNamePlaceholder} />
        }
        height="5.6em"
        variant={FIELD_VARIANTS.OUTLINED}
        autoComplete="off"
        helperText={intl.formatMessage(registerMessages.userNameHelperText)}
        onChange={() => resetMessage()}
      />
      <AppFormikField
        formikName={REGISTER_FIELDS_NAMES.password}
        placeholder={
          <FormattedMessage {...registerMessages.passwordPlaceholder} />
        }
        height="5.6em"
        variant={FIELD_VARIANTS.OUTLINED}
        type="password"
        autoComplete="off"
        helperText={intl.formatMessage(registerMessages.passwordHelperText)}
        onChange={() => resetMessage()}
      />
      <AppFormikField
        formikName={REGISTER_FIELDS_NAMES.passwordConfirm}
        placeholder={
          <FormattedMessage {...registerMessages.passwordConfirmPlaceholder} />
        }
        height="5.6em"
        autoComplete="off"
        variant={BUTTON_VARIANTS.OUTLINED}
        type="password"
        onChange={() => resetMessage()}
      />
      <AppFormikField
        formikName={REGISTER_FIELDS_NAMES.registerCode}
        placeholder={<FormattedMessage {...registerMessages.secret} />}
        height="5.6em"
        autoComplete="off"
        variant={BUTTON_VARIANTS.OUTLINED}
        helperText={intl.formatMessage(registerMessages.secretHelper)}
        type="password"
        onChange={() => resetMessage()}
      />
    </>
  );
};

export default RegisterFields;
