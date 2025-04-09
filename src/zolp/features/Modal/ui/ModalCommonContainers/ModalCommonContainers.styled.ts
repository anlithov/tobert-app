import styled from 'styled-components';
import { ContainerMainSecondary } from '../../../../shared/ui/Containers/ContainerCover.tsx';
import { addAlpha } from '../../../../shared/lib/utils/add-alpha-opacity.util.ts';
import { modalCommonContainersTheme } from './ModalCommonContainers.theme.ts';
import { globalTheme } from '../../../app/styles/global.theme.ts';

export const ModalContainer = styled(ContainerMainSecondary)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2em 2.6em;
  border-radius: 4em;
  z-index: 1;
  box-shadow: ${({ theme }) =>
    `0px 1px 7px 1px ${addAlpha(
      modalCommonContainersTheme(theme).containerShadow,
      0.05,
    )}, 0px 1px 5px 0px ${addAlpha(
      modalCommonContainersTheme(theme).containerShadow,
      0.1,
    )}`};
`;

export const ModalScrollContainer = styled.div<{
  height?: string;
  maxHeight?: string;
  gap?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  gap: ${({ gap }) => gap};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  max-height: ${({ maxHeight }) => maxHeight};
  width: 100%;
  &::-webkit-scrollbar {
    width: 0.6em;
    background: ${({ theme }) =>
      globalTheme(theme).bodyContainerColor} !important;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      globalTheme(theme).bodyContainerColor} !important;
  }
`;

export const ModalInfiniteScrollContainer = styled.div<{
  maxHeight?: string;
  margin?: string;
}>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin ?? '1em 0 0'};
  .list-infinity {
    max-height: ${({ maxHeight }) => maxHeight ?? '26em'};
    height: ${({ maxHeight }) =>
      maxHeight ? `calc(${maxHeight} + 0.1em)` : '26.1em'};

    overflow-y: auto !important;
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
      width: 0.6em;
      background: ${({ theme }) =>
        globalTheme(theme).bodyContainerColor} !important;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
        globalTheme(theme).bodyContainerColor} !important;
    }
  }
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1.8em 0.7em;
`;

export const ModalTitle = styled.div`
  width: 100%;
  font-size: 1.4em;
  line-height: 1.43;
  font-weight: 400;
  letter-spacing: 0.01em;
`;

export const ModalSeparator = styled.div<{
  width?: string;
  margin?: string;
  padding?: string;
}>`
  width: ${({ width }) => width ?? '100%'};
  margin: ${({ margin }) => margin ?? '1em 0'};
  padding: ${({ padding }) => padding ?? '0 1.8em 0'};
  height: 0.1em;
  background: ${({ theme }) =>
    modalCommonContainersTheme(theme).separatorColor};
`;

export const ModalSeparatorVertical = styled.div<{
  margin?: string;
  padding?: string;
}>`
  display: flex;
  height: 100%;
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '0'};
  width: 0.1em;
  background: ${({ theme }) =>
    modalCommonContainersTheme(theme).separatorColor};
`;
