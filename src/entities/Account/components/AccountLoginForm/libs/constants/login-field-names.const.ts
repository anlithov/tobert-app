export const LOGIN_FIELDS_NAMES = {
  name: 'name',
  password: 'password',
} as const;
export type LoginFieldsNames =
  (typeof LOGIN_FIELDS_NAMES)[keyof typeof LOGIN_FIELDS_NAMES];
