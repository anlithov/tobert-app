import React, { FC, useEffect } from 'react';
import {
  atomCreateCexAccountModalId,
  atomCreateCexAccountScreen,
} from './model/position-deposit-manager.atoms.ts';
import AddCexAccountSteps from './screens/AddCexAccountSteps.tsx';
import {
  ModalProps,
  useModal,
} from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { useAtom, useSetAtom } from 'jotai';
import { ModalContainer } from '../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import ModalHeaderTitles from '../../../../../../zolp/shared/ui/molecules/ModalHeader/base/ModalHeaderTitles.tsx';
import ModalHeader from '../../../../../../zolp/shared/ui/molecules/ModalHeader/base/ModalHeader.tsx';
import { ADD_CEX_ACCOUNT_TITLES } from './libs/constants/add-cex-account-titles.tsx';
import { ADD_CEX_ACCOUNT_GO_BACKS } from './libs/constants/add-cex-accounts-tabs.const.ts';

const ModalAddCexAccountContent: FC<ModalProps> = ({ modalId }) => {
  const setModalId = useSetAtom(atomCreateCexAccountModalId);

  useEffect(() => {
    setModalId(modalId);
  }, []);

  const [screen, setScreen] = useAtom(atomCreateCexAccountScreen);
  const titles = ADD_CEX_ACCOUNT_TITLES[screen];

  const { closeModal } = useModal();
  const onCrossClick = async () => {
    if (modalId) {
      await closeModal(modalId);
    }
  };

  const goBack = async () => {
    const goBackFc = ADD_CEX_ACCOUNT_GO_BACKS?.[screen];
    if (goBackFc) {
      setScreen(goBackFc);
    } else {
      await closeModal(modalId);
    }
  };

  return (
    <ModalContainer width="46em">
      {titles && (
        <ModalHeader onCrossClick={onCrossClick} onGoBack={goBack}>
          <ModalHeaderTitles title={titles.title} subTitle={titles.subTitle} />
        </ModalHeader>
      )}
      <AddCexAccountSteps />
    </ModalContainer>
  );
};

export default ModalAddCexAccountContent;
