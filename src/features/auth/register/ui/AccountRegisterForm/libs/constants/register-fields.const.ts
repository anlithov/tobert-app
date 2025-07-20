export const REGISTER_FIELDS_NAMES = {
  name: 'registerUsername',
  password: 'registerPassword',
  passwordConfirm: 'passwordConfirm',
  registerCode: 'secret',
} as const;
export type RegisterFieldsNames =
  (typeof REGISTER_FIELDS_NAMES)[keyof typeof REGISTER_FIELDS_NAMES];
