import React, { FC, ReactNode } from 'react';
import {
  Container,
  ContainerCEXImage,
  ContainerInfo,
  ContainerInline,
  ContainerMetaText,
  Hint,
  Id,
  Locked,
  Name,
} from './CexAccountCard.styled.ts';
import { CexAccountMetaOutput } from '../../../../__graphql/generated.ts';
import ImageContainer from '../../../../zolp/shared/ui/atoms/ImageContainer/base/ImageContainer.tsx';
import { RiErrorWarningFill } from 'react-icons/ri';
import { shortDottedText } from '../../../../shared/lib/utils/short-dotted-text.util.ts';

interface Props {
  cexAccountInfo: CexAccountMetaOutput;
  PanelComponent: ReactNode;
}
const CexAccountCard: FC<Props> = ({ cexAccountInfo, PanelComponent }) => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerCEXImage>
          <ImageContainer
            borderRadius="0"
            src={cexAccountInfo.image}
            width="32em"
          />
        </ContainerCEXImage>
        <ContainerMetaText>
          <ContainerInline>
            <Hint>Your CEX Account Name | API Keys alias</Hint>
            <Name>
              <span>{cexAccountInfo.name}</span>
              {!cexAccountInfo.isJwtValid && (
                <RiErrorWarningFill size="2em" color="#cfbf52" />
              )}
            </Name>
          </ContainerInline>
          <ContainerInline>
            <Hint>API KEY</Hint>
            {cexAccountInfo.apiKey ? (
              <Id>
                <span>{shortDottedText(cexAccountInfo.apiKey, 15, 10)}</span>
              </Id>
            ) : (
              <Locked>
                <span>Unavailable. Unlock account to see</span>
              </Locked>
            )}
          </ContainerInline>
        </ContainerMetaText>
      </ContainerInfo>
      {PanelComponent}
    </Container>
  );
};

export default CexAccountCard;
