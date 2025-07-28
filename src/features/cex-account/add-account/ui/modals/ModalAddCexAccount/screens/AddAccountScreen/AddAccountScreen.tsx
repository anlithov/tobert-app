import React from 'react';
import { useAtomValue } from 'jotai';
import { modalAddCexAccountMessages } from '../../libs/messages/modal-add-cex-account.messages.ts';
import { useIntl } from 'react-intl';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { Formik } from 'formik';
import { ADD_CEX_ACCOUNT_FIELDS } from '../../libs/constants/add-cex-account-fields.ts';
import AppFormikField from '../../../../../../../../zolp/shared/ui/atoms/Fields/formik-wrapper/AppFieldFormik.tsx';
import { ModalTitle } from '../../../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import { useAddCexAccountValidationSchema } from './libs/hooks/use-add-cex-account-validation.schema.tsx';
import CexAccountNameField from '../../../../../../shared/ui/CexAccountNameField/CexAccountNameField.tsx';
import { useDebounceJotai } from '../../../../../../../../zolp/shared/lib/hooks/timer/use-debounce-jotai.hook.ts';
import {
  atomCexAccountFieldsAreLocked,
  atomCexAccountNameDebounced,
  atomCexAccountNameIsDebouncing,
  atomCexAccountNameToBeDebounced,
} from '../../../../../../shared/ui/CexAccountNameField/model/cex-account-debounce-name.atom.ts';
import AddCexAccountActionButton from './components/AddCexAccountActionButton/AddCexAccountActionButton.tsx';

const AddAccountScreen = () => {
  const intl = useIntl();

  const schema = useAddCexAccountValidationSchema();

  useDebounceJotai(
    {
      atomLoading: atomCexAccountNameIsDebouncing,
      atomToBeDebouncedValue: atomCexAccountNameToBeDebounced,
      atomDebouncedValue: atomCexAccountNameDebounced,
    },
    1000,
  );

  const fieldsLock = useAtomValue(atomCexAccountFieldsAreLocked);

  return (
    <>
      <Divider height="2em" />
      <Formik
        initialValues={{
          [ADD_CEX_ACCOUNT_FIELDS.name]: '',
          [ADD_CEX_ACCOUNT_FIELDS.API_KEY]: '',
          [ADD_CEX_ACCOUNT_FIELDS.API_SECRET]: '',
          [ADD_CEX_ACCOUNT_FIELDS.totp]: '',
          [ADD_CEX_ACCOUNT_FIELDS.password]: '',
        }}
        onSubmit={() => {}}
        validationSchema={schema}
      >
        {() => (
          <>
            <ModalTitle>
              {intl.formatMessage(modalAddCexAccountMessages.cexAccountCreds)}
            </ModalTitle>
            <Divider height="0.5em" />
            <CexAccountNameField />
            <AppFormikField
              formikName={ADD_CEX_ACCOUNT_FIELDS.password}
              placeholder={intl.formatMessage(
                modalAddCexAccountMessages.passwordPlaceholder,
              )}
              helperText={intl.formatMessage(
                modalAddCexAccountMessages.passwordHelper,
              )}
              disabled={fieldsLock}
            />
            <Divider height="2em" />
            <ModalTitle>
              {intl.formatMessage(modalAddCexAccountMessages.apiCreds)}
            </ModalTitle>
            <Divider height="0.5em" />
            <AppFormikField
              formikName={ADD_CEX_ACCOUNT_FIELDS.API_KEY}
              placeholder={intl.formatMessage(
                modalAddCexAccountMessages.apiKeyPlaceholder,
              )}
              disabled={fieldsLock}
            />
            <AppFormikField
              formikName={ADD_CEX_ACCOUNT_FIELDS.API_SECRET}
              placeholder={intl.formatMessage(
                modalAddCexAccountMessages.apiSecretPlaceholder,
              )}
              disabled={fieldsLock}
            />
            <Divider height="2em" />
            <ModalTitle style={{ opacity: 0.5 }}>
              {intl.formatMessage(modalAddCexAccountMessages.encryptionHint)}
            </ModalTitle>
            <Divider height="1em" />

            <AddCexAccountActionButton />
          </>
        )}
      </Formik>
    </>
  );
};

export default AddAccountScreen;
