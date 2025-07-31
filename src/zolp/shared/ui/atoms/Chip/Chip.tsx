import React, { FC, ReactNode } from 'react';

import { Container, Label } from './Chip.styled.ts';

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
  variant?: 'filled' | 'outlined';
  pointerEvents?: string;
  LeftComponent?: ReactNode;
  RightComponent?: ReactNode;
  justifyContent?: 'center' | 'space-between';
  ref?: React.Ref<HTMLDivElement>;
};

const Chip: FC<Props> = ({
  onClick,
  children,
  disabled,
  active,
  placeholder,
  variant,
  padding = '0.8em 1.4em',
  fontSize = '1em',
  height,
  width,
  minWidth,
  pointerEvents,
  LeftComponent,
  RightComponent,
  justifyContent = 'center',
  ref,
}) => {
  return (
    <Container
      ref={ref}
      onClick={onClick}
      padding={padding}
      height={height}
      minWidth={minWidth}
      pointerEvents={pointerEvents}
      justifyContent={justifyContent}
      width={width}
      className={`${disabled ? 'disabled' : ''} ${active ? 'active' : ''} ${variant ?? 'outlined'}`}
    >
      {LeftComponent}
      <Label fontSize={fontSize} justifyContent={justifyContent}>
        {children ?? placeholder}
      </Label>
      {RightComponent}
    </Container>
  );
};

export default Chip;
