import React, { FC } from 'react';
import { ButtonCommon } from '../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import ModalUnlockCexAccount from '../../../../modals/ModalUnlockCexAccount/ModalUnlockCexAccount.tsx';

interface Props {
  cexAccountId: number;
  name: string;
  image?: string | null;
}
const UnlockCexAccountButton: FC<Props> = ({ name, image, cexAccountId }) => {
  const { addModal } = useModal();

  const openUnlockCexAccountModal = async () => {
    await addModal({
      props: {
        name,
        image,
        cexAccountId,
      },
      component: ModalUnlockCexAccount,
    });
  };

  return (
    <ButtonCommon
      borderRadius="1.2em"
      text="Unlock"
      height="3.6em"
      onClick={openUnlockCexAccountModal}
    />
  );
};

export default UnlockCexAccountButton;
