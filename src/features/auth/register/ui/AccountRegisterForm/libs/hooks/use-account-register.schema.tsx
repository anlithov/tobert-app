import * as yup from 'yup';
import { registerMessages } from '../constants/register-form.messages.ts';
import { REGISTER_FIELDS_NAMES } from '../constants/register-fields.const.ts';
import { useIntl } from 'react-intl';
import { useCheckAccountNickAvailabilityMutation } from '../../../../../../../__graphql/generated.ts';

export const useAccountRegisterSchema = () => {
  const intl = useIntl();

  const [checkAccountNickAvailabilityMutation] =
    useCheckAccountNickAvailabilityMutation();

  return yup.object().shape({
    [REGISTER_FIELDS_NAMES.name]: yup
      .string()
      .required()
      .min(6, intl.formatMessage(registerMessages.userNameMinError))
      .max(20, intl.formatMessage(registerMessages.userNameMaxError))
      .test(
        'check-name',
        intl.formatMessage(registerMessages.userNameIsNotAvailable),
        async (value) => {
          if (!value || value.length < 6 || value.length > 20) {
            return true; // Let the other validations handle the error
          }

          const { data } = await checkAccountNickAvailabilityMutation({
            variables: { name: value },
          });

          return !!data?.account?.general?.checkNameAvailability?.isAvailable;
        },
      ),
    [REGISTER_FIELDS_NAMES.password]: yup
      .string()
      .min(8, intl.formatMessage(registerMessages.passwordMinError))
      .max(30, intl.formatMessage(registerMessages.passwordMaxError))
      .required()
      .matches(
        /(?=(?:.*[a-z]){3,})(?=(?:.*[A-Z]){2,})(?=(?:.*\d){2,})(?=.*[!@#$%^&*()\-_+\.]).{8,30}/,
        intl.formatMessage(registerMessages.passwordSecurityError),
      ),
    [REGISTER_FIELDS_NAMES.passwordConfirm]: yup
      .string()
      .required()
      .oneOf(
        [yup.ref(REGISTER_FIELDS_NAMES.password), ''],
        intl.formatMessage(registerMessages.passwordConfirmDoesNotMatchError),
      ),
  });
};
