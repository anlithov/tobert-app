import React from 'react';
import { BiListCheck } from 'react-icons/bi';
import { DefaultIconContainer } from '../themed-colors/icon-colors.styled.ts';

const CheckNeutralIcon = () => {
  return (
    <DefaultIconContainer>
      <BiListCheck size="9.4em" />
    </DefaultIconContainer>
  );
};

export default CheckNeutralIcon;
