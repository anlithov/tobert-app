import styled from 'styled-components';
import { ContainerMainSecondary } from '../../../../zolp/shared/ui/atoms/Containers/ContainerCover.tsx';

export const Container = styled(ContainerMainSecondary)`
  flex-direction: column;
  width: 30em;
  gap: 1em;
  height: 20em;
  overflow: hidden;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 2em;
  flex: 1;
  > * {
    z-index: 1;
  }
`;

export const ContainerCEXImage = styled.div`
  position: absolute;
  top: -10em;
  left: -12em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1em;
  opacity: 0.08;
  z-index: 0;
`;

export const ContainerMetaText = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContainerInline = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
`;

export const Name = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > span {
    font-size: 2.4em;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 10em;
  }
`;

export const Id = styled.div`
  position: relative;
  display: flex;
  height: 2em;
  align-items: center;
  > span {
    opacity: 0.7;
    font-size: 1.6em;
    max-width: 10em;
  }
`;

export const Hint = styled.div`
  font-size: 1.2em;
  opacity: 0.5;
  font-weight: 500;
`;

export const Locked = styled.div`
  display: flex;
  align-items: center;
  height: 2em;
  width: 100%;
  padding: 0.2em 0.5em 0;
  background: rgba(90, 77, 35, 0.66);
  color: #cfbf52;
  border-radius: 0.5em;

  > span {
    font-size: 1.2em;
  }
`;
