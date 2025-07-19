import styled from 'styled-components';

export const Container = styled.div<{ containerHeight?: string }>`
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.containerHeight || '15em'};
`;
