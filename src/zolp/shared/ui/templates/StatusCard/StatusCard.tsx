import React, { FC, ReactNode } from 'react';
import {
  StatusCardContainer,
  SubTitle,
  TextContainer,
  Title,
} from './StatusCard.styled.ts';
import ImageContainer from '../../atoms/ImageContainer/base/ImageContainer.tsx';
import Divider from '../../atoms/Divider/Divider.tsx';

interface StatusCardProps {
  statusSrc?: string | ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  footer?: ReactNode;
  width?: string;
  backColor?: string;
}

const StatusCard: FC<StatusCardProps> = ({
  statusSrc,
  title,
  subTitle,
  footer,
  width = 'initial',
  backColor,
}) => {
  return (
    <StatusCardContainer width={width}>
      {statusSrc && <ImageContainer src={statusSrc} />}
      <TextContainer>
        {title && <Title>{title}</Title>}
        <Divider height="0.5em" />
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </TextContainer>
      {footer && <Divider height="0.5em" />}
      {footer}
    </StatusCardContainer>
  );
};

export default StatusCard;
