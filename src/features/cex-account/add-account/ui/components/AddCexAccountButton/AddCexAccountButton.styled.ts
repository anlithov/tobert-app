import styled from 'styled-components';
import { ContainerMainSecondary } from '../../../../../../zolp/shared/ui/atoms/Containers/ContainerCover.tsx';

export const Container = styled(ContainerMainSecondary)`
  gap: 1em;
  flex-direction: column;
  place-content: center;
  place-items: center;
  width: 30em;
  height: 20em;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;
  > * {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    > * {
      opacity: 0.7;
    }
  }
`;

export const Title = styled.span`
  font-size: 2.2em;
  font-family: 'Product Sans', sans-serif;
`;
