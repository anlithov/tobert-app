import {
  CexAccountsListDocument,
  useChangeCexAccountNameMutation,
} from '../../../../../../../../../../../__graphql/generated.ts';
import { useFormikContext } from 'formik';
import { useSetAtom } from 'jotai';
import {
  useCexJwtsStore,
  useJwtStore,
} from '../../../../../../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import { atomChangeCexAccountNameScreen } from '../../../../../model/position-deposit-manager.atoms.ts';
import { useEffect } from 'react';
import { UNLOCK_CEX_ACCOUNT_SCREENS } from '../../../../../libs/constants/unlock-cex-accounts-tabs.const.ts';
import { UnlockCexAccountFields } from '../../../../../libs/constants/unlock-cex-account-fields.ts';

export const useChangeCexAccountName = (cexAccountId: number) => {
  const { values } = useFormikContext<Record<UnlockCexAccountFields, string>>();
  const setScreen = useSetAtom(atomChangeCexAccountNameScreen);

  const { jwtAccount } = useJwtStore();
  const { getJwtCexAccount } = useCexJwtsStore();
  const [changeCexAccountName, { data, loading }] =
    useChangeCexAccountNameMutation({
      context: {
        headers: {
          jwt_account: jwtAccount,
          jwt_cex_account: getJwtCexAccount(cexAccountId),
        },
      },
      refetchQueries: [CexAccountsListDocument],
    });

  useEffect(() => {
    const loginResp = data?.cexAccount?.manage?.changeName?.cexAccountId;

    if (loginResp) {
      setScreen(UNLOCK_CEX_ACCOUNT_SCREENS.SUCCESS);
    }
  }, [data]);

  const handleChange = async () => {
    await changeCexAccountName({
      variables: {
        input: {
          name: values.name,
        },
      },
    });
  };

  return {
    handleChange,
    loading,
  };
};
