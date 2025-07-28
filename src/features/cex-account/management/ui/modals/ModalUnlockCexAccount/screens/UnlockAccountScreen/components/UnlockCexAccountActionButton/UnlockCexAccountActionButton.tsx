import React, { FC } from 'react';
import { ButtonCommon } from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { FormattedMessage } from 'react-intl';
import { modalUnlockCexAccountMessages } from '../../../../libs/messages/modal-unlock-cex-account.messages.ts';
import { useFormikContext } from 'formik';
import { useUnlockCexAccount } from './libs/use-unlock-cex-account.hook.ts';

interface Props {
  cexAccountId: number;
}
const UnlockCexAccountActionButton: FC<Props> = ({ cexAccountId }) => {
  const { isValid, dirty } = useFormikContext();

  const { handleAddCexAccount, loading } = useUnlockCexAccount();

  return (
    <ButtonCommon
      text={<FormattedMessage {...modalUnlockCexAccountMessages.buttonTitle} />}
      disabled={!isValid || !dirty || loading}
      loading={loading}
      onClick={() => handleAddCexAccount(cexAccountId)}
    />
  );
};

export default UnlockCexAccountActionButton;
