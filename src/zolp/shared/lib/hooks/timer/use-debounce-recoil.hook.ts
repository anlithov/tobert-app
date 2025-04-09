import { useEffect, useRef, useState } from 'react';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';

const parseValue = <T>(
  value: T,
  debouncedValue: T | string,
  oldCurrent: string | number | T | null,
  valueToString: T | string,
) => {
  let returnValue;
  if (
    typeof value === 'object' &&
    value &&
    debouncedValue &&
    typeof debouncedValue === 'string' &&
    typeof oldCurrent === 'string'
  ) {
    if (oldCurrent === valueToString) {
      returnValue = JSON.parse(oldCurrent);
    } else {
      returnValue = JSON.parse(debouncedValue);
    }
  } else {
    returnValue = debouncedValue;
  }

  return returnValue;
};

export const useDebounceRecoil = <T>(
  {
    atomLoading,
    atomDebouncedValue,
    atomToBeDebouncedValue,
  }: {
    atomLoading: RecoilState<boolean>;
    atomDebouncedValue: RecoilState<T>;
    atomToBeDebouncedValue: RecoilState<T>;
  },
  delay: number,
  callback?: () => void,
) => {
  const value = useRecoilValue(atomToBeDebouncedValue);
  const valueToString: T | null | string | number =
    typeof value === 'number' || 'string' ? value : JSON.stringify(value);
  const [isDebouncing, setIsDebouncing] = useRecoilState<boolean>(atomLoading);
  const [debouncedValue, setDebouncedValue] = useState(valueToString);
  const [debouncedValueFinal, setDebouncedValueFinal] =
    useRecoilState(atomDebouncedValue);
  // Save old value
  const oldValueRef = useRef<T | null | string | number>(valueToString);

  useEffect(() => {
    // Change state only if there is difference in data

    if (oldValueRef.current !== valueToString) {
      setIsDebouncing(true);

      const handler = setTimeout(() => {
        setDebouncedValue(valueToString);
        if (callback) {
          callback();
        }

        oldValueRef.current = valueToString;

        setIsDebouncing(false);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedValue(valueToString);
      setIsDebouncing(false);
    }
  }, [value]);

  useEffect(() => {
    const parsedValue = parseValue<T>(
      value,
      debouncedValue,
      oldValueRef.current,
      valueToString,
    );
    if (parsedValue !== debouncedValueFinal) {
      setDebouncedValueFinal(parsedValue);
    }
  }, [value, debouncedValue, oldValueRef.current, valueToString]);

  return { debouncedValue: debouncedValueFinal, isDebouncing };
};
