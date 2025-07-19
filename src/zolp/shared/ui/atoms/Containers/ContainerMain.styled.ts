import styled from 'styled-components';

export const Container = styled.div<{
  padding?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  back?: string;
}>`
  position: relative;
  display: flex;
  height: ${(props) => props?.height ?? undefined};
  width: ${(props) => props?.width ?? undefined};
  min-width: ${(props) => props?.minWidth ?? undefined};
  padding: ${(props) => props?.padding ?? '2em'};
  border-radius: ${(props) => props?.borderRadius ?? '1.6em'};
  background: ${(props) => props?.back};
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const SnowBAck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.ibb.co/0McvHG5/TpOI4DC.png'),
    url('https://i.ibb.co/tY6xvxh/92lgmBN.png'),
    url('https://i.ibb.co/GCfHmrn/ACiIkIG.png');
  background-size: 250px, 200px, 150px;
  animation: snow 10s linear infinite;
  opacity: 0.05;
  z-index: -1;
`;
