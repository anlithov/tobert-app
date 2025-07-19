import styled from 'styled-components';
import { tableNotFoundTheme } from './TableNotFound.theme.ts';

export const TableNotFoundContainer = styled.div`
  margin: 6em auto 3.2em;
  padding: 1.8em 1.8em 4em;
  gap: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => tableNotFoundTheme(theme).iconColor};
`;

export const TitlesContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2.2em;
  line-height: 1.28;
  font-weight: 500;
  color: ${({ theme }) => tableNotFoundTheme(theme).textColor};
`;

export const SubTitle = styled.div`
  font-size: 1.6em;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => tableNotFoundTheme(theme).textColor};
`;
