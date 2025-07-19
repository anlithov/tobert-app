import React, { FC } from 'react';
import {
  formRoundedBigZeroOneLower,
  formRoundedFiat,
} from '../../../../../../../lib/utils/approximation.util.ts';
import { performanceVariantHelper } from '../../../../../../../shared/lib/helpers/performance-variant.helper.ts';
import { Container } from '../../PerformanceCell.styled.ts';
import { Percent, Value } from './PnLCell.styled.ts';

interface Props {
  value: number;
  percent: number;
}
const PnLCell: FC<Props> = ({ value, percent }) => {
  const result = formRoundedBigZeroOneLower(String(percent), {
    afterComaMax: 2,
    forceRound: true,
  });
  const performance = performanceVariantHelper(parseFloat(result));

  return (
    <Container performance={performance}>
      <Value>
        {value > 0 ? '+ ' : value < 0 ? '- ' : ''}
        {formRoundedFiat(Math.abs(value))}
      </Value>
      <Percent>
        {value > 0 ? '+ ' : value < 0 ? '- ' : ''}
        {formRoundedBigZeroOneLower(Math.abs(percent), {
          forceRound: true,
        })}
        %
      </Percent>
    </Container>
  );
};

export default PnLCell;
