import React, { FC } from 'react';
import AppFormikField from '../../../../../zolp/shared/ui/atoms/Fields/formik-wrapper/AppFieldFormik.tsx';
import { useMonitorCexAccountName } from './libs/hooks/use-monitor-cex-account-name.hook.ts';
import { useCheckCexAccountName } from './libs/hooks/use-check-cex-account-name.hook.ts';
import { useAtomValue } from 'jotai';
import { atomCexAccountFieldsAreLocked } from './model/cex-account-debounce-name.atom.ts';

interface Props {
  initialName?: string;
}
const CexAccountNameField: FC<Props> = ({ initialName }) => {
  useMonitorCexAccountName();

  const { errors } = useCheckCexAccountName();

  const fieldsLock = useAtomValue(atomCexAccountFieldsAreLocked);

  return (
    <AppFormikField
      formikName="name"
      placeholder="CEX Account Name"
      errors={errors}
      disabled={fieldsLock}
    />
  );
};

export default CexAccountNameField;
