import { useFormikContext } from 'formik';
import { AddCexAccountFields } from '../../../../../add-account/ui/modals/ModalAddCexAccount/libs/constants/add-cex-account-fields.ts';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { atomCexAccountNameToBeDebounced } from '../../model/cex-account-debounce-name.atom.ts';

export const useMonitorCexAccountName = () => {
  const { values, errors, dirty } =
    useFormikContext<Record<AddCexAccountFields, string>>();

  const setCexAccountName = useSetAtom(atomCexAccountNameToBeDebounced);

  useEffect(() => {
    if (dirty && !errors.name) {
      setCexAccountName(values.name);
    }
  }, [values.name]);
};
