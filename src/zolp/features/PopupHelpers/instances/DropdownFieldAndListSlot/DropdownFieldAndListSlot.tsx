import React, { FC, ReactNode } from 'react';
import DropdownProvider from '../../providers/DropdownProvider/DropdownProvider';
import {
  ContainerField,
  DropdownControlFieldContainer,
} from './DropdownFieldAndListSlot.styled.ts';
import { useDropdownControl } from '../../providers/DropdownProvider/hooks/useDropdownControl';
import { PopupPositioning } from '../../ui/PopupContainer.types';
import DropdownControlField from '../../../../shared/ui/Dropdown/DropdownControlField/DropdownControlField.tsx';
import { DropdownFieldVariants } from './libs/constants/dropdown-field-variants.ts';

interface Props {
  selectedValue?: ReactNode;
  placeholder: ReactNode;
  ListComponent: ReactNode;
  disabled?: boolean;
  controlFieldProps?: {
    padding?: string;
    height?: string;
    variant?: DropdownFieldVariants;
    hideSelectIcon?: boolean;
    disabled?: boolean;
    minWidth?: string;
    error?: string;
  };
  dropdownPosition?: PopupPositioning;
  widthDropdownArea?: string;
  onBlur?: () => void;
}

const DropdownFieldAndListSlot: FC<Props> = ({
  ListComponent,
  selectedValue,
  placeholder,
  controlFieldProps,
  dropdownPosition,
  widthDropdownArea,
  onBlur,
  disabled,
}) => {
  const { ref, showDropdown, onClickProps } = useDropdownControl();

  const handleOpen = () => {
    if (onBlur) {
      onBlur();
    }

    onClickProps.handleOpen();
  };

  return (
    <DropdownProvider
      ContainerComponent={ContainerField}
      showDropdown={showDropdown}
      DropdownComponent={ListComponent}
      dropdownPosition={dropdownPosition}
      widthDropdownArea={widthDropdownArea}
    >
      <DropdownControlFieldContainer
        ref={ref}
        onClick={handleOpen}
        className={`${disabled ? 'disabled' : ''}`}
      >
        <DropdownControlField
          isOpened={showDropdown}
          selectedValue={selectedValue}
          defaultValue={placeholder}
          {...controlFieldProps}
        />
      </DropdownControlFieldContainer>
    </DropdownProvider>
  );
};

export default DropdownFieldAndListSlot;
