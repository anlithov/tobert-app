import React, { ComponentType, JSX, PropsWithChildren, ReactNode } from 'react';
import DropdownArea from './DropdownArea.tsx';
import { PopupPositioning } from '../../ui/PopupContainer.types.ts';

/**
 * Wrapper should have relative or absolute positioning
 * to correct working Dropdown
 */
export interface DropdownProviderProps<
  T extends ComponentType<{ children?: ReactNode } & any>,
  R,
> {
  showDropdown?: boolean;
  ContainerComponent: T;
  ContainerProps?: Partial<React.ComponentProps<T>>;
  DropdownComponent: ReactNode | (() => JSX.Element);
  dropdownPosition?: PopupPositioning;
  widthDropdownArea?: string;
  spaceBetween?: string;
  minWidth?: string;
  delay?: number;
}

const DropdownProvider = <Q, T extends ComponentType<any>, R>({
  ContainerComponent,
  ContainerProps,
  children,
  spaceBetween,
  DropdownComponent,
  dropdownPosition = {
    horizontal: 'center',
    vertical: 'bottom',
  },
  showDropdown,
  delay,
  widthDropdownArea = '100%',
}: DropdownProviderProps<T, R> & PropsWithChildren) => {
  const Container = ContainerComponent as ComponentType<
    { children?: ReactNode } & React.ComponentProps<T>
  >;

  const containerProps = ContainerProps as React.ComponentProps<T>;

  return (
    <Container {...containerProps}>
      {children}
      <DropdownArea
        width={widthDropdownArea}
        delay={delay}
        showTooltip={showDropdown}
        dropdownPosition={dropdownPosition}
        DropdownComponent={DropdownComponent}
        spaceBetween={spaceBetween}
      />
    </Container>
  );
};

export default DropdownProvider;
