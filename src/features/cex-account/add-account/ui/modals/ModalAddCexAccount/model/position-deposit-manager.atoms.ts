import { atom } from 'jotai';
import {
  ADD_CEX_ACCOUNT_SCREENS,
  AddCexAccountScreens,
} from '../libs/constants/add-cex-accounts-tabs.const.ts';
import { CexName } from '../../../../../../../__graphql/generated.ts';

export const atomCreateCexAccountScreen = atom<AddCexAccountScreens>(
  ADD_CEX_ACCOUNT_SCREENS.SELECT_CEX,
);

export const atomCreateCexAccountModalId = atom<null | string>(null);

export const atomCreateCexAccountCexName = atom<CexName | null>(null);
