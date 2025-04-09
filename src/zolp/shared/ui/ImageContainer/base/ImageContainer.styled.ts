import styled from 'styled-components';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const Container = styled.div<{
  width: string;
  height?: string;
  src?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundPlaceholder?: string;
}>`
  position: relative;
  display: flex;
  place-items: center;
  place-content: center;
  width: ${({ width }) => width};
  height: ${({ width, height }) => height ?? width};
  max-width: ${({ width }) => width};
  max-height: ${({ width, height }) => height ?? width};
  min-width: ${({ width }) => width};
  min-height: ${({ width, height }) => height ?? width};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor, backgroundPlaceholder }) =>
    backgroundPlaceholder || backgroundColor};

  ${({ src }) =>
    src?.startsWith('http') &&
    `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${src});
    & > img {
      display: none;
    }
  `}

  > svg {
    width: 100%;
    height: 100%;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
  &.shadow {
    box-shadow: 0 1px 3px
      ${({ theme }) =>
        theme.mode === THEME_MODES.light
          ? addAlpha(theme.palette.shadowColorLight, 0.4)
          : addAlpha(theme.palette.shadowColorDark, 0.4)};
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
