import React from 'react';
import {
  BoxButtons,
  ButtonGroupContainer,
  ContainerBigger,
  ShowcaseIconStyle,
} from './ButtonShow-2.styled.ts';
import { ButtonCommon } from '../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';
import { BiAccessibility, BiAnchor } from 'react-icons/bi';
import { AiFillAlipayCircle } from 'react-icons/ai';
import ShowcaseIsLodingFun from './ShowcaseIsLodingFun.tsx';

const ButtonShow2 = () => {
  return (
    <>
      <ButtonGroupContainer>
        <BoxButtons>
          <h6>Filled button</h6>
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
          <ButtonCommon
            variant={BUTTON_VARIANTS.FILLED}
            text="Example"
            disabled
          />
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
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
        <ContainerBigger>
          <BoxButtons>
            <h6>Scaled Bigger Button</h6>
            <ButtonCommon variant={BUTTON_VARIANTS.FILLED} />

            <ButtonCommon variant={BUTTON_VARIANTS.FILLED} text="Tag" />
            <ButtonCommon
              variant={BUTTON_VARIANTS.FILLED}
              text="Tag"
              disabled
            />
          </BoxButtons>
        </ContainerBigger>
      </ButtonGroupContainer>
      <ButtonGroupContainer>
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
        <BoxButtons>
          <h6>Loading button</h6>
          <ButtonCommon
            loading
            variant={BUTTON_VARIANTS.FILLED}
            text="Loading"
          />
        </BoxButtons>
      </ButtonGroupContainer>
      <ButtonGroupContainer>
        <BoxButtons className="center">
          <h6>With custom width and height</h6>
          <ButtonCommon
            width="1em"
            height="1em"
            variant={BUTTON_VARIANTS.FILLED}
          />
          <BoxButtons>
            <ButtonCommon
              width="10em"
              height="10em"
              variant={BUTTON_VARIANTS.FILLED}
            />
          </BoxButtons>
        </BoxButtons>
        <BoxButtons>
          <h6>Button with Only Icon</h6>
          <ButtonCommon
            width="15em"
            height="10em"
            variant={BUTTON_VARIANTS.FILLED}
          >
            <div className={ShowcaseIconStyle}>
              <BiAccessibility size="5em" />
              <span>Fast learning React</span>
            </div>
          </ButtonCommon>
          <ButtonCommon variant={BUTTON_VARIANTS.FILLED}>
            <BiAnchor size="5em" />
          </ButtonCommon>
        </BoxButtons>
        <BoxButtons>
          <h6>"IconLeft" and "iconRight"</h6>
          <ButtonCommon
            text="Left"
            variant={BUTTON_VARIANTS.FILLED}
            height="5em"
            iconLeft={<AiFillAlipayCircle size="5em" />}
          />
          <ButtonCommon
            text="Right"
            variant={BUTTON_VARIANTS.FILLED}
            height="5em"
            iconRight={<AiFillAlipayCircle size="5em" />}
          />
        </BoxButtons>
        <BoxButtons>
          <h6>Smaller Border radius</h6>
          <ButtonCommon borderRadius={'1em'} variant={BUTTON_VARIANTS.FILLED} />
        </BoxButtons>
        <BoxButtons>
          <h6>Button OnClick</h6>
          <ShowcaseIsLodingFun />
        </BoxButtons>
      </ButtonGroupContainer>
    </>
  );
};

export default ButtonShow2;
