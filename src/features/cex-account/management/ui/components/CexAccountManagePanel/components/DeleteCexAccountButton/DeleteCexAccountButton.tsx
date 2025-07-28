import React, { FC } from 'react';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import ButtonIconed from '../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ModalDialog from '../../../../../../../../zolp/shared/ui/templates/Modal/abstracts/ModalDialog/ModalDialog.tsx';
import ModalDeleteCexAccount from '../../../../modals/ModalDeleteCexAccount/ModalDeleteCexAccount.tsx';

interface Props {
  cexAccountId: number;
}
const DeleteCexAccountButton: FC<Props> = ({ cexAccountId }) => {
  const { addModal } = useModal();

  const openUnlockCexAccountModal = async () => {
    await addModal({
      modalId: 'modal-delete-cex-account',
      props: {
        width: '40em',
        title: 'Are you sure you want to delete this CEX account?',
        description:
          'By deleting this account, you will lose all the data related to it.',
        titleAccept: <span>Confirm</span>,
        onClickAccept: async () => {
          await addModal({
            component: ModalDeleteCexAccount,
            props: {
              cexAccountId,
            },
          });
        },
      },
      component: ModalDialog,
    });
  };

  return (
    <ButtonIconed
      width="3.6em"
      borderRadius="1.2em"
      variant="outlined"
      onClick={openUnlockCexAccountModal}
    >
      <RiDeleteBin5Line size="2em" />
    </ButtonIconed>
  );
};

export default DeleteCexAccountButton;
