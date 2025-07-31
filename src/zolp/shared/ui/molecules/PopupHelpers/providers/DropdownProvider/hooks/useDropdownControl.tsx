import React, { useState } from 'react';
import { useOutsideClick } from '../../../../../../lib/hooks/use-outside-click.hook.ts';

export const useDropdownControl = (props?: {
  disableOnOutsideClose?: boolean;
}): {
  onClickProps: {
    onClick(): void;
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
      onClick: () => {
        setShow(!show);
      },
    },
    setShow,
    ref: !props?.disableOnOutsideClose ? ref : undefined,
    showDropdown: show,
  };
};
