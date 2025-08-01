import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';
import { chipTheme } from './Chip.theme.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div<{
  padding?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  pointerEvents?: string;
  justifyContent: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  cursor: ${(props) => !props?.pointerEvents && 'pointer'};
  gap: 1em;
  pointer-events: ${(props) => props?.pointerEvents};
  height: ${(props) => props?.height ?? '5.6em'};
  width: ${(props) => props?.width ?? '100%'};
  min-width: ${(props) => props?.minWidth};
  border-radius: 1em;
  padding: ${(props) => props?.padding ?? '0.4em 1.6em'};
  user-select: none;

  &.filled {
    background-color: ${(props) =>
      addAlpha(chipTheme(props.theme).backgroundFilledColor, 0.5)};
    transition: 0.1s;

    &.opened {
      background-color: ${({ theme }) =>
        chipTheme(theme).backgroundFilledActiveColor};

      &:hover {
        ${(props) =>
          `background-color: ${
            chipTheme(props.theme).backgroundFilledActiveColor
          };`}
      }
    }

    &.active {
      background-color: ${({ theme }) =>
        addAlpha(chipTheme(theme).backgroundFilledActiveColor, 0.5)};

      &:hover {
        background-color: ${({ theme }) =>
          chipTheme(theme).backgroundFilledActiveColor};
      }
    }

    &:hover {
      background-color: ${({ theme }) =>
        addAlpha(chipTheme(theme).backgroundFilledHoverColor, 0.6)};
    }
  }

  &.outlined {
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      addAlpha(chipTheme(props.theme).borderOutlinedColor, 0.3)};

    background-color: ${(props) =>
      addAlpha(chipTheme(props.theme).backgroundOutlinedColor, 0)};
    transition: 0.1s;

    &.active {
      background-color: ${({ theme }) =>
        addAlpha(chipTheme(theme).backgroundOutlinedActiveColor, 0.05)};

      &:hover {
        background-color: ${({ theme }) =>
          addAlpha(chipTheme(theme).backgroundOutlinedActiveColor, 0.1)};
      }
    }

    &:hover {
      background-color: ${({ theme }) =>
        addAlpha(chipTheme(theme).backgroundOutlinedHoverColor, 0.8)};
    }
  }

  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Label = styled.div<{
  fontSize: string;
  justifyContent: string;
}>`
  display: flex;
  flex: 1;
  font-size: ${({ fontSize }) => fontSize};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const Icon = styled(BiChevronDown)`
  font-size: 2.4em;
  transition: 0.3s ease;
  &.up {
    transform: rotate(180deg);
  }
`;
