import React, { FC, ReactNode } from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox.tsx';
import { Container, Label } from './CheckboxWithLabel.styled.ts';
import Divider from '../../atoms/Divider/Divider.tsx';

interface CheckboxWithLabelProps {
  isChecked?: boolean;
  label?: ReactNode;
  checkboxPosition?: 'right' | 'left';
  disabled?: boolean;
  onChange?: (bool: boolean) => void;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  isChecked,
  disabled,
  label,
  onChange,
  checkboxPosition = 'left',
}) => {
  return (
    <Container
      checkboxPosition={checkboxPosition}
      className={disabled ? 'disabled' : ''}
    >
      <Checkbox
        isChecked={isChecked}
        disabled={disabled}
        onClick={(event) => {
          event.isPropagationStopped();
          onChange && onChange(!isChecked);
        }}
      />
      {checkboxPosition === 'right' && <Divider width="2em" />}
      <Label
        onClick={(event) => {
          event.isPropagationStopped();
          onChange && onChange(!isChecked);
        }}
      >
        {label}
      </Label>
      {checkboxPosition === 'left' && <Divider width="2em" />}
    </Container>
  );
};

export default CheckboxWithLabel;
