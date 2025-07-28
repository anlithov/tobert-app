import { defineMessagesExtended } from '../../../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const modalUnlockCexAccountMessages = defineMessagesExtended(
  'modal.UnlockCexAccount',
)({
  buttonTitle: 'Unlock',
  successTitle: 'Success',
  successDescription: 'CEX account has been unlocked successfully',
  passwordRegex:
    'Required: 2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
  passwordHelper:
    '2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
});
