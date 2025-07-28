import React, { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import ButtonIconed from '../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import ModalChangeCexAccountName from '../../../../modals/ModalChangeCexAccountName/ModalChangeCexAccountName.tsx';

interface Props {
  name: string;
  cexAccountId: number;
}
const ChangeCexAccountNameButton: FC<Props> = ({ name, cexAccountId }) => {
  const { addModal } = useModal();

  const openUnlockCexAccountModal = async () => {
    await addModal({
      component: ModalChangeCexAccountName,
      props: {
        name,
        cexAccountId,
      },
    });
  };

  return (
    <ButtonIconed
      width="3.6em"
      borderRadius="1.2em"
      variant="filled"
      onClick={openUnlockCexAccountModal}
    >
      <FaRegEdit size="2em" />
    </ButtonIconed>
  );
};

export default ChangeCexAccountNameButton;
