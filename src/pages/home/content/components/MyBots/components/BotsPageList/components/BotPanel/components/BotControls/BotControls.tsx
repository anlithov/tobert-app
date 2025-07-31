import React, { FC } from 'react';
import BotControlButton from './components/BotControlButton/BotControlButton.tsx';
import {
  BotInfoOutput,
  BotInternalStatus,
} from '../../../../../../../../../../../__graphql/generated.ts';
import { Container } from './BotControls.styled.ts';

interface Props {
  botInfo: BotInfoOutput;
}
const BotControls: FC<Props> = ({ botInfo }) => {
  return (
    <Container>
      {botInfo.statusInfo.status !== BotInternalStatus.Stopped && (
        <BotControlButton
          type={
            botInfo.statusInfo.status === BotInternalStatus.Running
              ? 'pause'
              : 'resume'
          }
        />
      )}
      <BotControlButton type="stop" />
    </Container>
  );
};

export default BotControls;
