import React, { FC, JSX, ReactNode } from 'react';
import { PopupContainer } from '../../ui/PopupContainer.styled.ts';
import { PopupPositioning } from '../../ui/PopupContainer.types.ts';
import { useDebounce } from '../../../../shared/lib/hooks/timer/use-debounce.hook.ts';

interface Props {
  width?: string;
  showTooltip?: boolean;
  DropdownComponent: ReactNode | (() => JSX.Element);
  dropdownPosition?: PopupPositioning;
  delay?: number;
  spaceBetween?: string;
}

const DropdownArea: FC<Props> = ({
  DropdownComponent,
  dropdownPosition,
  showTooltip,
  delay,
  width,
  spaceBetween = '0em',
}) => {
  const { debouncedValue: debouncedValue } = useDebounce(
    delay ?? 200,
    showTooltip ? 'active' : '',
  );

  return showTooltip || debouncedValue ? (
    <PopupContainer
      width={width}
      className={showTooltip ? debouncedValue : ''}
      popupPosition={dropdownPosition}
      spaceBetween={spaceBetween}
    >
      {typeof DropdownComponent === 'function' ? (
        <DropdownComponent />
      ) : (
        DropdownComponent
      )}
    </PopupContainer>
  ) : null;
};

export default DropdownArea;
