import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

export const useTimeoutRecoil = (
  atomSwapReadyButtonTimeout: RecoilState<null | number>,
  options: {
    timeout: number;
    onTimeout?: () => void;
    checkEvery?: number;
  },
) => {
  const checkEvery = options?.checkEvery ?? 1000;

  const [millisecondsLeft, setMillisecondsLeft] = useRecoilState(
    atomSwapReadyButtonTimeout,
  );

  const timer = useRef<null | NodeJS.Timer>(null);

  useEffect(() => {
    // useRef value stored in .current property
    if (typeof millisecondsLeft === 'number' && millisecondsLeft) {
      timer.current = setInterval(
        () =>
          setMillisecondsLeft((oldLeft) => {
            if (oldLeft && oldLeft >= checkEvery) {
              return oldLeft - checkEvery;
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
    if (millisecondsLeft === 0 && options?.onTimeout) {
      options.onTimeout();
    }
  }, [millisecondsLeft === 0]);

  const reSetupTimeout = () => {
    setMillisecondsLeft(options.timeout);
  };

  return {
    reSetupTimeout,
    setMillisecondsLeft,
    millisecondsLeft,
  };
};
