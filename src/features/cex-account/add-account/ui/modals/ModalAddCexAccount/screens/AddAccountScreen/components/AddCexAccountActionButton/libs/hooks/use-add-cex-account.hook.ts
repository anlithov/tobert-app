import { useCexAccountEncryptCredentials } from './use-cex-account-encrypt-credentials.hook.ts';
import {
  CexAccountsListDocument,
  CexName,
  useCreateCexAccountMutation,
} from '../../../../../../../../../../../../__graphql/generated.ts';
import { useFormikContext } from 'formik';
import { AddCexAccountFields } from '../../../../../../libs/constants/add-cex-account-fields.ts';
import { useSetAtom } from 'jotai';
import { atomCexAccountFieldsAreLocked } from '../../../../../../../../../../shared/ui/CexAccountNameField/model/cex-account-debounce-name.atom.ts';
import {
  useCexJwtsStore,
  useJwtStore,
} from '../../../../../../../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import { atomCreateCexAccountScreen } from '../../../../../../model/position-deposit-manager.atoms.ts';
import { useEffect } from 'react';
import { ADD_CEX_ACCOUNT_SCREENS } from '../../../../../../libs/constants/add-cex-accounts-tabs.const.ts';

export const useAddCexAccount = () => {
  const { values } = useFormikContext<Record<AddCexAccountFields, string>>();
  const setScreen = useSetAtom(atomCreateCexAccountScreen);

  const { jwtAccount } = useJwtStore();
  const { setJwtCexAccount } = useCexJwtsStore();
  const [createCexAccount, { data, loading, error }] =
    useCreateCexAccountMutation({
      context: {
        headers: {
          jwt_account: jwtAccount,
        },
      },
      refetchQueries: [CexAccountsListDocument],
    });

  useEffect(() => {
    const createdResp = data?.cexAccount?.manage?.create;
    if (createdResp?.jwtToken && createdResp?.meta?.cexAccountId) {
      setJwtCexAccount(createdResp.meta.cexAccountId, createdResp.jwtToken);
      setScreen(ADD_CEX_ACCOUNT_SCREENS.SUCCESS);
    }
  }, [data]);

  const encryptedCreds = useCexAccountEncryptCredentials();

  const setFieldsLock = useSetAtom(atomCexAccountFieldsAreLocked);

  const handleAddCexAccount = async () => {
    setFieldsLock(true);

    const encryptedCredsRes = await encryptedCreds();

    await createCexAccount({
      variables: {
        input: {
          name: values.name,
          cexName: CexName.Binance,
          cexAccountPassword: values.password,
          encryptedApiKey: encryptedCredsRes.encrypted_api_key,
          encryptedApiSecret: encryptedCredsRes.encrypted_api_secret,
          ivHex: encryptedCredsRes.iv_hex,
          saltHex: encryptedCredsRes.salt_hex,
        },
      },
    });

    setFieldsLock(false);
  };

  return {
    handleAddCexAccount,
    loading,
  };
};
