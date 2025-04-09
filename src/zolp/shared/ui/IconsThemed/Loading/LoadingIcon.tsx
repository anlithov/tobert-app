import React from 'react';
import { InfoIconContainer } from '../themed-colors/icon-colors.styled.ts';
import HeartBeatLoader from '../../../../../features/Logo/HeartBeatLoader/HeartBeatLoader.tsx';

const LoadingIcon = () => {
  return (
    <InfoIconContainer>
      <HeartBeatLoader size="10em" />
    </InfoIconContainer>
  );
};

export default LoadingIcon;
