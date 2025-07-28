import {
  AddCexAccountScreens,
  UNLOCK_CEX_ACCOUNT_SCREENS,
} from './unlock-cex-accounts-tabs.const.ts';
import { modalUnlockCexAccountMessages } from '../messages/modal-unlock-cex-account.messages.ts';
import { FormattedMessage } from 'react-intl';
import { ReactNode } from 'react';

export const ADD_CEX_ACCOUNT_TITLES: Record<
  AddCexAccountScreens,
  {
    title: ReactNode;
    subTitle: ReactNode;
  } | null
> = {
  [UNLOCK_CEX_ACCOUNT_SCREENS.PASSWORD_FORM]: {
    title: <FormattedMessage {...modalUnlockCexAccountMessages.addTitle} />,
    subTitle: (
      <FormattedMessage {...modalUnlockCexAccountMessages.addDescription} />
    ),
  },
  [UNLOCK_CEX_ACCOUNT_SCREENS.SUCCESS]: null,
};
