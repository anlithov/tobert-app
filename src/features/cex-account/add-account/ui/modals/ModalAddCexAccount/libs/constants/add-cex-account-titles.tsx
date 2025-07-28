import {
  ADD_CEX_ACCOUNT_SCREENS,
  AddCexAccountScreens,
} from './add-cex-accounts-tabs.const.ts';
import { modalAddCexAccountMessages } from '../messages/modal-add-cex-account.messages.ts';
import { FormattedMessage } from 'react-intl';
import { ReactNode } from 'react';

export const ADD_CEX_ACCOUNT_TITLES: Record<
  AddCexAccountScreens,
  {
    title: ReactNode;
    subTitle: ReactNode;
  } | null
> = {
  [ADD_CEX_ACCOUNT_SCREENS.SELECT_CEX]: {
    title: <FormattedMessage {...modalAddCexAccountMessages.chooseTitle} />,
    subTitle: (
      <FormattedMessage {...modalAddCexAccountMessages.chooseDescription} />
    ),
  },
  [ADD_CEX_ACCOUNT_SCREENS.ADD_ACCOUNT_FORM]: {
    title: <FormattedMessage {...modalAddCexAccountMessages.addTitle} />,
    subTitle: (
      <FormattedMessage {...modalAddCexAccountMessages.addDescription} />
    ),
  },
  [ADD_CEX_ACCOUNT_SCREENS.SUCCESS]: null,
};
