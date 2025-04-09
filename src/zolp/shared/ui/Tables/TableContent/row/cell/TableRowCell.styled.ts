import styled from 'styled-components';
import {
  AlignInputHorizontal,
  AlignInputVertical,
  FLEX_ALIGN_HORIZONTAL,
  FLEX_ALIGN_VERTICAL,
} from '../../../../../lib/constants/align-to-flex.const.ts';

export const Container = styled.div<{
  width: string;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
  background?: string;
  minWidth?: string;
}>`
  display: flex;
  place-content: ${({ alignHorizontal }) =>
    alignHorizontal ? FLEX_ALIGN_HORIZONTAL[alignHorizontal] : 'flex-start'};
  place-items: ${({ alignVertical }) =>
    alignVertical ? FLEX_ALIGN_VERTICAL[alignVertical] : 'center'};
  padding: 1.3em 1em;
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  gap: 0.4em;
  background: ${(props) => props.background};
  &:first-child {
    padding-left: 1.8em;
  }
  &:last-child {
    padding-right: 1.8em;
  }
`;

export const ContainerNumeration = styled.div<{
  width: string;
  alignVertical?: AlignInputVertical;
  alignHorizontal?: AlignInputHorizontal;
  background?: string;
  minWidth?: string;
}>`
  display: flex;
  place-content: ${({ alignHorizontal }) =>
    alignHorizontal ? FLEX_ALIGN_HORIZONTAL[alignHorizontal] : 'flex-start'};
  place-items: ${({ alignVertical }) =>
    alignVertical ? FLEX_ALIGN_VERTICAL[alignVertical] : 'center'};
  padding: 1.6em 0.8em;
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  gap: 0.4em;
  background: ${(props) => props.background};
  &:last-child {
    padding-right: 1em;
  }
  span {
    font-size: 1.4em;
  }
`;
