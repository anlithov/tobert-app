import styled from 'styled-components';

export const Container = styled.div<{
  checkboxPosition: 'right' | 'left';
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.checkboxPosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Label = styled.div<{}>`
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.43;
  width: 100%;
`;
