import {
  CexAccountsListDocument,
  useLoginCexAccountMutation,
} from '../../../../../../../../../../../__graphql/generated.ts';
import { useFormikContext } from 'formik';
import { useSetAtom } from 'jotai';
import {
  useCexJwtsStore,
  useJwtStore,
} from '../../../../../../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import { atomUnlockCexAccountScreen } from '../../../../../libs/store/position-deposit-manager.atoms.ts';
import { useEffect } from 'react';
import { UNLOCK_CEX_ACCOUNT_SCREENS } from '../../../../../libs/constants/unlock-cex-accounts-tabs.const.ts';
import { UnlockCexAccountFields } from '../../../../../libs/constants/unlock-cex-account-fields.ts';

export const useUnlockCexAccount = () => {
  const { values } = useFormikContext<Record<UnlockCexAccountFields, string>>();
  const setScreen = useSetAtom(atomUnlockCexAccountScreen);

  const { jwtAccount } = useJwtStore();
  const { setJwtCexAccount } = useCexJwtsStore();
  const [loginCexAccount, { data, loading }] = useLoginCexAccountMutation({
    context: {
      headers: {
        jwt_account: jwtAccount,
      },
    },
    refetchQueries: [CexAccountsListDocument],
  });

  useEffect(() => {
    const loginResp = data?.cexAccount?.auth?.login;

    if (loginResp?.jwtToken && loginResp?.meta?.cexAccountId) {
      setJwtCexAccount(loginResp.meta.cexAccountId, loginResp.jwtToken);
      setScreen(UNLOCK_CEX_ACCOUNT_SCREENS.SUCCESS);
    }
  }, [data]);

  const handleAddCexAccount = async (cexAccountId: number) => {
    await loginCexAccount({
      variables: {
        input: {
          cexAccountId,
          cexAccountPassword: values.password,
        },
      },
    });
  };

  return {
    handleAddCexAccount,
    loading,
  };
};
