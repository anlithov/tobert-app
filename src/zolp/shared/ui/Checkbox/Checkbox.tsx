import React, { InputHTMLAttributes } from 'react';
import { Background, Container, Icon } from './Checkbox.styled';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  isChecked,
  onChange,
  disabled,
  ...props
}: CheckboxProps) => {
  return (
    <Container>
      <input
        type="checkbox"
        onChange={onChange}
        {...props}
        disabled={disabled}
      />
      {!disabled && <Background className="backgroundContainer" />}
      <Icon>
        <svg
          className={`checkbox ${isChecked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path d="M1 4.5L5 9L14 1" strokeWidth="2" />
        </svg>
      </Icon>
    </Container>
  );
};

export default Checkbox;
