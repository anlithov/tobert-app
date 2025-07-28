import React, { FC } from 'react';
import { modalUnlockCexAccountMessages } from '../../libs/messages/modal-unlock-cex-account.messages.ts';
import { useIntl } from 'react-intl';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { Formik } from 'formik';
import { UNLOCK_CEX_ACCOUNT_FIELDS } from '../../libs/constants/unlock-cex-account-fields.ts';
import AppFormikField from '../../../../../../../../zolp/shared/ui/atoms/Fields/formik-wrapper/AppFieldFormik.tsx';
import { ModalTitle } from '../../../../../../../../zolp/shared/ui/templates/Modal/ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import { useUnlockCexAccountValidationSchema } from './libs/hooks/use-unlock-cex-account-validation.schema.tsx';
import UnlockCexAccountActionButton from './components/UnlockCexAccountActionButton/UnlockCexAccountActionButton.tsx';
import {
  Name,
  TitleUnlock,
  UnlockContainer,
} from './UnlockAccountScreen.styled.ts';
import ImageContainer from '../../../../../../../../zolp/shared/ui/atoms/ImageContainer/base/ImageContainer.tsx';

interface Props {
  image?: string | null;
  name: string;
  cexAccountId: number;
}
const UnlockAccountScreen: FC<Props> = ({ image, name, cexAccountId }) => {
  const intl = useIntl();

  const schema = useUnlockCexAccountValidationSchema();

  return (
    <>
      <Divider height="2em" />
      <Formik
        initialValues={{
          [UNLOCK_CEX_ACCOUNT_FIELDS.password]: '',
        }}
        onSubmit={() => {}}
        validationSchema={schema}
      >
        {() => (
          <>
            <UnlockContainer>
              <TitleUnlock>You are trying to unlock</TitleUnlock>
              <Divider height="2em" />
              <ImageContainer src={image} width="12em" />
              <Divider height="2em" />
              <Name>{name}</Name>
            </UnlockContainer>
            <Divider height="2em" />
            <ModalTitle>Password</ModalTitle>
            <Divider height="0.5em" />
            <AppFormikField
              formikName={UNLOCK_CEX_ACCOUNT_FIELDS.password}
              placeholder="Password"
              helperText={intl.formatMessage(
                modalUnlockCexAccountMessages.passwordHelper,
              )}
            />
            <Divider height="1em" />
            <UnlockCexAccountActionButton cexAccountId={cexAccountId} />
          </>
        )}
      </Formik>
    </>
  );
};

export default UnlockAccountScreen;
