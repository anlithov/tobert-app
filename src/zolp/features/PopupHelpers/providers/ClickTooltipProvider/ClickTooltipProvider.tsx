import React, { ComponentType, JSX, PropsWithChildren, ReactNode } from 'react';
import ClickTooltipArea from './ClickTooltipArea.tsx';
import { PopupPositioning } from '../../ui/PopupContainer.types.ts';

/**
 * Wrapper should have relative or absolute positioning
 * to correct working Tooltip
 */
export interface TooltipProviderProps<
  T extends ComponentType<{ children?: ReactNode } & any>,
  R,
> extends PropsWithChildren {
  showTooltip?: boolean;
  ContainerComponent: T;
  ContainerProps?: Partial<React.ComponentProps<T>>;
  TooltipComponent: ReactNode | (() => JSX.Element);
  tooltipPosition?: PopupPositioning;
  delay?: number;
  widthTooltipArea?: string;
  spaceBetween?: string;
}
const ClickTooltipProvider = <Q, T extends ComponentType<any>, R>({
  ContainerComponent,
  ContainerProps,
  children,
  TooltipComponent,
  tooltipPosition = {
    horizontal: 'center',
    vertical: 'top',
  },
  showTooltip,
  delay,
  widthTooltipArea,
  spaceBetween,
}: TooltipProviderProps<T, R>) => {
  const Container = ContainerComponent as ComponentType<
    { children?: ReactNode } & React.ComponentProps<T>
  >;

  const containerProps = ContainerProps as React.ComponentProps<T>;

  return (
    <Container {...containerProps}>
      {children}
      <ClickTooltipArea
        delay={delay}
        showTooltip={showTooltip}
        tooltipPosition={tooltipPosition}
        TooltipComponent={TooltipComponent}
        width={widthTooltipArea}
        spaceBetween={spaceBetween}
      />
    </Container>
  );
};

export default ClickTooltipProvider;
