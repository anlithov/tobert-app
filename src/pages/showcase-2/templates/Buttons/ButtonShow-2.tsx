import React from 'react';
import {
  BoxButtons,
  Container,
  ContainerBigger,
  GlobolStyleDivShow2,
} from './ButtonShow-2.styled.ts';
import { ButtonCommon } from '../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';

const ButtonShow2 = () => {
  return (
    <GlobolStyleDivShow2>
      <Container>
        <BoxButtons>
          <h6>Filled button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.FILLED}
            text="Example"
            disabled
          />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" disabled />
        </BoxButtons>
        <BoxButtons>
          <h6>Outlined button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.OUTLINED} text="Login Admin" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.OUTLINED}
            text="Next"
            disabled
          />
          <ButtonCommon
            variant={BUTTON_VARIANTS.OUTLINED}
            text="Login Password "
            disabled
          />
        </BoxButtons>
        <BoxButtons>
          <h6>Text button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.FLAT}
            text="Disabled"
            disabled
          />
          <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" />
        </BoxButtons>
      </Container>
      <Container>
        <BoxButtons>
          <h6>Elevated button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.ELEVATED} text="Single" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.ELEVATED}
            text="Tag"
            disabled
          />
          <ButtonCommon
            variant={BUTTON_VARIANTS.ELEVATED}
            text="Label"
            disabled
          />
        </BoxButtons>
        <BoxButtons>
          <h6>Tonal Button </h6>
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" />
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" />
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" disabled />
        </BoxButtons>
        <BoxButtons>
          <h6>Gradient button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Label1" />
          <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Label2" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.GRADIENT}
            text="Label3"
            disabled
          />
        </BoxButtons>
      </Container>
      <ContainerBigger className="button-Begger">
        <BoxButtons>
          <h6>Filled button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} />
          <ButtonCommon
            variant={BUTTON_VARIANTS.FILLED}
            text="Example"
            disabled
          />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" disabled />
        </BoxButtons>
        <BoxButtons>
          <h6>Outlined button</h6>

          <ButtonCommon variant={BUTTON_VARIANTS.OUTLINED} text="Login Admin" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.OUTLINED}
            text="Next"
            disabled
          />
          <ButtonCommon
            variant={BUTTON_VARIANTS.OUTLINED}
            text="Login Password "
            disabled
          />
        </BoxButtons>
        <BoxButtons>
          <h6>Text button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.FLAT}
            text="Disabled"
            disabled
          />
          <ButtonCommon variant={BUTTON_VARIANTS.FLAT} text="Label" />
        </BoxButtons>
      </ContainerBigger>
      <ContainerBigger className="button-Begger">
        <BoxButtons>
          <h6>Elevated button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.ELEVATED} text="Single" />
          <ButtonCommon variant={BUTTON_VARIANTS.ELEVATED} disabled />
          <ButtonCommon variant={BUTTON_VARIANTS.ELEVATED} disabled />
        </BoxButtons>
        <BoxButtons>
          <h6>Tonal Button </h6>
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" />
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" />
          <ButtonCommon variant={BUTTON_VARIANTS.TONAL} text="Label" disabled />
        </BoxButtons>
        <BoxButtons>
          <h6>Gradient button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Label1" />
          <ButtonCommon variant={BUTTON_VARIANTS.GRADIENT} text="Label2" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.GRADIENT}
            text="Label3"
            disabled
          />
        </BoxButtons>
      </ContainerBigger>
    </GlobolStyleDivShow2>
  );
};

export default ButtonShow2;
