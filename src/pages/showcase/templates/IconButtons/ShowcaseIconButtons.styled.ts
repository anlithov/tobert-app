import styled from 'styled-components';

import { showcaseIconButtonsTheme } from './ShowcaseIconButtons.theme';

export const Container = styled.div`
  display: flex;
  gap: 4em;
  > * {
    width: 15em;
  }
  flex-wrap: wrap;
  background: ${({ theme }) => showcaseIconButtonsTheme(theme).background};

`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  > * {
    word-break: break-all;
    overflow: hidden;
  }
`;
