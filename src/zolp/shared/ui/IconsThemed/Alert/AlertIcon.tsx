import React from 'react';
import { IoAlertCircle } from 'react-icons/io5';
import { ErrorIconContainer } from '../themed-colors/icon-colors.styled.ts';

const AlertIcon = () => {
  return (
    <ErrorIconContainer>
      <IoAlertCircle size="7.4em" />
    </ErrorIconContainer>
  );
};

export default AlertIcon;
