import styled from 'styled-components';
import { addAlpha } from '../../../../../../../../zolp/shared/lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em 1.6em;
  overflow: hidden;
`;

export const ContainerCEXImage = styled.div`
  position: absolute;
  top: -8em;
  left: 20em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1em;
  opacity: 0.08;
  z-index: 0;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8em;
`;

export const CountRestImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6em;
  height: 2.6em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.secondary700};
  > span {
    font-size: 1.2em;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.primary100};
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  > span {
    font-size: 1.6em;
    font-family: 'Product Sans', sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 10em;
  }
`;

export const CexInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;
  > span {
    opacity: 0.6;
    font-size: 1em;
    letter-spacing: 0.2em;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  width: 8em;
  > span {
    color: ${({ theme }) => addAlpha(theme.palette.primary100, 0.6)};
  }
`;

export const CurrentValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10em;
  > span {
    font-size: 1.6em;
    color: ${({ theme }) => addAlpha(theme.palette.primary100, 0.8)};
  }
`;
