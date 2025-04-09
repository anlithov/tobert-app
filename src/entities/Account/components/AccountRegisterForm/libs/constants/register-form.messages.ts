import { defineMessagesExtended } from '../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const registerMessages = defineMessagesExtended(
  'app.providers.YupRewriteMessagesProvider',
)({
  loginTabText: 'Login',
  registerTabText: 'Register',
  userNamePlaceholder: 'Create Username',
  passwordPlaceholder: 'Create Password',
  userNameHelperText: '6-20 Characters',
  passwordConfirmPlaceholder: 'Repeat Password',
  passwordHelperText:
    '10-30 Characters, 2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters',
  warningText: 'WARNING! Username & Password can not be changed or reset later',
  termsOfUseText: 'Click here to indicate that you have read & agree to the',
  buttonText: 'Register',

  userNameMinError: 'Username is too short (min. 6 Characters)',
  userNameMaxError: 'Username is too long (max. 20 Characters)',

  passwordMinError: 'Password is too short (min. 10 Characters)',
  passwordMaxError: 'Password is too long (min. 30 Characters)',
  passwordSecurityError:
    'Password is not secure enough ("Required: 2 uppercase letters, 1 special case letter, 2 digits, 3 lowercase letters")',
  passwordConfirmDoesNotMatchError: 'Password doesn’t match.',

  secret: 'Register Secret Code',
  secretHelper: 'Contract Admin to get your code',
});
