import styled from 'styled-components';
import { statusCardTheme } from './StatusCard.theme.ts';

export const StatusCardContainer = styled.div<{
  width: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2em;
  margin: 2.4em auto 3.2em;
  width: ${({ width }) => width};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h5`
  text-align: center;
  font-size: 2.2em;
  line-height: 1.27;
  font-weight: 500;
  color: ${({ theme }) => statusCardTheme(theme).textColor};
`;

export const SubTitle = styled.h6`
  text-align: center;
  font-size: 1.6em;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${({ theme }) => statusCardTheme(theme).textColor};
`;

export const ContainerPageStatusCard = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  height: calc(100vh - 26em);
`;
