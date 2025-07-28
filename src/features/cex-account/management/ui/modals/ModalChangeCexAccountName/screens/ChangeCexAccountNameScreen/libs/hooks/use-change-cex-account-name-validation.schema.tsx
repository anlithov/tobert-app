import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { CHANGE_CEX_ACCOUNT_NAME_FIELDS } from '../../../../libs/constants/unlock-cex-account-fields.ts';
import { modalChangeCexAccountNameMessages } from '../../../../libs/messages/modal-change-cex-account-name.messages.ts';

export const useChangeCexAccountNameValidationSchema = () => {
  const intl = useIntl();

  return yup.object().shape({
    [CHANGE_CEX_ACCOUNT_NAME_FIELDS.name]: yup
      .string()
      .min(6)
      .max(20)
      .matches(
        /^[A-Za-z0-9](?:[A-Za-z0-9 ]*[A-Za-z0-9])?$/,
        intl.formatMessage(modalChangeCexAccountNameMessages.nameRegex),
      )
      .required(),
  });
};
