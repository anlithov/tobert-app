import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Container, Label } from './CheckboxWithLabel.styled.ts';
import Checkbox from '../Checkbox.tsx';
import Divider from '../../Divider/Divider.tsx';

interface CheckboxWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  label?: ReactNode;
  checkboxPosition?: 'right' | 'left';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  isChecked,
  disabled,
  label,
  onChange,
  checkboxPosition = 'left',
}) => {
  return (
    <Container checkboxPosition={checkboxPosition}>
      <Checkbox isChecked={isChecked} onChange={onChange} disabled={disabled} />
      {checkboxPosition === 'right' && <Divider width="2em" />}
      <Label>{label}</Label>
      {checkboxPosition === 'left' && <Divider width="2em" />}
    </Container>
  );
};

export default CheckboxWithLabel;
