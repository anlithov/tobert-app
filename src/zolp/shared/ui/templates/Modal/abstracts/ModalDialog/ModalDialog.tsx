import React, { FC, ReactNode } from 'react';
import { ModalContainer } from '../../ui/ModalCommonContainers/ModalCommonContainers.styled.ts';
import ImageContainer from '../../../../atoms/ImageContainer/base/ImageContainer.tsx';
import {
  ButtonsContainer,
  ContainerIcon,
  Description,
  Title,
} from './ModalDialog.styled.ts';
import { BUTTON_VARIANTS } from '../../../../atoms/Button/libs/constants/button.variants.ts';
import Divider from '../../../../atoms/Divider/Divider.tsx';
import { ModalProps } from '../../lib/hook/use-modal.hook.ts';
import { ButtonCommon } from '../../../../atoms/Button/ButtonCommon/ButtonCommon.tsx';

interface Props extends ModalProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  additionalContent?: ReactNode;
  onClickAccept?: () => void;
  onClickCancel?: () => void;
  titleAccept?: ReactNode;
  titleCancel?: ReactNode;
  width?: string;
}
const ModalDialog: FC<Props> = ({
  modalId,
  width,
  icon,
  title,
  description,
  additionalContent,
  titleAccept,
  titleCancel,
  onClickCancel,
  onClickAccept,
}) => {
  return (
    <ModalContainer width={width}>
      <Divider height="1em" />
      <ContainerIcon>
        <ImageContainer src={icon} width="3.6em" />
      </ContainerIcon>
      <Divider height="1.8em" />
      <Title>{title}</Title>
      <Divider height="2em" />
      <Description>{description}</Description>
      {additionalContent ?? <Divider height="2.6em" />}
      <ButtonsContainer>
        <ButtonCommon
          height="5em"
          variant={BUTTON_VARIANTS.FLAT}
          onClick={onClickCancel}
        >
          {titleCancel ?? <span>Cancel</span>}
        </ButtonCommon>
        <ButtonCommon
          height="5em"
          variant={BUTTON_VARIANTS.FLAT}
          onClick={onClickAccept}
        >
          {titleAccept ?? <span>Accept</span>}
        </ButtonCommon>
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default ModalDialog;
