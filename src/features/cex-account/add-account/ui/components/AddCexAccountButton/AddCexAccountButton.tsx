import React from 'react';
import { Container, Title } from './AddCexAccountButton.styled.ts';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { useModal } from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import ModalAddCexAccount from '../../modals/ModalAddCexAccount/ModalAddCexAccount.tsx';

const AddCexAccountButton = () => {
  const { addModal } = useModal();

  const openAddCexAccountModal = async () => {
    await addModal({
      props: {},
      component: ModalAddCexAccount,
    });
  };

  return (
    <Container className="hoverable" onClick={openAddCexAccountModal}>
      <MdOutlineAddBusiness size="8em" />
      <Title>Add CEX account</Title>
    </Container>
  );
};

export default AddCexAccountButton;
