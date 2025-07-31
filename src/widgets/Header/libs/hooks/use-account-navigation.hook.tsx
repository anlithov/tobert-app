import { ReactNode, useMemo } from 'react';
import { ROUTES_NAMES } from '../../../../shared/lib/constants/routes-names.const.ts';
import { useIntl } from 'react-intl';
import { headerMessages } from '../messages/header.messages.ts';

export const useAccountNavigation = (): {
  link?: string;
  onAfterClick?: () => void;
  text: ReactNode;
  disabled?: boolean;
}[] => {
  const intl = useIntl();

  return useMemo(
    () => [
      {
        link: ROUTES_NAMES.HOME,
        text: intl.formatMessage(headerMessages.home),
        disabled: false,
      },
      {
        link: ROUTES_NAMES.CEX_ACCOUNTS,
        text: intl.formatMessage(headerMessages.myCexAccounts),
        disabled: false,
      },
    ],
    [],
  );
};
