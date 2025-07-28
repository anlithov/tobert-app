import styled from 'styled-components';
import { Container } from './ContainerMain.styled.ts';
import { containerTheme } from './ContainerMain.theme.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const ContainerMainSecondary = styled(Container)<{
  padding?: string;
  borderRadius?: string;
  cardHeight?: string;
  width?: string;
  height?: string;
  minWidth?: string;
}>`
  background: ${({ theme }) => containerTheme(theme).containerMainBackground};
  &.hoverable {
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => addAlpha(theme.palette.primary500, 0.1)};
    }
  }
`;
export const ContainerMainOutlined = styled(Container)<{
  padding?: string;
  borderRadius?: string;
  cardHeight?: string;
  width?: string;
}>`
  border: 0.2em solid
    ${({ theme }) => containerTheme(theme).containerMainBackground};
  &.hoverable {
    &:hover {
      cursor: pointer;
      background: ${({ theme }) => addAlpha(theme.palette.primary500, 0.1)};
    }
  }
`;
