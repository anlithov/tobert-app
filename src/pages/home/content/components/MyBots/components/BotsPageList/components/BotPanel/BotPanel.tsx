import React, { FC, ReactNode } from 'react';
import {
  CexInfo,
  Container,
  ContainerCEXImage,
  CountRestImages,
  CurrentValue,
  ImagesContainer,
  Name,
  StatusContainer,
} from './BotPanel.styled.ts';
import {
  BotInfoOutput,
  CexAccountMetaOutput,
} from '../../../../../../../../../__graphql/generated.ts';
import ImagesCornered from '../../../../../../../../../zolp/shared/ui/atoms/ImageContainer/instances/ImagesCornered.tsx';
import Divider from '../../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import BotControls from './components/BotControls/BotControls.tsx';
import ButtonIconed from '../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { ICON_BUTTON_COLORS } from '../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/libs/constants/button-iconed-colors.const.ts';
import { RxCross1 } from 'react-icons/rx';
import { FiEdit3 } from 'react-icons/fi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { formRoundedFiatWithLowerZero } from '../../../../../../../../../zolp/shared/lib/utils/approximation.util.ts';
import BotPnlRoi from './components/BotPnlRoi/BotPnlRoi.tsx';
import ImageContainer from '../../../../../../../../../zolp/shared/ui/atoms/ImageContainer/base/ImageContainer.tsx';
import BotCexAccountShortInfo from './components/BotCexAccountShortInfo/BotCexAccountShortInfo.tsx';

interface Props {
  botInfo: BotInfoOutput;
  cexAccountMeta: CexAccountMetaOutput | null;
}
const BotPanel: FC<Props> = ({ botInfo, cexAccountMeta }) => {
  const images: {
    src?: ReactNode | string | null;
    cornerSrc?: string | null;
    opacity?: number;
  }[] = botInfo.symbolsStats.slice(0, 3).map((sym) => ({ src: sym.image }));
  if (botInfo.symbolsStats.length > 3) {
    images.push({
      src: (
        <CountRestImages>
          <span>+{botInfo.symbolsStats.length - 3}</span>
        </CountRestImages>
      ),
    });
  }

  return (
    <Container>
      <ContainerCEXImage>
        <ImageContainer src={botInfo.cexMeta.image} width="16em" />
      </ContainerCEXImage>
      <ImagesContainer>
        <ImagesCornered
          images={images}
          negativeMargin={0.5}
          imgWidth="2.6em"
          containerWidth="auto"
          reversed={false}
        />
      </ImagesContainer>
      <Divider width="2em" />
      <Name>
        <span>{botInfo.name}</span>
        <CexInfo>
          <ImageContainer src={botInfo.cexMeta.image} width="1.4em" />
          <span> BINANCE</span>
        </CexInfo>
      </Name>
      <BotCexAccountShortInfo
        cexAccountMeta={cexAccountMeta}
        cexMeta={botInfo.cexMeta}
      />
      <Divider width="2em" />
      <CurrentValue>
        <span>
          {formRoundedFiatWithLowerZero(botInfo.statsInfo.currentValue)}
        </span>
      </CurrentValue>
      <Divider width="2em" />
      <BotPnlRoi
        profitTaken={botInfo.statsInfo.profitTaken}
        costBasis={botInfo.statsInfo.costBasis}
      />
      <Divider width="2em" />
      <CurrentValue>
        <span>{formRoundedFiatWithLowerZero(botInfo.statsInfo.costBasis)}</span>
      </CurrentValue>
      <Divider width="4em" />
      <StatusContainer>
        <span>{botInfo.statusInfo.status}</span>
      </StatusContainer>
      <Divider width="2em" />
      <BotControls botInfo={botInfo} />
      <Divider width="2em" />
      <ButtonIconed
        variant="outlined"
        color={ICON_BUTTON_COLORS.secondary}
        width="3em"
        borderRadius="1em"
        title="View"
      >
        <MdOutlineRemoveRedEye size="1.4em" />
      </ButtonIconed>
      <Divider width="1em" />
      <ButtonIconed
        variant="outlined"
        color={ICON_BUTTON_COLORS.secondary}
        width="3em"
        borderRadius="1em"
        title="Edit"
      >
        <FiEdit3 size="1.4em" />
      </ButtonIconed>
      <Divider width="1em" />
      <ButtonIconed
        variant="outlined"
        color={ICON_BUTTON_COLORS.secondary}
        width="3em"
        borderRadius="1em"
        title="Delete"
      >
        <RxCross1 size="1.4em" />
      </ButtonIconed>
    </Container>
  );
};

export default BotPanel;
