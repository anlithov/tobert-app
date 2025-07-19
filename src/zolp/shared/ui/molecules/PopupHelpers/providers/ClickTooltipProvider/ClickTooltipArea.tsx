import React, { FC, ReactNode } from 'react';
import { PopupContainer } from '../../ui/PopupContainer.styled.ts';
import { PopupPositioning } from '../../ui/PopupContainer.types.ts';
import { TOOLTIP_CLASSNAME } from '../../../../atoms/Tooltips/tooltip.names.ts';
import { useDebounce } from '../../../../../lib/hooks/timer/use-debounce.hook.ts';

interface IProps {
  showTooltip?: boolean;
  TooltipComponent: ReactNode | (() => JSX.Element);
  tooltipPosition?: PopupPositioning;
  delay?: number;
  width?: string;
  spaceBetween?: string;
}
const ClickTooltipArea: FC<IProps> = ({
  TooltipComponent,
  tooltipPosition,
  showTooltip,
  delay,
  width,
  spaceBetween = '1em',
}) => {
  const { debouncedValue: debouncedValue } = useDebounce(
    delay ?? 200,
    showTooltip ? 'active' : '',
  );

  return showTooltip || debouncedValue ? (
    <PopupContainer
      width={width}
      className={`${showTooltip ? debouncedValue : ''} ${TOOLTIP_CLASSNAME}`}
      popupPosition={tooltipPosition}
      spaceBetween={spaceBetween}
    >
      {typeof TooltipComponent === 'function' ? (
        <TooltipComponent />
      ) : (
        TooltipComponent
      )}
    </PopupContainer>
  ) : null;
};

export default ClickTooltipArea;
