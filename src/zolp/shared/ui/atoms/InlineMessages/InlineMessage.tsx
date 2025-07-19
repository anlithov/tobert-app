import React, { FC, PropsWithChildren } from 'react';
import { Container, ContainerIcon } from './InlineMessage.styled.ts';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { GrValidate } from 'react-icons/gr';

export interface InlineMessageProp extends PropsWithChildren {
  size?: string;
  containerHeight?: string;
  variant: 'error' | 'warning' | 'success';
  text?: string;
}
const InlineMessage: FC<InlineMessageProp> = ({
  size,
  children,
  variant,
  text,
  containerHeight,
}) => {
  return (
    <Container
      size={size}
      className={variant}
      containerHeight={containerHeight}
    >
      <ContainerIcon>
        {variant === 'error' && <IoAlertCircleOutline size="2em" />}
        {variant === 'warning' && <IoAlertCircleOutline size="2em" />}
        {variant === 'success' && <GrValidate size="2em" />}
      </ContainerIcon>
      {text ? <span>{text}</span> : children}
    </Container>
  );
};

export default InlineMessage;
