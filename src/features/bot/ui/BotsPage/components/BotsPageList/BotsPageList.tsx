import React from 'react';
import { Container, ContainerHeader } from './BotsPageList.styled.ts';
import Accordion from '../../../../../../zolp/shared/ui/atoms/Accordion/Accordion.tsx';
import { useBotsPagePreconfigured } from '../../libs/hooks/use-bots-page-preconfigured.hook.ts';
import BotPanel from './components/BotPanel/BotPanel.tsx';
import Divider from '../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { useCexAccountsList } from '../../../../../cex-account/list/libs/hooks/use-cex-accounts-list.hook.ts';
import { CexAccountMetaOutput } from '../../../../../../__graphql/generated.ts';

const BotsPageList = () => {
  const { data } = useBotsPagePreconfigured();
  const { list: cexAccountsList } = useCexAccountsList();

  return (
    <Container>
      <ContainerHeader>
        <div style={{ width: '8em' }}>
          <span>Coins</span>
        </div>
        <Divider width="2em" />
        <div style={{ flex: '1' }}>
          <span>Name</span>
        </div>
        <div style={{ display: 'flex', width: '10em' }}>
          <span>CEX Account</span>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '12em' }}
        >
          <span>Current</span>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '14em' }}
        >
          <span>PnL/ROI</span>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '12em' }}
        >
          <span>Cost Basis</span>
        </div>
        <Divider width="4em" />
        <div style={{ width: '8em' }}>
          <span>Status</span>
        </div>
        <Divider width="2em" />
        <div style={{ width: '24.6em' }}>
          <span>Control</span>
        </div>
      </ContainerHeader>
      {data.map((bot) => {
        const cexAccountMeta: CexAccountMetaOutput | null =
          cexAccountsList.find(
            (cexAccount) =>
              cexAccount.cexAccountId === bot.cexMeta.cexAccountId,
          ) ?? null;

        return (
          <Accordion
            padding="0 1.6em 0 0"
            name={String(bot.botId)}
            controlChildren={
              <BotPanel botInfo={bot} cexAccountMeta={cexAccountMeta} />
            }
            width="100%"
          />
        );
      })}
    </Container>
  );
};

export default BotsPageList;
