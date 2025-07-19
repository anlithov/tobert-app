import React, { useState } from 'react';
import { useOutsideClick } from '../../../../../../lib/hooks/use-outside-click.hook.ts';
import { useTimeout } from '../../../../../../lib/hooks/timer/use-timeout.hook.ts';

export const useClickTooltipControl = (props?: {
  disableOnOutsideClose?: boolean;
  visibilityTimeout: number;
}): {
  onClickProps: {
    handleOpen(): void;
  };
  setShow: (v: boolean) => void;
  ref?: React.RefObject<any>;
  showTooltip: boolean;
} => {
  const [show, setShow] = useState(false);
  const { reSetupTimeout } = useTimeout({
    timeout: 3000,
    onTimeout: () => {
      setShow(false);
    },
  });

  const ref = useOutsideClick({
    func: () => setShow(false),
  });

  return {
    onClickProps: {
      handleOpen: () => {
        if (!show) {
          setShow(true);
        }
        reSetupTimeout();
      },
    },
    setShow,
    ref: !props?.disableOnOutsideClose ? ref : undefined,
    showTooltip: show,
  };
};
