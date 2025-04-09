import React, { FC, ReactNode } from 'react';

import { Container, Icon, Label } from './DropdownControlField.styled.ts';
import { DropdownFieldVariants } from '../../../../features/PopupHelpers/instances/DropdownFieldAndListSlot/libs/constants/dropdown-field-variants.ts';

type DropdownControlFieldProps = {
  isOpened?: boolean;
  onOpen?: () => void;
  selectedValue?: ReactNode;
  defaultValue?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  padding?: string;
  height?: string;
  variant?: DropdownFieldVariants;
  hideSelectIcon?: boolean;
  minWidth?: string;
  error?: string;
};

const DropdownControlField: FC<DropdownControlFieldProps> = ({
  isOpened,
  onOpen,
  selectedValue,
  defaultValue,
  placeholder,
  disabled,
  padding,
  height,
  variant = 'filled',
  hideSelectIcon,
  minWidth = 'auto',
  error,
}) => {
  return (
    <Container
      onClick={onOpen}
      padding={padding}
      height={height}
      minWidth={minWidth}
      className={`${variant} ${disabled ? 'disabled' : ''} ${
        isOpened ? 'active' : ''
      } ${error ? 'error' : ''}`}
    >
      <div className="border-container" />
      {!selectedValue && !defaultValue && <Label>{placeholder}</Label>}
      {!selectedValue && defaultValue}
      {selectedValue}
      {!hideSelectIcon && (
        <Icon size="2.4em" className={isOpened ? 'up' : ''} />
      )}
    </Container>
  );
};

export default DropdownControlField;
