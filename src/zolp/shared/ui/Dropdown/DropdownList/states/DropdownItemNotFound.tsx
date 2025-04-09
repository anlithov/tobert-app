import React, { FC } from 'react';
import { Container } from './DropdownItemNotFound.styled.ts';

interface Props {
  message?: string;
}
const DropdownItemNotFound: FC<Props> = ({ message }) => {
  return (
    <Container>
      <span>{message ?? 'Not found'}</span>
    </Container>
  );
};

export default DropdownItemNotFound;
