import styled from 'styled-components';
import { dragebleTheme } from './Drageble.theme.ts';

export const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  flex: 1;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 0;
  }
  /* width */
  > * {
    &::-webkit-scrollbar {
      width: 12px;
      background: ${({ theme }) =>
          dragebleTheme(theme).dragebleScrollContainerBackground}
        fixed;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
          dragebleTheme(theme).dragebleScrollBarTrackContainerBackground}
        fixed;
    }

    &::-webkit-scrollbar-track-piece {
      height: 0.8em;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) =>
        dragebleTheme(theme).dragebleScrollBarThumbContainerBackground};
      border-radius: 1em;
    }

    &::-webkit-scrollbar {
      height: 0.8em;
    }

    &::-webkit-scrollbar-button {
      height: 0.2em;
      width: 0.2em;
    }

    &::-webkit-scrollbar-track {
      width: 0.2em;
    }

    &::-webkit-scrollbar-track-piece {
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      height: 0.2em;
      width: 0.2em;
    }

    &::-webkit-scrollbar-corner {
      width: 0;
      background: ${({ theme }) =>
          dragebleTheme(theme).dragebleScrollBarCornerContainerBackground}
        fixed;
    }

    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;
