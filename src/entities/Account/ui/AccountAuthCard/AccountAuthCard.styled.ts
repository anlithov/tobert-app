import styled from 'styled-components';
import { accountAuthCardTheme } from './AccountAuthCard.theme.ts';
import { ContainerMainSecondary } from '../../../../zolp/shared/ui/Containers/ContainerCover.tsx';

export const AuthCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 2em;
`;

export const LogoCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  > span {
    opacity: 0.5;
  }
`;

export const TitleApp = styled.div`
  font-family: 'Product Sans', sans-serif;
  font-size: 5em;
  font-weight: 700;
`;

export const AuthCardBox = styled(ContainerMainSecondary)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0;
  padding: 2.5em;
  gap: 2.5em;
  border-radius: 2em;
  width: 42em;
  transition: 0.3s all;
  background: ${({ theme }) => accountAuthCardTheme(theme).containerBackground};
`;
