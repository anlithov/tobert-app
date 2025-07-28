import React, { FC, useEffect } from 'react';
import {
  atomUnlockCexAccountModalId,
  atomUnlockCexAccountScreen,
} from './libs/store/position-deposit-manager.atoms.ts';
import { useAtomValue, useSetAtom } from 'jotai';
import { ModalContainer } from '../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import { UNLOCK_CEX_ACCOUNT_SCREENS } from './libs/constants/unlock-cex-accounts-tabs.const.ts';
import ReplacerDelayed from '../../../../../../zolp/shared/ui/molecules/ReplacerDelayed/ReplacerDelayed.tsx';
import UnlockAccountScreen from './screens/UnlockAccountScreen/UnlockAccountScreen.tsx';
import UnlockCexAccountSuccessScreen from './screens/UnlockCexAccountSuccessScreen/UnlockCexAccountSuccessScreen.tsx';
import { Container } from './ModalUnlockCexAccount.styled.ts';
import { ModalUnlockCexAccountProps } from './ModalUnlockCexAccount.tsx';

const ModalUnlockCexAccountContent: FC<ModalUnlockCexAccountProps> = ({
  modalId,
  name,
  image,
  cexAccountId,
}) => {
  const setModalId = useSetAtom(atomUnlockCexAccountModalId);

  useEffect(() => {
    setModalId(modalId);
  }, []);

  const screen = useAtomValue(atomUnlockCexAccountScreen);

  return (
    <ModalContainer width="41em">
      <ReplacerDelayed
        keySelected={screen}
        ContainerComponent={Container}
        components={{
          [UNLOCK_CEX_ACCOUNT_SCREENS.PASSWORD_FORM]: (
            <UnlockAccountScreen
              name={name}
              image={image}
              cexAccountId={cexAccountId}
            />
          ),
          [UNLOCK_CEX_ACCOUNT_SCREENS.SUCCESS]: (
            <UnlockCexAccountSuccessScreen />
          ),
        }}
      />
    </ModalContainer>
  );
};

export default ModalUnlockCexAccountContent;
