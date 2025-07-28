import { defineMessagesExtended } from '../../../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const modalAddCexAccountMessages = defineMessagesExtended(
  'modal.AddCexAccount',
)({
  chooseTitle: 'Choose CEX account',
  chooseDescription: 'Select the CEX account you want to add',
  addTitle: 'Add CEX account',
  addDescription: 'Fill in CEX account details',
  successTitle: 'Success',
  successDescription: 'CEX account has been added successfully',
  buttonTitle: 'Add CEX account',
  // validation
  nameRegex: 'Only digits, letters and spaces between',
  passwordRegex:
    'Required: 2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
  passwordHelper:
    '2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
  //
  cexAccountCreds: 'Your CEX Account credentials',
  apiCreds: 'Your API credentials',
  //
  namePlaceholder: 'Username',
  passwordPlaceholder: 'Password',
  apiKeyPlaceholder: 'API Key',
  apiSecretPlaceholder: 'API Secret',
  encryptionHint:
    '*API credentials are sent to the server in the encrypted form',
});
