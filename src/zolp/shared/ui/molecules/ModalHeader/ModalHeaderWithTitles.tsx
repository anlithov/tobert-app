import React, { FC, PropsWithChildren, ReactNode } from 'react';
import ModalHeader from './base/ModalHeader.tsx';
import ModalHeaderTitles from './base/ModalHeaderTitles.tsx';

interface Props extends PropsWithChildren {
  title: ReactNode;
  subTitle?: ReactNode;
  onGoBack?: () => void;
  onCrossClick?: () => void;
}

const ModalHeaderWithTitles: FC<Props> = ({
  title,
  subTitle,
  onGoBack,
  onCrossClick,
}) => {
  return (
    <ModalHeader onGoBack={onGoBack} onCrossClick={onCrossClick}>
      <ModalHeaderTitles title={title} subTitle={subTitle} />
    </ModalHeader>
  );
};

export default ModalHeaderWithTitles;
