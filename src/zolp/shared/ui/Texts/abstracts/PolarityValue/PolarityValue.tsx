import React, { FC, useMemo } from 'react';
import { formRoundedBigZeroOneLower } from '../../../../lib/utils/approximation.util.ts';
import { Container } from './PolarityValue.styled.ts';
import bn from 'bignumber.js';

interface Props {
  value: number | string;
  symbol?: string;
  fontSize?: string;
  lineHeight?: number;
  fontWeight?: string;
}
const PolarityValue: FC<Props> = ({ value, fontSize, fontWeight, symbol }) => {
  const changesOnlyValue = Math.abs(bn(value).toNumber());

  const polarity = useMemo(() => {
    if (!value) {
      return 'neutral';
    }
    if (bn(value).gt(0)) {
      return 'positive';
    }
    if (bn(value).lt(0)) {
      return 'negative';
    }

    return 'neutral';
  }, [value]);

  return (
    <Container
      polarity={polarity}
      amountFontSize={fontSize}
      amountFontWeight={fontWeight}
    >
      {polarity === 'positive' && '+'}
      {polarity === 'negative' && '-'} {symbol}
      {!value
        ? '-'
        : formRoundedBigZeroOneLower(String(changesOnlyValue), {
            afterComaMax: 2,
            forceRound: true,
          })}
    </Container>
  );
};

export default PolarityValue;
