import React, { FC, ReactNode } from 'react';
import { Container, Label } from './SwitchWithLabel.styled.ts';
import Divider from '../../atoms/Divider/Divider.tsx';
import Switch from '../../atoms/Switches/instances/Switch.tsx';

interface CheckboxWithLabelProps {
  active?: boolean;
  label?: ReactNode;
  checkboxPosition?: 'right' | 'left';
  disabled?: boolean;
  onChange?: () => void;
}

const SwitchWithLabel: FC<CheckboxWithLabelProps> = ({
  active,
  disabled,
  label,
  onChange,
  checkboxPosition = 'left',
}) => {
  return (
    <Container
      checkboxPosition={checkboxPosition}
      className={disabled ? 'disabled' : ''}
      onClick={onChange}
    >
      <Switch active={active ?? false} width="8em" onClick={onChange} />
      {checkboxPosition === 'right' && <Divider width="2em" />}
      <Label>{label}</Label>
      {checkboxPosition === 'left' && <Divider width="2em" />}
    </Container>
  );
};

export default SwitchWithLabel;
