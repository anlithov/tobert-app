import styled from 'styled-components';

export const ContainerField = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const DropdownControlFieldContainer = styled.div`
  width: 100%;

  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;
