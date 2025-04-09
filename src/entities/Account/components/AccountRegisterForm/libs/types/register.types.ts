import { REGISTER_FIELDS_NAMES } from '../constants/register-fields.const.ts';

export interface RegisterValues {
  [REGISTER_FIELDS_NAMES.name]: string;
  [REGISTER_FIELDS_NAMES.password]: string;
  [REGISTER_FIELDS_NAMES.passwordConfirm]: string;
  [REGISTER_FIELDS_NAMES.registerCode]: string;
}
