import React, { FC } from 'react';
import { ButtonCommon } from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';
import { useChangeCexAccountName } from './libs/use-change-cex-account-name.hook.ts';
import { modalChangeCexAccountNameMessages } from '../../../../libs/messages/modal-change-cex-account-name.messages.ts';
import { useAtomValue } from 'jotai';
import {
  atomCexAccountNameAvailableButton,
  atomCexAccountNameIsDebouncing,
} from '../../../../../../../../shared/ui/CexAccountNameField/model/cex-account-debounce-name.atom.ts';

interface Props {
  cexAccountId: number;
}
const ChangeCexAccountNameActionButton: FC<Props> = ({ cexAccountId }) => {
  const { isValid, dirty } = useFormikContext();

  const { handleChange, loading } = useChangeCexAccountName(cexAccountId);

  const buttonAvailable = useAtomValue(atomCexAccountNameAvailableButton);
  const isDebouncingName = useAtomValue(atomCexAccountNameIsDebouncing);

  return (
    <ButtonCommon
      text={
        <FormattedMessage {...modalChangeCexAccountNameMessages.buttonTitle} />
      }
      disabled={
        !isValid || !dirty || loading || !buttonAvailable || isDebouncingName
      }
      loading={loading}
      onClick={handleChange}
    />
  );
};

export default ChangeCexAccountNameActionButton;
