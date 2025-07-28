import styled from 'styled-components';
import { addAlpha } from '../../../../../../../../zolp/shared/lib/utils/add-alpha-opacity.util.ts';

export const ContainerCexs = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20em;
`;

export const CexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 2em;
  width: 16em;
  height: 16em;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.secondary900};
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => addAlpha(theme.palette.primary500, 0.2)};
  }
`;

export const CexTitle = styled.div`
  display: flex;
  font-size: 1.8em;
`;
