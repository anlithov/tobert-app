import React, { useState } from 'react';
import { useOutsideClick } from '../../../../../shared/lib/hooks/use-outside-click.hook.ts';

export const useDropdownControl = (props?: {
  disableOnOutsideClose?: boolean;
}): {
  onClickProps: {
    handleOpen(): void;
  };
  setShow: (v: boolean) => void;
  ref?: React.RefObject<any>;
  showDropdown: boolean;
} => {
  const [show, setShow] = useState(false);
  const ref = useOutsideClick({
    func: () => setShow(false),
  });

  return {
    onClickProps: {
      handleOpen: () => {
        setShow(!show);
      },
    },
    setShow,
    ref: !props?.disableOnOutsideClose ? ref : undefined,
    showDropdown: show,
  };
};
