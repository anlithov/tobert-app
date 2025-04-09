import bn from 'bignumber.js';

/**
 * Use for USD balance
 *  Always digits after coma - 2
 *  Default symbol $
 *  Both for positive and negative e.g. /- $ 1,678.74/ $ 2,343.83 /
 *  eq 0 => 0.00
 *  less 0.001 => ~0.00
 *  less 0.01 => ~0.01
 *  1m => 1,000,000.00
 */
export const formRoundedFiat = (
  value: number | string,
  options?: {
    currencySymbol?: string;
    bignumberAliases?: boolean;
  },
) => {
  const currencySymbol = options?.currencySymbol ?? '$';
  const bignumberAliases = options?.bignumberAliases ?? true;

  const number = bn(value).toNumber();

  const negativeSignAndCurrency =
    number < 0 ? `- ${currencySymbol}` : currencySymbol;

  const numNeutral = Math.abs(number);
  if (numNeutral === 0) {
    return negativeSignAndCurrency + '0.00';
  }
  if (numNeutral < 0.001) {
    return negativeSignAndCurrency + '~0.00';
  }
  if (numNeutral < 0.01) {
    return negativeSignAndCurrency + '<' + '~0.01';
  }
  const bnNumbered = bn(numNeutral).toNumber();

  return (
    negativeSignAndCurrency +
    (number > 1000 && bignumberAliases
      ? bigNumberFormatter(String(numNeutral), {
          currencySymbol: '',
        })
      : bnNumbered
          .toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          })
          .slice(1))
  );
};

/**
 * Use for USD price
 */
export const formRoundedFiatWithLowerZero = (
  value: number | string,
  options?: {
    afterComaMax?: number;
    forceRound?: boolean;
    maxZeroesAfterComa?: number;
    currencySymbol?: string;
    bignumberAliases?: boolean;
  },
) => {
  const afterComaMax = options?.afterComaMax ?? 2;
  const forceRound = options?.forceRound ?? true;
  const maxZeroesAfterComa = options?.maxZeroesAfterComa;
  const currencySymbol = options?.currencySymbol ?? '$';
  const bignumberAliases = options?.bignumberAliases ?? true;

  const number = bn(value).toNumber();

  const signAndCurrency = number < 0 ? `- ${currencySymbol}` : currencySymbol;

  const numNeutral = Math.abs(number);

  if (numNeutral === 0) {
    return signAndCurrency + '0.00';
  }
  const bnNumbered = bn(numNeutral).toNumber();

  if (bnNumbered > 1000) {
    return (
      signAndCurrency +
      (bignumberAliases
        ? bigNumberFormatter(String(numNeutral), {
            currencySymbol: '',
          })
        : bnNumbered
            .toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            })
            .slice(1))
    );
  } else if (bnNumbered > 1) {
    const resolved = formRoundedPositiveNum(String(bnNumbered), afterComaMax);

    const divided = resolved.split('.');

    if (divided.length === 2) {
      let floats = divided[1];
      if (floats.length < 2) {
        if (floats.length === 1) {
          floats += '0';
        } else {
          floats += '00';
        }
      }
      return signAndCurrency + divided[0] + '.' + floats;
    } else {
      return signAndCurrency + divided + '.00';
    }
  } else {
    if (forceRound) {
      return (
        signAndCurrency +
        formRoundedBigger0Lower1ForcedFixed(String(bnNumbered), afterComaMax)
      );
    }
    const res = formRoundedBigger0Lower1(
      String(bnNumbered),
      afterComaMax,
      maxZeroesAfterComa,
    );

    return signAndCurrency + res;
  }
};

export const formRoundedBigZeroOneLower = (
  num: string | number,
  options?: {
    afterComaMax?: number;
    forceRound?: boolean;
    maxZeroesAfterComa?: number;
  },
) => {
  const afterComaMax = options?.afterComaMax ?? 4;
  const forceRound = options?.forceRound ?? false;

  const number = bn(num).toNumber();

  const sign = number < 0 ? `-` : '';

  const numNeutral = Math.abs(number);
  if (!numNeutral) {
    return '0.0';
  }
  const dividedNum = String(num).split('.');
  const bnNumbered = bn(num).toNumber();

  if (bnNumbered > 1000) {
    return bigNumberFormatter(String(bnNumbered), {
      currencySymbol: '',
    });
  } else if (bnNumbered > 1) {
    const integers = dividedNum[0];
    const floats = `0.${dividedNum[1] || 0}`;

    let resolvedFloats = bn(floats).toFixed(afterComaMax);
    let tail = '';
    const splitedResolved = resolvedFloats.split('.');
    if (splitedResolved[1]) {
      tail = removeTrailingZeros(splitedResolved[1]);
    }
    if (tail.length < splitedResolved[1]?.length) {
      resolvedFloats = `0.${tail}`;
    }
    return `${integers}${
      resolvedFloats.length > 2 ? `.${resolvedFloats.slice(2)}` : ''
    }`;
  } else {
    if (forceRound) {
      return (
        sign +
        formRoundedBigger0Lower1ForcedFixed(String(bnNumbered), afterComaMax)
      );
    }
    const res = formRoundedBigger0Lower1(
      String(bnNumbered),
      afterComaMax,
      options?.maxZeroesAfterComa,
    );

    return sign + res;
  }
};

const bigNumberFormatter = (
  num: string,
  options?: {
    afterComaMax?: number;
    roundFromZeros?: number;
    currencySymbol?: string;
  },
): string => {
  const currencySymbol =
    typeof options?.currencySymbol === 'string' ? options.currencySymbol : '$';
  const afterComaMax = options?.afterComaMax ?? 2;
  const roundFromZeros = options?.roundFromZeros ?? 3;

  let lookup = [
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'm' },
    { value: 1e9, symbol: 'bn' },
    { value: 1e12, symbol: 't' },
    { value: 1e15, symbol: 'qd' },
    { value: 1e18, symbol: 'qn' },
    { value: 1e21, symbol: 'sx' },
    { value: 1e24, symbol: 'sp' },
    { value: 1e27, symbol: 'oct' },
    { value: 1e30, symbol: 'non' },
    { value: 1e33, symbol: 'dc' },
    { value: 1e36, symbol: 'udc' },
    { value: 1e39, symbol: 'ddc' },
    { value: 1e42, symbol: 'tdc' },
    { value: 1e45, symbol: 'qtc' },
    { value: 1e49, symbol: 'qidc' },
    { value: 1e51, symbol: 'sdc' },
    { value: 1e54, symbol: 'sepc' },
  ];
  lookup = lookup.filter((look) =>
    bn(look.value).isGreaterThanOrEqualTo(bn(10).pow(roundFromZeros)),
  );
  const item = lookup
    .slice()
    .reverse()
    .find((el) => {
      return bn(num).isGreaterThanOrEqualTo(el.value);
    });

  return item?.value
    ? `${currencySymbol}${
        formRoundedPositiveNum(
          bn(num).div(bn(item.value)).toString(),
          afterComaMax,
        ) + item.symbol
      }`
    : currencySymbol + num;
};

const formRoundedPositiveNum = (
  num: string | number,
  afterComaMax = 2,
): string => {
  const number = bn(num).toNumber();

  const negativeSignAndCurrency = number < 0 ? `- ` : '';

  const numNeutral = Math.abs(number);

  if (numNeutral < 0.001) {
    return negativeSignAndCurrency + '~0.00';
  }
  if (numNeutral < 0.01) {
    return negativeSignAndCurrency + '<' + '0.01';
  }
  const numStage = num;
  if (!numStage) {
    return '0';
  }
  const delimiter = bn(10).pow(afterComaMax);
  // 1 / delimeter * 10
  let res: string | bn = bn(bn(1).div(delimiter)).times(10);
  if (bn(numStage).isLessThan(res)) {
    res = res.toFixed(afterComaMax);
  } else {
    res = bn(num).toFixed(afterComaMax);
  }

  return removeTrailingZeros(res);
};

const formRoundedBigger0Lower1ForcedFixed = (
  num: string | number,
  afterComa = 4,
): string => {
  const fixedFloats = bn(num).toFixed(afterComa);
  if (parseFloat(fixedFloats) === 0) {
    return '0';
  }
  const result = removeTrailingZeros(fixedFloats);

  if (result.endsWith('.')) {
    return result.slice(0, -1);
  }

  return result;
};

const formRoundedBigger0Lower1 = (
  num: string | number,
  afterComa = 4,
  maxZeroesAfterComa?: number,
): string => {
  const numStr = bn(num).toFixed();

  if (numStr === '0') {
    return '0';
  }
  if (!numStr.includes('.')) {
    return numStr;
  }
  const splitter = numStr.split('.');
  const starterFixed = splitter[0];
  const withoutStarterDot = splitter[1];
  let zeroesPart = '.';
  let consistentPart = '';
  let startingZerosEnded = false;

  const literals = withoutStarterDot.split('');
  for (let i = 0; i < literals.length; i++) {
    const literal = literals[i];
    if (!startingZerosEnded && literal === '0') {
      zeroesPart += literal;
    } else {
      if (!startingZerosEnded) {
        startingZerosEnded = true;
      }
      if (consistentPart.length <= afterComa) {
        consistentPart += afterComa - 1 === 0 && literal === '0' ? '' : literal;
      } else {
        break;
      }
    }
  }

  const withAfterComa = `${starterFixed}${zeroesPart}${
    removeTrailingZeros(consistentPart.slice(0, afterComa)) ?? 1
  }`;

  if (!maxZeroesAfterComa) {
    return withAfterComa;
  }

  const divided = withAfterComa.split('.');
  let floats = divided?.[1] ?? '';
  if (floats.length === 1) {
    floats += '0';
  }

  const resultNum = !num
    ? '0'
    : `${
        Number.isInteger(parseFloat(withAfterComa))
          ? withAfterComa + '.00'
          : divided[0] + '.' + floats
      }`;
  const maxZeroesAndRounded = `0.${'0'.repeat(maxZeroesAfterComa)}1`;
  if (bn(resultNum).lt(maxZeroesAndRounded)) {
    return maxZeroesAndRounded;
  } else {
    return resultNum;
  }
};

const removeTrailingZeros = (num: string) => {
  let tailResult = '';
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== '0') {
      tailResult = num.slice(0, i + 1);
      break;
    }
  }

  return tailResult;
};
