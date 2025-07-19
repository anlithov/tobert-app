import React, { FC } from 'react';
import {
  formRoundedBigZeroOneLower,
  formRoundedFiat,
  formRoundedFiatWithLowerZero,
} from '../../../../../../../lib/utils/approximation.util.ts';
import ValueAndPercentCell from '../../ValueAndPercentCell.tsx';
import { Percent, Value } from './AssetValueWithPnLCell.styled.ts';

interface Props {
  usdValue: number;
  usdProfitLoss: number | null;
}
const AssetValueWithPnLCell: FC<Props> = ({ usdValue, usdProfitLoss }) => {
  let pnlPercent = usdProfitLoss
    ? (usdProfitLoss / (usdValue - usdProfitLoss)) * 100
    : 0;
  let polarity: 'negative' | 'positive' | 'neutral' = 'neutral';
  if (usdProfitLoss) {
    polarity =
      usdProfitLoss > 0.01
        ? 'positive'
        : usdProfitLoss <= -0.01
          ? 'negative'
          : 'neutral';
  }

  if (polarity === 'neutral') {
    pnlPercent = 0;
  }
  const usdPnl = usdProfitLoss
    ? `(${formRoundedFiatWithLowerZero(usdProfitLoss, {
        afterComaMax: 2,
        forceRound: true,
      })})`
    : '';

  return (
    <ValueAndPercentCell
      title={<Value>{formRoundedFiat(usdValue)}</Value>}
      subTitle={
        <Percent>
          {formRoundedBigZeroOneLower(String(Math.abs(pnlPercent)), {
            afterComaMax: 2,
            forceRound: true,
          })}
          % {usdPnl}
        </Percent>
      }
      polarity={polarity}
    />
  );
};

export default AssetValueWithPnLCell;
