import { FC } from 'react';
import { generateRandomNDigits } from '../../../../../lib/utils/generate-random-n-digits.util.ts';
import { sleep } from '../../../../../lib/helpers/sleep.ts';
import { create } from 'zustand/react';

export interface ModalProps {
  onClose: () => void;
  modalId: string;
  setDisableBackgroundClick: (bool: boolean) => void;
}

export interface ModalData {
  component: FC<ModalProps>;
  props?: any;
  onAddonClickBackground?: () => void;
  onRewriteClickBackground?: () => void;
  overlayBackgroundColor?: string;
  isShow: boolean;
}

type ModalsMap = Record<string, ModalData>;
type ModalStore = {
  modals: ModalsMap;
  setModals: (modals: ModalsMap) => void;
};
const useModalStore = create<ModalStore>()((set) => ({
  modals: {},
  setModals: (modals) => set({ modals }),
}));

interface SetNewModal<T> {
  id?: string;
  component: FC<T>;
  props: Omit<T, 'onClose' | 'modalId' | 'setDisableBackgroundClick'>;
  onAddonClickBackground?: () => void;
  onRewriteClickBackground?: () => void;
  overlayBackgroundColor?: string;
}

export const useModal = () => {
  const { modals, setModals } = useModalStore();

  const closeAllModals = () => {
    const allActiveModalKeys = Object.keys(modals);

    const newClosedModalsState: ModalsMap = {};
    for (const modalKey of allActiveModalKeys) {
      newClosedModalsState[modalKey] = {
        ...modals[modalKey],
        isShow: false,
      };
    }
    setModals(newClosedModalsState);
    if (!allActiveModalKeys.length) {
      return;
    }
    setTimeout(() => {
      setModals({});
    }, 200);
  };

  const closeModal = async (id: string) => {
    if (!(id in modals)) {
      return;
    }

    let newClosedModalsState = { ...modals };
    newClosedModalsState[id] = {
      ...newClosedModalsState[id],
      isShow: false,
    };
    setModals(newClosedModalsState);
    await sleep(200);
    if (id in newClosedModalsState) {
      delete newClosedModalsState[id];
    }
    setModals(newClosedModalsState);
  };

  const setModal = async <T extends ModalProps>(
    newModalParams: SetNewModal<T>,
  ) => {
    // Close old modal if not closed
    closeAllModals();
    await addModal(newModalParams);
  };

  const addModal = async <T extends ModalProps>(
    newModalParams: SetNewModal<T>,
  ) => {
    const modalId = newModalParams?.id || 'modal' + generateRandomNDigits(8);

    let newModalsState = { ...modals };

    newModalsState[modalId] = {
      ...newModalParams,
      isShow: false,
    } as ModalData;

    setModals(newModalsState);

    await sleep(100);

    newModalsState[modalId].isShow = true;
    // Make it visible
    setModals(newModalsState);

    return modalId;
  };

  const existsModalId = (id: string) => {
    return id in modals;
  };

  return {
    modals,
    closeAllModals,
    setModal,
    closeModal,
    addModal,
    existsModalId,
  };
};
