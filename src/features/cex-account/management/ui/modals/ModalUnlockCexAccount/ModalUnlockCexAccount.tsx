import React, { FC } from 'react';
import ModalUnlockCexAccountContent from './ModalUnlockCexAccountContent.tsx';
import { ModalProps } from '../../../../../../zolp/shared/ui/templates/Modal/lib/hook/use-modal.hook.ts';
import { Provider } from 'jotai';

export interface ModalUnlockCexAccountProps extends ModalProps {
  name: string;
  cexAccountId: number;
  image?: string | null;
}
const ModalUnlockCexAccount: FC<ModalUnlockCexAccountProps> = (props) => {
  return (
    <Provider>
      <ModalUnlockCexAccountContent {...props} />
    </Provider>
  );
};

export default ModalUnlockCexAccount;
