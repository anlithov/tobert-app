import React, { FC, useState } from 'react';
import ModalWrapper from './ui/ModalWrapper/ModalWrapper.tsx';
import { ModalData, ModalProps } from './lib/hook/use-modal.hook.ts';

interface Props extends ModalProps {
  modalData: ModalData;
}
const SingleModal: FC<Props> = ({
  modalData: { component, props, isShow, onRewriteClickBackground, ...other },
  onClose,
  modalId,
}) => {
  const [disableBackgroundClick, setDisableBackgroundClick] = useState(false);
  const ModalBody = component;

  const active = isShow === undefined ? true : isShow;

  return (
    <ModalWrapper
      {...other}
      onRewriteClickBackground={
        disableBackgroundClick ? () => {} : onRewriteClickBackground
      }
      isShow={active}
      closeModal={onClose}
    >
      <ModalBody
        {...props}
        onClose={onClose}
        modalId={modalId}
        setDisableBackgroundClick={setDisableBackgroundClick}
      />
    </ModalWrapper>
  );
};

export default React.memo(SingleModal);
