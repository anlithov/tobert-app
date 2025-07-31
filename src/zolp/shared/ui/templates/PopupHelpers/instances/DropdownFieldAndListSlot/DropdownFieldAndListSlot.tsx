import React, { FC, ReactNode } from 'react';
import DropdownProvider from '../../../../molecules/PopupHelpers/providers/DropdownProvider/DropdownProvider.tsx';
import {
  ContainerField,
  DropdownControlFieldContainer,
} from './DropdownFieldAndListSlot.styled.ts';
import { useDropdownControl } from '../../../../molecules/PopupHelpers/providers/DropdownProvider/hooks/useDropdownControl.tsx';
import { PopupPositioning } from '../../../../molecules/PopupHelpers/ui/PopupContainer.types.ts';
import DropdownControlField from '../../../../atoms/Dropdown/DropdownControlField/DropdownControlField.tsx';
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

    onClickProps.onClick();
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
