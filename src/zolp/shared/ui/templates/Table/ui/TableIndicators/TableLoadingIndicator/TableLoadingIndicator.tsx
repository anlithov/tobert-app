import React, { FC, ReactNode, useEffect } from 'react';
import TooltipContainer from '../../../../../atoms/Tooltips/TooltipContainer.tsx';
import { Loading } from '../../../../../atoms/Loading/Loading.tsx';
import { ContainerLoader } from './TableLoadingIndicator.styled.ts';
import { useTooltipControl } from '../../../../../molecules/PopupHelpers/providers/TooltipProvider/hooks/useTooltipControl.tsx';
import TooltipProvider from '../../../../../molecules/PopupHelpers/providers/TooltipProvider/TooltipProvider.tsx';

export interface Props {
  loading: boolean;
  tooltipText: ReactNode;
}
const TableLoadingIndicator: FC<Props> = ({ loading, tooltipText }) => {
  const { showTooltip, onMouseProps, setShowTooltip } = useTooltipControl();

  useEffect(() => {
    setShowTooltip(false);
  }, [loading]);

  return (
    <TooltipProvider
      showTooltip={showTooltip}
      tooltipPosition={{
        vertical: 'center',
        horizontal: 'right-out',
      }}
      ContainerComponent={ContainerLoader}
      TooltipComponent={
        <TooltipContainer width="max-content">
          <span>{tooltipText}</span>
        </TooltipContainer>
      }
    >
      {loading && (
        <ContainerLoader {...onMouseProps}>
          <Loading size="1.6em" />
        </ContainerLoader>
      )}
    </TooltipProvider>
  );
};

export default TableLoadingIndicator;
