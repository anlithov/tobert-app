import React from 'react';
import { Container } from '../ModalAddCexAccount.styled.ts';
import { ADD_CEX_ACCOUNT_SCREENS } from '../libs/constants/add-cex-accounts-tabs.const.ts';
import ReplacerDelayed from '../../../../../../../zolp/shared/ui/molecules/ReplacerDelayed/ReplacerDelayed.tsx';
import { useAtomValue } from 'jotai';
import { atomCreateCexAccountScreen } from '../model/position-deposit-manager.atoms.ts';
import AddAccountScreen from './AddAccountScreen/AddAccountScreen.tsx';
import AddCexAccountSuccessScreen from './AddCexAccountSuccessScreen/AddCexAccountSuccessScreen.tsx';
import SelectCexScreen from './SelectCexScreen/SelectCexScreen.tsx';

const AddCexAccountSteps = () => {
  const screen = useAtomValue(atomCreateCexAccountScreen);

  return (
    <ReplacerDelayed
      keySelected={screen}
      ContainerComponent={Container}
      components={{
        [ADD_CEX_ACCOUNT_SCREENS.SELECT_CEX]: <SelectCexScreen />,
        [ADD_CEX_ACCOUNT_SCREENS.ADD_ACCOUNT_FORM]: <AddAccountScreen />,
        [ADD_CEX_ACCOUNT_SCREENS.SUCCESS]: <AddCexAccountSuccessScreen />,
      }}
    />
  );
};

export default AddCexAccountSteps;
