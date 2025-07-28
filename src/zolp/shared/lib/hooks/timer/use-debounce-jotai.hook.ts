import { useEffect, useRef, useState } from 'react';
import { PrimitiveAtom, useAtom, useAtomValue } from 'jotai';

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

export const useDebounceJotai = <T>(
  {
    atomLoading,
    atomDebouncedValue,
    atomToBeDebouncedValue,
  }: {
    atomLoading: PrimitiveAtom<boolean>;
    atomDebouncedValue: PrimitiveAtom<T>;
    atomToBeDebouncedValue: PrimitiveAtom<T>;
  },
  delay: number,
  callback?: () => void,
) => {
  const value = useAtomValue(atomToBeDebouncedValue);
  const valueToString: T | null | string | number =
    typeof value === 'number' || 'string' ? value : JSON.stringify(value);
  const [isDebouncing, setIsDebouncing] = useAtom(atomLoading);
  const [debouncedValue, setDebouncedValue] = useState(valueToString);
  const [debouncedValueFinal, setDebouncedValueFinal] =
    useAtom(atomDebouncedValue);
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
