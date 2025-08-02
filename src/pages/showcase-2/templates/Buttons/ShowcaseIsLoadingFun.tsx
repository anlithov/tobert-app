import { ButtonCommon } from '../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { useState } from 'react';
import { BUTTON_VARIANTS } from '../../../../zolp/shared/ui/atoms/Button/libs/constants/button.variants.ts';

const ShowcaseIsLoadingFun = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <ButtonCommon
      borderRadius={'0em'}
      width="15em"
      height="10em"
      variant={BUTTON_VARIANTS.FILLED}
      loading={isLoading}
      onClick={handleClick}
      text="Click me please"
    />
  );
};

export default ShowcaseIsLoadingFun;
