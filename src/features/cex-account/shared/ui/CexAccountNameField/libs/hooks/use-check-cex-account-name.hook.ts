import { useCheckCexAccountNameMutation } from '../../../../../../../__graphql/generated.ts';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  atomCexAccountNameAvailableButton,
  atomCexAccountNameDebounced,
} from '../../model/cex-account-debounce-name.atom.ts';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { AddCexAccountFields } from '../../../../../add-account/ui/modals/ModalAddCexAccount/libs/constants/add-cex-account-fields.ts';
import { useJwtStore } from '../../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';

export const useCheckCexAccountName = (
  initialName?: string,
): {
  errors: string[];
} => {
  const cexName = useAtomValue(atomCexAccountNameDebounced);

  const { jwtAccount } = useJwtStore();
  const [checkCexAccountName, { data, loading }] =
    useCheckCexAccountNameMutation({
      context: {
        headers: {
          jwt_account: jwtAccount,
        },
      },
    });

  const ok =
    data?.cexAccount?.general?.checkNameAvailability?.isAvailable ===
      undefined ||
    !!data?.cexAccount?.general?.checkNameAvailability?.isAvailable;

  const setButtonLock = useSetAtom(atomCexAccountNameAvailableButton);
  useEffect(() => {
    setButtonLock(loading ? false : ok);
  }, [data]);

  const { errors, dirty } =
    useFormikContext<Record<AddCexAccountFields, string>>();

  useEffect(() => {
    if (initialName === cexName || !dirty || !!errors.name) {
      return;
    }
    checkCexAccountName({
      variables: {
        name: cexName,
      },
    });
  }, [cexName]);

  return {
    errors: ok ? [] : ['Name already in use'],
  };
};
