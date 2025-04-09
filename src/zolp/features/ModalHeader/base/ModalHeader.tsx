import React, { FC, PropsWithChildren } from 'react';
import {
  ContentContainer,
  CrossContainer,
  ModalCryptoHeaderContainer,
} from './ModalHeader.styled.ts';
import { BiSolidChevronLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import ButtonIconed from '../../../shared/ui/Button/ButtonIconed/ButtonIconed.tsx';
import { BUTTON_VARIANTS } from '../../../shared/ui/Button/libs/constants/button.variants.ts';

interface Props extends PropsWithChildren {
  onGoBack?: () => void;
  onCrossClick?: () => void;
}

const ModalHeader: FC<Props> = ({ children, onGoBack, onCrossClick }) => {
  return (
    <ModalCryptoHeaderContainer className="modal-header">
      {onGoBack && (
        <ButtonIconed
          width="3.2em"
          color="secondary"
          variant={BUTTON_VARIANTS.TONAL}
          onClick={onGoBack}
        >
          <BiSolidChevronLeft size="2.4em" />
        </ButtonIconed>
      )}
      <ContentContainer>{children}</ContentContainer>
      {onCrossClick && (
        <CrossContainer>
          <ButtonIconed
            width="3.2em"
            color="secondary"
            variant={BUTTON_VARIANTS.FLAT}
            onClick={onCrossClick}
          >
            <AiOutlineClose size="2em" />
          </ButtonIconed>
        </CrossContainer>
      )}
    </ModalCryptoHeaderContainer>
  );
};

export default ModalHeader;
