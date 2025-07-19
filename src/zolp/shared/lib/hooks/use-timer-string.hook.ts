import { useEffect } from 'react';
import { useTimeout } from './timer/use-timeout.hook.ts';

export const useTimerString = () => {
  const { millisecondsLeft, reSetupTimeout, setMillisecondsLeft } = useTimeout({
    timeout: 0,
    checkEvery: 1000,
  });

  useEffect(() => {
    reSetupTimeout();
  }, []);

  let timer = '00:00:00';
  if (millisecondsLeft) {
    const hoursLeft = Math.floor(millisecondsLeft / 1000 / 60 / 60);
    const minutesLeft =
      Math.floor(millisecondsLeft / 1000 / 60) - hoursLeft * 60;

    const secondsLeft =
      Math.floor(millisecondsLeft / 1000) -
      Math.floor(millisecondsLeft / 1000 / 60) * 60;

    const hoursLeftWith0 = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    const minutesLeftWith0 = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    const secondsLeftWith0 = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    timer = `${hoursLeftWith0}:${minutesLeftWith0}:${secondsLeftWith0}`;
  }

  return {
    timer,
    setTimer: setMillisecondsLeft,
    reSetupTimeout,
  };
};
