import BigNumber from 'bignumber.js';

export const calcChangesMulti = (
  toCalcArr: {
    valueCurrent: string;
    valuePast: string;
  }[],
) => {
  const resultArr: {
    changes: string;
    percentChanges: string;
  }[] = [];
  for (const toCalcItems of toCalcArr) {
    resultArr.push(calcChanges(toCalcItems));
  }
  return resultArr;
};

export const calcChanges = ({
  valueCurrent,
  valuePast,
}: {
  valueCurrent: string;
  valuePast: string;
}): {
  changes: string;
  percentChanges: string;
} => {
  const valCurrent = parseFloat(valueCurrent);
  const valPast = parseFloat(valuePast);

  const returnObject = {
    changes: '0',
    percentChanges: '0',
  };
  const valueChanges = valCurrent - valPast;
  if (valCurrent === valPast) {
    return returnObject;
  } else if (valCurrent === 0) {
    if (valPast > 0) {
      returnObject.changes = String(valPast * -1);
      returnObject.percentChanges = '-100';
    } else {
      returnObject.changes = valuePast;
      returnObject.percentChanges = '100';
    }
    return returnObject;
  } else if (valPast === 0) {
    if (valCurrent > 0) {
      returnObject.changes = valueCurrent;
      returnObject.percentChanges = '100';
    } else {
      returnObject.changes = String(valPast * -1);
      returnObject.percentChanges = '-100';
    }
    return returnObject;
  }
  const value24hPercentChanges =
    (valueChanges / Math.abs(valPast)) * 100 ?? BigNumber(0);

  return {
    changes: valueChanges.toString(),
    percentChanges: value24hPercentChanges.toString(),
  };
};
