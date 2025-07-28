import React, { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { atomCreateCexAccountModalId } from '../../model/position-deposit-manager.atoms.ts';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import StatusCard from '../../../../../../../../zolp/shared/ui/templates/StatusCard/StatusCard.tsx';
import SuccessIcon from '../../../../../../../../zolp/shared/ui/atoms/IconsThemed/Success/SuccessIcon.tsx';
import { FormattedMessage } from 'react-intl';
import { modalAddCexAccountMessages } from '../../libs/messages/modal-add-cex-account.messages.ts';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';

const AddCexAccountSuccessScreen = () => {
  const { closeModal } = useModal();
  const modalId = useAtomValue(atomCreateCexAccountModalId);

  useEffect(() => {
    if (!modalId) {
      return;
    }
    setTimeout(() => {
      closeModal(modalId);
    }, 3000);
  }, []);

  return (
    <>
      <Divider height="2em" />
      <StatusCard
        statusSrc={<SuccessIcon />}
        title={
          <FormattedMessage {...modalAddCexAccountMessages.successTitle} />
        }
        subTitle={
          <FormattedMessage
            {...modalAddCexAccountMessages.successDescription}
          />
        }
      />
      <Divider height="2em" />
    </>
  );
};

export default AddCexAccountSuccessScreen;
