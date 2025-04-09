import { defineMessagesExtended } from '../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const accountLoginFormMessages = defineMessagesExtended(
  'messages.accountLogin',
)({
  loginTabText: 'Login',
  registerTabText: 'Register',
  userNamePlaceholder: 'Your Username',
  passwordPlaceholder: 'Your Password',
  buttonText: 'Login',
  doNotHaveAccountButtonText: 'Don’t have a free account? Click here',
  invalidPassOrUserName: 'The provided credentials are not valid.',
  serverUnavailable: 'Something went wrong. Try again later.',
  //
  passwordConditionsRequired:
    'Required: 2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
});
