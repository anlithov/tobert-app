import React from 'react';
import { BoxButtons, Container } from './ShowcaseButtons.styled';
import { ButtonCommon } from '../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';

const ShowcaseButtons = () => {
  return (
    <Container>
      <BoxButtons>
        <h5>Filled button</h5>
        <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Label" />
        <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Example" />
        <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Label" disabled />
        <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Label" />
      </BoxButtons>
      <BoxButtons>
        <h5>Outlined button</h5>
        <ButtonCommon variant={BUTTON_VARIANTS.OUTLINED} text="Login Admin" />
        <ButtonCommon variant={BUTTON_VARIANTS.OUTLINED} text="Next" disabled />
      </BoxButtons>{' '}
      <BoxButtons>
        <h5>Text button</h5>
        <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" />
        <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" disabled />
      </BoxButtons>
      <BoxButtons>
        <h5>Elevated button</h5>

        <ButtonCommon variant={BUTTON_VARIANTS.ELEVATED} text="Single" />
        <ButtonCommon
          variant={BUTTON_VARIANTS.ELEVATED}
          text="Label"
          disabled
        />
      </BoxButtons>
      <BoxButtons>
        <h5>Tonal button</h5>
        <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Multi" />
        <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Init Wallet" />
        <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" disabled />
      </BoxButtons>
      <BoxButtons>
        <h5>Gradient button</h5>
        <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Multi" />
        <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Init Wallet" />
        <ButtonCommon
          variant={BUTTON_VARIANTS.GRADIENT}
          text="Label"
          disabled
        />
      </BoxButtons>
    </Container>
  );
};

export default ShowcaseButtons;
