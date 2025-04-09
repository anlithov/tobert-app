import React, { FC } from 'react';
import { Container } from '../DropdownList.styled.ts';
import { Loading } from '../../../Loading/Loading.tsx';
import Divider from '../../../Divider/Divider.tsx';
import { ContainerLoader } from './DropdownItemNotFound.styled.ts';

type Props = {
  width?: string;
  minWidth?: string;
  maxHeight?: string;
  padding?: string;
  message?: string;
  height?: string;
};

const DropdownListLoading: FC<Props> = ({
  width = '100%',
  minWidth = '18em',
  maxHeight = 'initial',
  padding = '0em 0',
  message,
  height,
}) => {
  return (
    <Container
      height={height}
      maxHeight={maxHeight}
      width={width}
      padding={padding}
      minWidth={minWidth}
    >
      <Divider height="1em" />
      <ContainerLoader>
        <Loading size="2.8em" />
        <span>{message}</span>
      </ContainerLoader>
      <Divider height="1em" />
    </Container>
  );
};

export default DropdownListLoading;
