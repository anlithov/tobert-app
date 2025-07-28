import React, { FC, useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  atomChangeCexAccountNameModalId,
  atomChangeCexAccountNameScreen,
} from './model/position-deposit-manager.atoms.ts';
import ReplacerDelayed from '../../../../../../zolp/shared/ui/molecules/ReplacerDelayed/ReplacerDelayed.tsx';
import { Container } from './ModalChangeCexAccountName.styled.ts';
import { UNLOCK_CEX_ACCOUNT_SCREENS } from './libs/constants/unlock-cex-accounts-tabs.const.ts';
import ChangeCexAccountNameScreen from './screens/ChangeCexAccountNameScreen/ChangeCexAccountNameScreen.tsx';
import ChangeCexAccountNameSuccessScreen from './screens/ChangeCexAccountNameSuccessScreen/ChangeCexAccountNameSuccessScreen.tsx';
import { ModalContainer } from '../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import { ModalUnlockCexAccountProps } from './ModalChangeCexAccountName.tsx';

const ModalChangeCexAccountNameContent: FC<ModalUnlockCexAccountProps> = ({
  modalId,
  name,
  cexAccountId,
}) => {
  const setModalId = useSetAtom(atomChangeCexAccountNameModalId);

  useEffect(() => {
    setModalId(modalId);
  }, []);

  const screen = useAtomValue(atomChangeCexAccountNameScreen);

  return (
    <ModalContainer width="41em">
      <ReplacerDelayed
        keySelected={screen}
        ContainerComponent={Container}
        components={{
          [UNLOCK_CEX_ACCOUNT_SCREENS.PASSWORD_FORM]: (
            <ChangeCexAccountNameScreen
              name={name}
              cexAccountId={cexAccountId}
              modalId={modalId}
            />
          ),
          [UNLOCK_CEX_ACCOUNT_SCREENS.SUCCESS]: (
            <ChangeCexAccountNameSuccessScreen />
          ),
        }}
      />
    </ModalContainer>
  );
};

export default ModalChangeCexAccountNameContent;
