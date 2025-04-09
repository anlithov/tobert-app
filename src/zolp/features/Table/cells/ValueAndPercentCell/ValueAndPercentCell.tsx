import React, { FC, ReactNode } from 'react';
import {
  ArrowContainer,
  Container,
  DotSpan,
  SubTitle,
} from './ValueAndPercentCell.styled.ts';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';
import { PolarityColorSlug } from '../../../../shared/ui/PolarityIcons/polarity-icons.const.tsx';
import {
  AlignInputHorizontal,
  FLEX_ALIGN_HORIZONTAL,
} from '../../../../shared/lib/constants/align-to-flex.const.ts';
import { useTooltipControl } from '../../../PopupHelpers/providers/TooltipProvider/hooks/useTooltipControl.tsx';
import Titles from '../../../../shared/ui/Titles/Titles.tsx';
import TooltipProvider from '../../../PopupHelpers/providers/TooltipProvider/TooltipProvider.tsx';
import TooltipContainer from '../../../../shared/ui/Tooltips/TooltipContainer.tsx';

interface Props {
  title: ReactNode;
  subTitle: ReactNode;
  polarity?: PolarityColorSlug;
  tooltipWidth?: string;
  tooltip?: ReactNode;
  hideArrow?: boolean;
  alignHorizontal?: AlignInputHorizontal;
}
const ValueAndPercentCell: FC<Props> = ({
  title,
  subTitle,
  polarity,
  tooltip,
  tooltipWidth,
  hideArrow,
  alignHorizontal = 'left',
}) => {
  const { showTooltip, onMouseProps } = useTooltipControl();

  const mapSymbolByPolarity = {
    negative: <FaCaretDown color="inherit" />,
    positive: <FaCaretUp color="inherit" />,
    neutral: <DotSpan>•</DotSpan>,
  };

  const titleComponent = (
    <Titles
      horizontalAlign={alignHorizontal}
      title={<>{title}</>}
      customSubTitle={
        <SubTitle
          width="100%"
          polarity={polarity}
          justify={FLEX_ALIGN_HORIZONTAL[alignHorizontal]}
        >
          {!hideArrow && polarity && (
            <ArrowContainer>{mapSymbolByPolarity[polarity]}</ArrowContainer>
          )}
          {typeof subTitle === 'string' ? (
            <>{subTitle.startsWith('-') ? subTitle.substring(1) : subTitle}</>
          ) : (
            subTitle
          )}
        </SubTitle>
      }
    />
  );

  return !tooltip ? (
    titleComponent
  ) : (
    <TooltipProvider
      showTooltip={showTooltip}
      ContainerComponent={Container}
      widthTooltipArea={tooltipWidth}
      TooltipComponent={
        <TooltipContainer borderRadius="1.4em">{tooltip}</TooltipContainer>
      }
    >
      <div {...onMouseProps}>{titleComponent}</div>
    </TooltipProvider>
  );
};

export default ValueAndPercentCell;
