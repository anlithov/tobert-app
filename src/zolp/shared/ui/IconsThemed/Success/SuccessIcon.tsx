import React from 'react';
import { SuccessIconContainer } from '../themed-colors/icon-colors.styled.ts';
import { BiSolidCheckCircle } from 'react-icons/bi';

const SuccessIcon = () => {
  return (
    <SuccessIconContainer>
      <BiSolidCheckCircle size="7.4em" />
    </SuccessIconContainer>
  );
};

export default SuccessIcon;
