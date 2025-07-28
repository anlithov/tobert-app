import React from 'react';
import ProtectedLayout from '../../app/layouts/ProtectedLayout/ProtectedLayout.tsx';
import CexAccountsContent from './content/CexAccountsContent.tsx';
import { useSetBrowserTabName } from '../../zolp/shared/lib/hooks/use-set-browser-tab-name.ts';

const CexAccountsPage = () => {
  useSetBrowserTabName('Cex Accounts');

  return (
    <ProtectedLayout>
      <CexAccountsContent />
    </ProtectedLayout>
  );
};

export default CexAccountsPage;
