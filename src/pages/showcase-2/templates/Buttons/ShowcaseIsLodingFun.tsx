import { ButtonCommon } from '../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { useState } from 'react';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';

const ShowcaseIsLodingFun = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <ButtonCommon
        variant={BUTTON_VARIANTS.FILLED}
        loading={isLoading}
        onClick={handleClick}
        text="Click me please"
      ></ButtonCommon>
    </div>
  );
};

export default ShowcaseIsLodingFun;
