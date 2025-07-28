import { defineMessagesExtended } from '../../../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const modalChangeCexAccountNameMessages = defineMessagesExtended(
  'modal.ChangeCexAccountName',
)({
  addTitle: 'Change CEX name',
  addDescription: 'Modify existing CEX account name',
  successTitle: 'Success',
  successDescription: 'CEX account name has been changed successfully',
  buttonTitle: 'Apply',
  yourCexAccountName: 'Your CEX account name',
  // validation
  nameRegex: 'Only digits, letters and spaces between',
});
