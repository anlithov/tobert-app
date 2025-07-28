import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { ADD_CEX_ACCOUNT_FIELDS } from '../../../../libs/constants/add-cex-account-fields.ts';
import { modalAddCexAccountMessages } from '../../../../libs/messages/modal-add-cex-account.messages.ts';
import { PASSWORD_REGEX } from '../../../../../../../../../../shared/lib/constants/regexes.ts';

export const useAddCexAccountValidationSchema = () => {
  const intl = useIntl();

  return yup.object().shape({
    [ADD_CEX_ACCOUNT_FIELDS.name]: yup
      .string()
      .min(6)
      .max(20)
      .matches(
        /^[A-Za-z0-9](?:[A-Za-z0-9 ]*[A-Za-z0-9])?$/,
        intl.formatMessage(modalAddCexAccountMessages.nameRegex),
      )
      .required(),
    [ADD_CEX_ACCOUNT_FIELDS.API_KEY]: yup.string().length(64).required(),
    [ADD_CEX_ACCOUNT_FIELDS.API_SECRET]: yup.string().length(64).required(),
    [ADD_CEX_ACCOUNT_FIELDS.password]: yup
      .string()
      .min(8)
      .max(30)
      .matches(
        PASSWORD_REGEX,
        intl.formatMessage(modalAddCexAccountMessages.passwordRegex),
      )
      .required(),
    [ADD_CEX_ACCOUNT_FIELDS.totp]: yup.string(),
  });
};
