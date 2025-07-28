import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { Formik } from 'formik';
import { CHANGE_CEX_ACCOUNT_NAME_FIELDS } from '../../libs/constants/unlock-cex-account-fields.ts';
import { ModalTitle } from '../../../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import { useChangeCexAccountNameValidationSchema } from './libs/hooks/use-change-cex-account-name-validation.schema.tsx';
import ChangeCexAccountNameActionButton from './components/ChangeCexAccountNameActionButton/ChangeCexAccountNameActionButton.tsx';
import ModalHeader from '../../../../../../../../zolp/shared/ui/molecules/ModalHeader/base/ModalHeader.tsx';
import ModalHeaderTitles from '../../../../../../../../zolp/shared/ui/molecules/ModalHeader/base/ModalHeaderTitles.tsx';
import { useModal } from '../../../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { modalChangeCexAccountNameMessages } from '../../libs/messages/modal-change-cex-account-name.messages.ts';
import CexAccountNameField from '../../../../../../shared/ui/CexAccountNameField/CexAccountNameField.tsx';
import { useDebounceJotai } from '../../../../../../../../zolp/shared/lib/hooks/timer/use-debounce-jotai.hook.ts';
import {
  atomCexAccountNameDebounced,
  atomCexAccountNameIsDebouncing,
  atomCexAccountNameToBeDebounced,
} from '../../../../../../shared/ui/CexAccountNameField/model/cex-account-debounce-name.atom.ts';

interface Props {
  name: string;
  cexAccountId: number;
  modalId: string;
}
const ChangeCexAccountNameScreen: FC<Props> = ({
  name,
  cexAccountId,
  modalId,
}) => {
  const { closeModal } = useModal();

  const handleClose = async () => {
    if (modalId) {
      await closeModal(modalId);
    }
  };
  const schema = useChangeCexAccountNameValidationSchema();

  useDebounceJotai(
    {
      atomLoading: atomCexAccountNameIsDebouncing,
      atomToBeDebouncedValue: atomCexAccountNameToBeDebounced,
      atomDebouncedValue: atomCexAccountNameDebounced,
    },
    1000,
  );

  return (
    <>
      <Formik
        initialValues={{
          [CHANGE_CEX_ACCOUNT_NAME_FIELDS.name]: name,
        }}
        onSubmit={() => {}}
        validationSchema={schema}
      >
        {() => (
          <>
            <ModalHeader onGoBack={handleClose} onCrossClick={handleClose}>
              <ModalHeaderTitles
                title={
                  <FormattedMessage
                    {...modalChangeCexAccountNameMessages.addTitle}
                  />
                }
                subTitle={
                  <FormattedMessage
                    {...modalChangeCexAccountNameMessages.addDescription}
                  />
                }
              />
            </ModalHeader>
            <Divider height="3em" />
            <ModalTitle>
              <FormattedMessage
                {...modalChangeCexAccountNameMessages.yourCexAccountName}
              />
            </ModalTitle>
            <Divider height="0.5em" />
            <CexAccountNameField />
            <Divider height="3em" />
            <ChangeCexAccountNameActionButton cexAccountId={cexAccountId} />
          </>
        )}
      </Formik>
    </>
  );
};

export default ChangeCexAccountNameScreen;
