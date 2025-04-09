import React, { FC } from 'react';
import { Container } from './TableLoader.styled.tsx';
import { Loading } from '../../../../Loading/Loading.tsx';

interface Props {
  containerHeight?: string;
}
const TableLoader: FC<Props> = ({ containerHeight }) => {
  return (
    <Container containerHeight={containerHeight}>
      <Loading size="8em" />
    </Container>
  );
};

export default TableLoader;
