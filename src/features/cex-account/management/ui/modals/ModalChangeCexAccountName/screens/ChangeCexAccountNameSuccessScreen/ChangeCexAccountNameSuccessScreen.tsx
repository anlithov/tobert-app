import React, { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { atomChangeCexAccountNameModalId } from '../../model/position-deposit-manager.atoms.ts';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import StatusCard from '../../../../../../../../zolp/shared/ui/templates/StatusCard/StatusCard.tsx';
import SuccessIcon from '../../../../../../../../zolp/shared/ui/atoms/IconsThemed/Success/SuccessIcon.tsx';
import { FormattedMessage } from 'react-intl';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { modalChangeCexAccountNameMessages } from '../../libs/messages/modal-change-cex-account-name.messages.ts';

const ChangeCexAccountNameSuccessScreen = () => {
  const { closeModal } = useModal();
  const modalId = useAtomValue(atomChangeCexAccountNameModalId);

  useEffect(() => {
    if (!modalId) {
      return;
    }
    setTimeout(() => {
      closeModal(modalId);
    }, 1000);
  }, []);

  return (
    <>
      <Divider height="2em" />
      <StatusCard
        statusSrc={<SuccessIcon />}
        title={
          <FormattedMessage
            {...modalChangeCexAccountNameMessages.successTitle}
          />
        }
        subTitle={
          <FormattedMessage
            {...modalChangeCexAccountNameMessages.successDescription}
          />
        }
      />
      <Divider height="2em" />
    </>
  );
};

export default ChangeCexAccountNameSuccessScreen;
