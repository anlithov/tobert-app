import React, { FC } from 'react';
import { PnlValue } from './BotPnlRoi.styled.ts';
import { TextWithPolarity } from '../../../../../../../../../../zolp/shared/ui/atoms/Texts/TextWithPolarity/TextWithPolarity.styled.tsx';
import { formRoundedBigZeroOneLower } from '../../../../../../../../../../zolp/shared/lib/utils/approximation.util.ts';
import { calcChanges } from '../../../../../../../../../../zolp/shared/lib/utils/calc-changes.util.ts';

interface Props {
  costBasis: number;
  profitTaken: number;
}
const BotPnlRoi: FC<Props> = ({ profitTaken, costBasis }) => {
  const sign = profitTaken > 0 ? '+' : '-';
  const polarity = profitTaken > 0 ? 'positive' : 'negative';
  const { percentChanges } = calcChanges({
    valueCurrent: String(costBasis + profitTaken),
    valuePast: String(costBasis),
  });

  return (
    <PnlValue>
      <TextWithPolarity polarity={polarity}>
        <span style={{ fontSize: '1.5em' }}>
          {sign}$
          {formRoundedBigZeroOneLower(Math.abs(profitTaken), {
            afterComaMax: 2,
          })}
        </span>
      </TextWithPolarity>
      <TextWithPolarity polarity={polarity}>
        <span style={{ fontSize: '1.3em' }}>
          {sign}
          {formRoundedBigZeroOneLower(Math.abs(parseFloat(percentChanges)), {
            afterComaMax: 2,
          })}
          %
        </span>
      </TextWithPolarity>
    </PnlValue>
  );
};

export default BotPnlRoi;
