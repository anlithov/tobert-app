import React, { FC, ReactNode } from 'react';
import { Container, Icon } from './AccordionControlField.styled.ts';
import ImageContainer from '../../ImageContainer/base/ImageContainer.tsx';

type Props = {
  disabled?: boolean;
  disabledDropdown?: boolean;
  active?: boolean;
  onClick?: () => void;
  controlChildren: ReactNode;
  height?: string;
};

const AccordionControlField: FC<Props> = ({
  disabled,
  disabledDropdown,
  active,
  onClick,
  controlChildren,
  height,
}) => {
  return (
    <Container
      height={height}
      onClick={onClick}
      className={`${disabled ? 'disabled' : ''} ${
        disabledDropdown ? 'disabled-click' : ''
      }`}
    >
      {controlChildren}
      <ImageContainer
        disabledDropdown={disabledDropdown}
        src={<Icon className={active ? 'up' : ''} size="2.4em" />}
        width="2.4em"
      />
    </Container>
  );
};

export default AccordionControlField;
