import styled from 'styled-components';
import { addAlpha } from '../../../../../../../../../../../../zolp/shared/lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  border-radius: 1em;
  width: 3em;
  height: 3em;
  transition: 0.1s;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    filter: grayscale(0.5);
    pointer-events: none;
  }
  &.loading {
    pointer-events: none;
  }
  &.resume {
    border: 2px solid ${({ theme }) => addAlpha(theme.palette.successDark, 0)};
    background: rgb(45 60 48);

    > svg {
      color: ${({ theme }) => theme.palette.successDark};
      fill: ${({ theme }) => theme.palette.successDark};
    }

    &:hover {
      background: rgb(54 74 58);
      border: 2px solid
        ${({ theme }) => addAlpha(theme.palette.successDark, 0.3)};
    }
  }

  &.stop {
    border: 2px solid ${({ theme }) => addAlpha(theme.palette.errorDark, 0)};
    background: rgb(63, 51, 51);

    > svg {
      color: ${({ theme }) => theme.palette.errorDark};
      fill: ${({ theme }) => theme.palette.errorDark};
    }
    > div {
      background: ${({ theme }) => addAlpha(theme.palette.errorDark, 1)};
    }

    &:hover {
      background: rgb(75, 55, 55);
      border: 2px solid ${({ theme }) => addAlpha(theme.palette.errorDark, 0.3)};
    }
  }

  &.pause {
    border: 2px solid ${({ theme }) => addAlpha(theme.palette.warningDark, 0)};
    background: rgb(63 57 51);

    > svg {
      color: ${({ theme }) => addAlpha(theme.palette.warningDark, 1)};
      fill: ${({ theme }) => addAlpha(theme.palette.warningDark, 1)}!important;
    }
    &:hover {
      background: rgb(75, 65, 55);
      border: 2px solid
        ${({ theme }) => addAlpha(theme.palette.warningDark, 0.3)};
    }
  }
`;
