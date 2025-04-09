import React, { FC, ReactNode } from 'react';
import {
  Container,
  SubTitle,
  Title,
  TitlesContainer,
} from './ModalActionButton.styled.ts';
import { BiChevronRight } from 'react-icons/bi';

interface Props {
  title: ReactNode;
  subTitle: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}
const ModalActionButton: FC<Props> = ({
  title,
  subTitle,
  onClick,
  disabled,
}) => {
  return (
    <Container onClick={onClick} className={disabled ? 'disabled' : ''}>
      <TitlesContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitlesContainer>
      <BiChevronRight size="2.4em" />
    </Container>
  );
};

export default ModalActionButton;
