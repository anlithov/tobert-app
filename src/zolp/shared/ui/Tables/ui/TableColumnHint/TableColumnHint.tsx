import React, { FC } from 'react';
import {
  useTooltipControl
} from '../../../../../features/PopupHelpers/providers/TooltipProvider/hooks/useTooltipControl.tsx';
import TooltipProvider from '../../../../../features/PopupHelpers/providers/TooltipProvider/TooltipProvider.tsx';
import { Container, ContainerIcon } from './TableColumnHint.styled.ts';
import { FaCircleQuestion } from 'react-icons/fa6';
import TooltipContainer from '../../../Tooltips/TooltipContainer.tsx';

interface Props {
  text: string;
}
const TableColumnHint: FC<Props> = ({ text }) => {
  const { showTooltip, onMouseProps } = useTooltipControl();
  return (
    <TooltipProvider
      ContainerComponent={Container}
      showTooltip={showTooltip}
      widthTooltipArea="17em"
      TooltipComponent={<TooltipContainer>{text}</TooltipContainer>}
    >
      <ContainerIcon {...onMouseProps}>
        <FaCircleQuestion size="1.1em" />
      </ContainerIcon>
    </TooltipProvider>
  );
};

export default TableColumnHint;
