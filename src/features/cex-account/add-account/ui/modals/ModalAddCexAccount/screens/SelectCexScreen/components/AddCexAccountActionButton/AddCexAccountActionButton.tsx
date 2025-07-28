import React from 'react';
import { ButtonCommon } from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { FormattedMessage } from 'react-intl';
import { modalAddCexAccountMessages } from '../../../../libs/messages/modal-add-cex-account.messages.ts';
import { useFormikContext } from 'formik';
import { useAtomValue } from 'jotai';
import {
  atomCexAccountNameAvailableButton,
  atomCexAccountNameIsDebouncing,
} from '../../libs/store/cex-accoiunt-debounce-name.atom.ts';
import { useAddCexAccount } from './libs/use-add-cex-account.hook.ts';

const AddCexAccountActionButton = () => {
  const { isValid, dirty } = useFormikContext();
  const buttonAvailable = useAtomValue(atomCexAccountNameAvailableButton);
  const isDebouncingName = useAtomValue(atomCexAccountNameIsDebouncing);

  const { handleAddCexAccount, loading } = useAddCexAccount();

  return (
    <ButtonCommon
      text={<FormattedMessage {...modalAddCexAccountMessages.buttonTitle} />}
      disabled={!isValid || !dirty || !buttonAvailable || isDebouncingName}
      loading={loading}
      onClick={handleAddCexAccount}
    />
  );
};

export default AddCexAccountActionButton;
