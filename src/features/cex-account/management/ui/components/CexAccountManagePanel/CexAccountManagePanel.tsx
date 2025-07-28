import React, { FC } from 'react';
import { ButtonsSection, Container } from './CexAccountManagePanel.styled.ts';
import { useCexJwtsStore } from '../../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';
import UnlockCexAccountButton from './components/UnlockCexAccountButton/UnlockCexAccountButton.tsx';
import { CexAccountMetaOutput } from '../../../../../../__graphql/generated.ts';
import DeleteCexAccountButton from './components/DeleteCexAccountButton/DeleteCexAccountButton.tsx';
import ChangeCexAccountNameButton from './components/ChangeCexAccountNameButton/ChangeCexAccountNameButton.tsx';

interface Props {
  cexAccountInfo: CexAccountMetaOutput;
}
const CexAccountManagePanel: FC<Props> = ({ cexAccountInfo }) => {
  const { getJwtCexAccount } = useCexJwtsStore();
  const isJwt = getJwtCexAccount(cexAccountInfo.cexAccountId);

  return (
    <Container>
      <ButtonsSection>
        {cexAccountInfo.isJwtValid && isJwt ? (
          <>
            <ChangeCexAccountNameButton
              name={cexAccountInfo.name}
              cexAccountId={cexAccountInfo.cexAccountId}
            />
          </>
        ) : (
          <UnlockCexAccountButton
            cexAccountId={cexAccountInfo.cexAccountId}
            name={cexAccountInfo.name}
            image={cexAccountInfo?.image}
          />
        )}
        <DeleteCexAccountButton cexAccountId={cexAccountInfo.cexAccountId} />
      </ButtonsSection>
    </Container>
  );
};

export default CexAccountManagePanel;
