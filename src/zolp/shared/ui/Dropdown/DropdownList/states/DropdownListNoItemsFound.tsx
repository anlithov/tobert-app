import React, { FC } from 'react';
import { Container, DropdownErrorMessage } from '../DropdownList.styled.ts';

interface Props {
  message?: string;
  width?: string;
  padding?: string;
  minWidth?: string;
  height?: string;
}
const DropdownListNoItemsFound: FC<Props> = ({
  message,
  width = '100%',
  padding = '0.6em 0',
  minWidth = '20em',
  height,
}) => {
  return (
    <Container
      height={height}
      width={width}
      padding={padding}
      minWidth={minWidth}
    >
      <DropdownErrorMessage>{message ?? 'Not found'}</DropdownErrorMessage>
    </Container>
  );
};

export default DropdownListNoItemsFound;
