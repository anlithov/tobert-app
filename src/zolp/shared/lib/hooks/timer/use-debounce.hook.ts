import React, { useEffect, useRef, useState } from 'react';

export const useDebounce = <T = null | string | number>(
  delay: number,
  value: T | null | string | number = null,
  callback?: () => void,
): {
  debouncedValue: T;
  isDebouncing: boolean;
  setDebouncedValue: React.Dispatch<
    React.SetStateAction<T | null | string | number>
  >;
} => {
  const valueToString: T | null | string | number =
    typeof value === 'number' || 'string' ? value : JSON.stringify(value);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  const [debouncedValue, setDebouncedValue] = useState<
    T | null | string | number
  >(valueToString);
  // Save old value
  const oldValueRef = useRef(valueToString);

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
  }, [valueToString]);

  let returnValue;
  if (
    typeof value === 'object' &&
    value &&
    debouncedValue &&
    typeof debouncedValue === 'string' &&
    typeof oldValueRef.current === 'string'
  ) {
    if (oldValueRef.current === valueToString) {
      returnValue = JSON.parse(oldValueRef.current);
    } else {
      returnValue = JSON.parse(debouncedValue);
    }
  } else {
    returnValue = debouncedValue;
  }
  return { debouncedValue: returnValue, isDebouncing, setDebouncedValue };
};
