import React from 'react';
import CexAccountsContent from './content/CexAccountsContent.tsx';
import { useSetBrowserTabName } from '../../zolp/shared/lib/hooks/use-set-browser-tab-name.ts';

const CexAccountsPage = () => {
  useSetBrowserTabName('Cex Accounts');

  return <CexAccountsContent />;
};

export default CexAccountsPage;
