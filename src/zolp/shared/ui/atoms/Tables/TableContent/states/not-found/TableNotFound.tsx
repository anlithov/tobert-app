import React, { FC } from 'react';
import {
  SubTitle,
  TableNotFoundContainer,
  Title,
  TitlesContainer,
} from './TableNotFound.styled.ts';
import WarningGrey from '../../../../IconsThemed/Warning/WarningGrey.tsx';

interface Props {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const TableNotFound: FC<Props> = ({ title, subTitle }) => {
  return (
    <TableNotFoundContainer>
      <WarningGrey />
      <TitlesContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitlesContainer>
    </TableNotFoundContainer>
  );
};

export default TableNotFound;
