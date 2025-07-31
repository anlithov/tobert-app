import React, { FC, ReactNode } from 'react';
import { Container } from './AvatarMenuButton.styled.ts';

interface Props {
  title: ReactNode;
  iconButton: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const AvatarMenuButton: FC<Props> = ({ title, iconButton, onClick }) => {
  return (
    <Container onClick={(e) => onClick && onClick(e)}>
      {title}
      {iconButton}
    </Container>
  );
};

export default AvatarMenuButton;
