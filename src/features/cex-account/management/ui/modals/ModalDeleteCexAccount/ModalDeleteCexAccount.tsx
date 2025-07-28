import React, { FC, useEffect } from 'react';
import {
  ModalProps,
  useModal,
} from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import {
  CexAccountsListDocument,
  useDeleteCexAccountMutation,
} from '../../../../../../__graphql/generated.ts';
import { ModalContainer } from '../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import Divider from '../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import StatusCard from '../../../../../../zolp/shared/ui/templates/StatusCard/StatusCard.tsx';
import SuccessIcon from '../../../../../../zolp/shared/ui/atoms/IconsThemed/Success/SuccessIcon.tsx';
import { FormattedMessage } from 'react-intl';
import LoadingIcon from '../../../../../../zolp/shared/ui/atoms/IconsThemed/Loading/LoadingIcon.tsx';
import { modalDeleteCexAccountMessages } from './libs/messages/modal-delete-cex-account.messages.ts';
import { useJwtStore } from '../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';

interface Props extends ModalProps {
  cexAccountId: number;
}
const ModalDeleteCexAccount: FC<Props> = ({ cexAccountId, modalId }) => {
  const { closeModal } = useModal();

  const [deleteCexAccount, { data, loading }] = useDeleteCexAccountMutation();

  const { jwtAccount } = useJwtStore();
  const handleDeleteCexAccount = async () => {
    await deleteCexAccount({
      variables: {
        input: cexAccountId,
      },
      context: {
        headers: {
          jwt_account: jwtAccount,
        },
      },
      refetchQueries: [CexAccountsListDocument],
    });
  };

  useEffect(() => {
    (async () => {
      await handleDeleteCexAccount();
      setTimeout(() => {
        closeModal(modalId);
      }, 2000);
    })();
  }, []);

  const isLoading = !data || loading;

  return (
    <ModalContainer width="41em">
      <Divider height="2em" />
      <StatusCard
        statusSrc={isLoading ? <LoadingIcon /> : <SuccessIcon />}
        title={
          <FormattedMessage
            {...(isLoading
              ? modalDeleteCexAccountMessages.loadingTitle
              : modalDeleteCexAccountMessages.successTitle)}
          />
        }
        subTitle={
          <FormattedMessage
            {...(isLoading
              ? modalDeleteCexAccountMessages.loadingDescription
              : modalDeleteCexAccountMessages.successDescription)}
          />
        }
      />
      <Divider height="2em" />
    </ModalContainer>
  );
};

export default ModalDeleteCexAccount;
