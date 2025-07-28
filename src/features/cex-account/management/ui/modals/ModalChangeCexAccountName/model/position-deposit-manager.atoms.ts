import { atom } from 'jotai';
import {
  UNLOCK_CEX_ACCOUNT_SCREENS,
  UnlockCexAccountScreens,
} from '../libs/constants/unlock-cex-accounts-tabs.const.ts';

export const atomChangeCexAccountNameScreen = atom<UnlockCexAccountScreens>(
  UNLOCK_CEX_ACCOUNT_SCREENS.PASSWORD_FORM,
);

export const atomChangeCexAccountNameModalId = atom<null | string>(null);
