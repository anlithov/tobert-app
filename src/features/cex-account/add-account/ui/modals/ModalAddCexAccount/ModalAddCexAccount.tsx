import React, { FC } from 'react';
import ModalAddCexAccountContent from './ModalAddCexAccountContent.tsx';
import { ModalProps } from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { Provider } from 'jotai';

const ModalAddCexAccount: FC<ModalProps> = (props) => {
  return (
    <Provider>
      <ModalAddCexAccountContent {...props} />
    </Provider>
  );
};

export default ModalAddCexAccount;
