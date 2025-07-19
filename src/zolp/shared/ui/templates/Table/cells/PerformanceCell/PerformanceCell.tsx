import React, { FC } from 'react';
import { Container, Percent } from './PerformanceCell.styled.ts';
import { performanceVariantHelper } from '../../../../../shared/lib/helpers/performance-variant.helper.ts';
import { formRoundedBigZeroOneLower } from '../../../../../lib/utils/approximation.util.ts';

interface Props {
  percent: number;
  percentFontSize?: string;
}
const PerformanceCell: FC<Props> = ({ percent, percentFontSize = '1.6em' }) => {
  const result = formRoundedBigZeroOneLower(String(Math.abs(percent)), {
    afterComaMax: 2,
    forceRound: true,
  });
  const performance = performanceVariantHelper(percent);

  return (
    <Container performance={performance}>
      <Percent fontSize={percentFontSize}>
        {percent > 0 ? '+ ' : percent < 0 ? '- ' : ''}
        {result || '-'}%
      </Percent>
    </Container>
  );
};

export default PerformanceCell;
