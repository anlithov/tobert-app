import React, { FC } from 'react';
import { ModalProps } from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { Provider } from 'jotai';
import ModalChangeCexAccountNameContent from './ModalChangeCexAccountNameContent.tsx';

export interface ModalUnlockCexAccountProps extends ModalProps {
  name: string;
  cexAccountId: number;
}
const ModalChangeCexAccountName: FC<ModalUnlockCexAccountProps> = (props) => {
  return (
    <Provider>
      <ModalChangeCexAccountNameContent {...props} />
    </Provider>
  );
};

export default ModalChangeCexAccountName;
