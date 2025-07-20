import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { accountLoginFormMessages } from '../messages/account-login-form.messages.ts';
import { LOGIN_FIELDS_NAMES } from '../constants/login-field-names.const.ts';

export const useAccountLoginFormValidationSchema = () => {
  const intl = useIntl();

  return yup.object().shape({
    [LOGIN_FIELDS_NAMES.name]: yup.string().required(),
    [LOGIN_FIELDS_NAMES.password]: yup
      .string()
      .matches(
        /(?=(?:.*[a-z]){3,})(?=(?:.*[A-Z]){2,})(?=(?:.*\d){2,})(?=.*[!@#$%^&*()\-_+\.]).{8,30}/,
        intl.formatMessage(accountLoginFormMessages.passwordConditionsRequired),
      )
      .required(),
  });
};
