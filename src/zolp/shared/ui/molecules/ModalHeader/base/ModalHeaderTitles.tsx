import React, { FC, ReactNode } from 'react';
import {
  ModalCryptoHeaderContainerTitles,
  ModalCryptoHeaderTitle,
  ModalCryptoHeaderTitleSubtitle,
} from './ModalHeader.styled.ts';

interface Props {
  title: ReactNode;
  subTitle?: ReactNode;
}
const ModalHeaderTitles: FC<Props> = ({ title, subTitle }) => {
  return (
    <ModalCryptoHeaderContainerTitles>
      <ModalCryptoHeaderTitle>{title}</ModalCryptoHeaderTitle>
      {subTitle && (
        <ModalCryptoHeaderTitleSubtitle>
          {subTitle}
        </ModalCryptoHeaderTitleSubtitle>
      )}
    </ModalCryptoHeaderContainerTitles>
  );
};

export default ModalHeaderTitles;
