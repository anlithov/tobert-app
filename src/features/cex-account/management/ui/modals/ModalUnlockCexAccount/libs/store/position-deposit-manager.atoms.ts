import { atom } from 'jotai';
import {
  UNLOCK_CEX_ACCOUNT_SCREENS,
  UnlockCexAccountScreens,
} from '../constants/unlock-cex-accounts-tabs.const.ts';

export const atomUnlockCexAccountScreen = atom<UnlockCexAccountScreens>(
  UNLOCK_CEX_ACCOUNT_SCREENS.PASSWORD_FORM,
);

export const atomUnlockCexAccountModalId = atom<null | string>(null);
