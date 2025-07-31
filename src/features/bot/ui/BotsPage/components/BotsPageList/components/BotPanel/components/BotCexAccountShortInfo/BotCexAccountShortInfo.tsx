import React, { FC } from 'react';
import { ApiKey, Container, Name } from './BotCexAccountShortInfo.styled.ts';
import {
  BotInfoOutput,
  CexAccountMetaOutput,
} from '../../../../../../../../../../__graphql/generated.ts';
import { shortDottedText } from '../../../../../../../../../../shared/lib/utils/short-dotted-text.util.ts';

interface Props {
  cexMeta: BotInfoOutput['cexMeta'];
  cexAccountMeta: CexAccountMetaOutput | null;
}
const BotCexAccountShortInfo: FC<Props> = ({ cexAccountMeta }) => {
  if (!cexAccountMeta) {
    return null;
  }

  return (
    <Container>
      <Name>{cexAccountMeta.name}</Name>
      <ApiKey>
        {shortDottedText(
          cexAccountMeta.apiKey ?? '***********************',
          5,
          5,
        )}
      </ApiKey>
    </Container>
  );
};

export default BotCexAccountShortInfo;
