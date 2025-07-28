import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { UNLOCK_CEX_ACCOUNT_FIELDS } from '../../../../libs/constants/unlock-cex-account-fields.ts';
import { modalUnlockCexAccountMessages } from '../../../../libs/messages/modal-unlock-cex-account.messages.ts';
import { PASSWORD_REGEX } from '../../../../../../../../../../shared/lib/constants/regexes.ts';

export const useUnlockCexAccountValidationSchema = () => {
  const intl = useIntl();

  return yup.object().shape({
    [UNLOCK_CEX_ACCOUNT_FIELDS.password]: yup
      .string()
      .min(8)
      .max(30)
      .matches(
        PASSWORD_REGEX,
        intl.formatMessage(modalUnlockCexAccountMessages.passwordRegex),
      )
      .required(),
  });
};
