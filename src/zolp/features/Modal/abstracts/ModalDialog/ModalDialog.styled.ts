import styled from 'styled-components';
import { addAlpha } from '../../../../shared/lib/utils/add-alpha-opacity.util.ts';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';

export const Title = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  line-height: 1.2;
  font-size: 2.4em;
  justify-content: center;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.4em;
  color: ${({ theme }) =>
    theme.mode === THEME_MODES.light
      ? addAlpha(theme.palette.textMainLight, 0.8)
      : addAlpha(theme.palette.textMainDark, 0.8)};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > * {
    color: ${({ theme }) =>
      theme.mode === THEME_MODES.light
        ? addAlpha(theme.palette.primary800, 0.7)
        : addAlpha(theme.palette.primary200, 0.7)};
  }
`;
