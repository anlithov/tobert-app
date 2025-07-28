import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { accountLoginFormMessages } from '../messages/account-login-form.messages.ts';
import { LOGIN_FIELDS_NAMES } from '../constants/login-field-names.const.ts';
import { PASSWORD_REGEX } from '../../../../../../../shared/lib/constants/regexes.ts';

export const useAccountLoginFormValidationSchema = () => {
  const intl = useIntl();

  return yup.object().shape({
    [LOGIN_FIELDS_NAMES.name]: yup.string().required(),
    [LOGIN_FIELDS_NAMES.password]: yup
      .string()
      .matches(
        PASSWORD_REGEX,
        intl.formatMessage(accountLoginFormMessages.passwordConditionsRequired),
      )
      .required(),
  });
};
