import React, { FC, ReactNode } from 'react';

import { Container, Label } from './Chip.styled';

type Props = {
  onClick?: () => void;
  placeholder?: string | ReactNode;
  children?: string | ReactNode;
  disabled?: boolean;
  active?: boolean;
  padding?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  minWidth?: string;
  pointerEvents?: string;
  LeftComponent?: ReactNode;
  RightComponent?: ReactNode;
  justifyContent?: 'center' | 'space-between';
};

const Chip: FC<Props> = ({
  onClick,
  children,
  disabled,
  active,
  placeholder,
  padding,
  fontSize = '1em',
  height,
  width,
  minWidth,
  pointerEvents,
  LeftComponent,
  RightComponent,
  justifyContent = 'center',
}) => {
  return (
    <Container
      onClick={onClick}
      padding={padding}
      height={height}
      minWidth={minWidth}
      pointerEvents={pointerEvents}
      justifyContent={justifyContent}
      width={width}
      className={`${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`}
    >
      {LeftComponent}
      <Label fontSize={fontSize} justifyContent={justifyContent}>{children ?? placeholder}</Label>
      {RightComponent}
    </Container>
  );
};

export default Chip;
