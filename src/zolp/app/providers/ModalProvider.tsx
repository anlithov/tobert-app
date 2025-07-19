import React, { useEffect, useMemo } from 'react';
import { useModal } from '../../shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import SingleModal from '../../shared/ui/templates/Modal/SingleModal.tsx';

const ModalProvider = () => {
  const { closeModal, modals } = useModal();

  useEffect(() => {
    if (modals && Object.keys(modals).length) {
      document
        .getElementsByTagName('body')?.[0]
        .setAttribute('style', 'overflow: hidden');
    } else {
      document.getElementsByTagName('body')?.[0].setAttribute('style', '');
    }
  }, [JSON.stringify(modals)]);

  return useMemo(() => {
    if (!modals) {
      return null;
    }
    const modalsIds = Object.keys(modals);
    if (!modalsIds.length) {
      return null;
    }

    return (
      <>
        {modalsIds.map((id) => {
          const modalData = modals[id];
          return (
            <SingleModal
              key={id}
              modalData={modalData}
              onClose={() => closeModal(id)}
              modalId={id}
              setDisableBackgroundClick={() => {}}
            />
          );
        })}
      </>
    );
  }, [JSON.stringify(modals)]);
};

export default ModalProvider;
