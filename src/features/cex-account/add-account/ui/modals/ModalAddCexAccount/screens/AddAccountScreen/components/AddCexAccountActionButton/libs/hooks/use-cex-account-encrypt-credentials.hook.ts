import { cexKeyEncryption } from '../../../../../../../../../libs/helpers/cex-encryption.helper.ts';
import { useFormikContext } from 'formik';
import { AddCexAccountFields } from '../../../../../../libs/constants/add-cex-account-fields.ts';

export const useCexAccountEncryptCredentials = () => {
  const { values } = useFormikContext<Record<AddCexAccountFields, string>>();

  return async () => {
    const res = await cexKeyEncryption.encryptKeys(
      values.apiKey,
      values.apiSecret,
      values.password,
    );

    return res;
  };
};
