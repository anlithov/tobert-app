import React, { FC, PropsWithChildren, SyntheticEvent } from 'react';
import { ClickableOverlay, Container } from './ModalWrapper.styled.ts';

interface Props extends PropsWithChildren {
  overlayBackgroundColor?: string;
  onAddonClickBackground?: () => void;
  onRewriteClickBackground?: () => void;
  closeModal: () => void;
  isShow?: boolean;
}
const ModalWrapper: FC<Props> = ({
  overlayBackgroundColor,
  onAddonClickBackground,
  onRewriteClickBackground,
  isShow,
  children,
  closeModal,
}) => {
  const onBackgroundClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (onRewriteClickBackground) {
      onRewriteClickBackground();
      return;
    }
    if (onAddonClickBackground) {
      onAddonClickBackground();
    }
    closeModal();
  };
  return (
    <Container
      background={overlayBackgroundColor}
      className={isShow ? 'active' : ''}
    >
      <ClickableOverlay onClick={onBackgroundClick} />
      {children}
    </Container>
  );
};

export default ModalWrapper;
