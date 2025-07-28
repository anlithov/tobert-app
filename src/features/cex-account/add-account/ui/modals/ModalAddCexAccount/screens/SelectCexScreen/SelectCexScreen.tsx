import React from 'react';
import Divider from '../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import ImageContainer from '../../../../../../../../zolp/shared/ui/atoms/ImageContainer/base/ImageContainer.tsx';
import {
  CexContainer,
  CexTitle,
  ContainerCexs,
} from './SelectCexScreen.styled.ts';
import { useSetAtom } from 'jotai';
import {
  atomCreateCexAccountCexName,
  atomCreateCexAccountScreen,
} from '../../model/position-deposit-manager.atoms.ts';
import { CexName } from '../../../../../../../../__graphql/generated.ts';
import { ADD_CEX_ACCOUNT_SCREENS } from '../../libs/constants/add-cex-accounts-tabs.const.ts';

const SelectCexScreen = () => {
  const setCexName = useSetAtom(atomCreateCexAccountCexName);
  const setScreen = useSetAtom(atomCreateCexAccountScreen);

  const selectCex = () => {
    setCexName(CexName.Binance);
    setScreen(ADD_CEX_ACCOUNT_SCREENS.ADD_ACCOUNT_FORM);
  };

  return (
    <>
      <Divider height="2em" />
      <ContainerCexs>
        <CexContainer onClick={selectCex}>
          <ImageContainer
            borderRadius="0"
            src="https://images.seeklogo.com/logo-png/59/2/binance-icon-logo-png_seeklogo-598330.png"
            width="10em"
          />

          <CexTitle>Binance</CexTitle>
        </CexContainer>
      </ContainerCexs>
    </>
  );
};

export default SelectCexScreen;
