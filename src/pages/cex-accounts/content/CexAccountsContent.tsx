import React from 'react';
import { Container } from '../CexAccountsContent.styled.ts';
import CexAccountCard from '../../../entities/cex-account/ui/CexAccountCard/CexAccountCard.tsx';
import { useCexAccountsList } from '../../../features/cex-account/list/libs/hooks/use-cex-accounts-list.hook.ts';
import AddCexAccountButton from '../../../features/cex-account/add-account/ui/components/AddCexAccountButton/AddCexAccountButton.tsx';
import CexAccountManagePanel from '../../../features/cex-account/management/ui/components/CexAccountManagePanel/CexAccountManagePanel.tsx';

const CexAccountsContent = () => {
  const { list } = useCexAccountsList();

  return (
    <Container>
      {list.map((cexAccountInfo) => (
        <CexAccountCard
          key={cexAccountInfo.cexAccountId}
          cexAccountInfo={cexAccountInfo}
          PanelComponent={
            <CexAccountManagePanel cexAccountInfo={cexAccountInfo} />
          }
        />
      ))}
      <AddCexAccountButton />
    </Container>
  );
};

export default CexAccountsContent;
