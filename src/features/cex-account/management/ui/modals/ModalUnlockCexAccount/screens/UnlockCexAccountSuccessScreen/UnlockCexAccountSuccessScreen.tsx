import React, { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { atomUnlockCexAccountModalId } from '../../libs/store/position-deposit-manager.atoms.ts';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import StatusCard from '../../../../../../../../zolp/shared/ui/templates/StatusCard/StatusCard.tsx';
import SuccessIcon from '../../../../../../../../zolp/shared/ui/atoms/IconsThemed/Success/SuccessIcon.tsx';
import { FormattedMessage } from 'react-intl';
import { modalUnlockCexAccountMessages } from '../../libs/messages/modal-unlock-cex-account.messages.ts';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';

const UnlockCexAccountSuccessScreen = () => {
  const { closeModal } = useModal();
  const modalId = useAtomValue(atomUnlockCexAccountModalId);

  useEffect(() => {
    if (!modalId) {
      return;
    }
    setTimeout(() => {
      closeModal(modalId);
    }, 2000);
  }, []);

  return (
    <>
      <Divider height="2em" />
      <StatusCard
        statusSrc={<SuccessIcon />}
        title={
          <FormattedMessage {...modalUnlockCexAccountMessages.successTitle} />
        }
        subTitle={
          <FormattedMessage
            {...modalUnlockCexAccountMessages.successDescription}
          />
        }
      />
      <Divider height="2em" />
    </>
  );
};

export default UnlockCexAccountSuccessScreen;
