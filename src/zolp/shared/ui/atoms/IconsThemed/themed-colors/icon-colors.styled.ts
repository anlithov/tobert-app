import { iconColorsTheme } from './icon-colors.theme.ts';
import styled from 'styled-components';

export const SuccessIconContainer = styled.div`
  color: ${({ theme }) => iconColorsTheme(theme).success};
`;

export const ErrorIconContainer = styled.div`
  color: ${({ theme }) => iconColorsTheme(theme).error};
`;

export const InfoIconContainer = styled.div`
  color: ${({ theme }) => iconColorsTheme(theme).info};
`;

export const DefaultIconContainer = styled.div`
  color: ${({ theme }) => iconColorsTheme(theme).default};
`;
