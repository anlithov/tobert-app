import { useEffect, useRef, useState } from 'react';

export const useTimeout = (options: {
  timeout: number;
  onTimeout?: () => void;
  checkEvery?: number;
}) => {
  const checkEvery = options?.checkEvery ?? 1000;

  const [millisecondsLeft, setMillisecondsLeft] = useState<null | number>(null);

  const timer = useRef<null | NodeJS.Timer>(null);

  useEffect(() => {
    // useRef value stored in .current property
    if (typeof millisecondsLeft === 'number' && millisecondsLeft) {
      timer.current = setInterval(
        () =>
          setMillisecondsLeft((oldLeft) => {
            if (oldLeft && oldLeft >= checkEvery) {
              return oldLeft - checkEvery;
            } else if (oldLeft && oldLeft > 0) {
              return 0;
            } else {
              return null;
            }
          }),
        millisecondsLeft >= checkEvery ? checkEvery : millisecondsLeft,
      );
    }

    // clear on component unmount
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [typeof millisecondsLeft]);

  useEffect(() => {
    // useRef value stored in .current property
    setMillisecondsLeft(null);
    if (millisecondsLeft === 0 && options?.onTimeout) {
      options.onTimeout();
    }
  }, [millisecondsLeft === 0]);

  const reSetupTimeout = () => {
    setMillisecondsLeft(null);
    setMillisecondsLeft(options.timeout);
  };

  return {
    reSetupTimeout,
    setMillisecondsLeft,
    millisecondsLeft,
  };
};
