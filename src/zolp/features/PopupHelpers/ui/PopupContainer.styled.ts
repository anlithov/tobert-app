import styled from 'styled-components';
import { PopupPositioning } from './PopupContainer.types';

export const PopupContainer = styled.div<{
  popupPosition?: PopupPositioning;
  width?: string;
  spaceBetween: string;
}>`
  position: absolute;
  z-index: 2;
  display: flex;
  transition: 0.2s ease;
  opacity: 0;
  width: ${(props) => props.width};

  ${(props) => {
    if (props?.popupPosition?.vertical === 'top') {
      return `
          bottom: calc(100% + ${props?.spaceBetween});
          margin-bottom: 1em;
          &.active {
            margin-bottom: 0;
          }
        `;
    }
  }}

  ${(props) => {
    if (props?.popupPosition?.vertical === 'bottom') {
      return `
          top: calc(100% + ${props?.spaceBetween});
          margin-top: 1em;
          &.active {
            margin-top:  0;
          }
        `;
    }
  }}
  
  ${(props) => {
    if (
      props?.popupPosition?.vertical === 'center' ||
      !props?.popupPosition?.vertical
    ) {
      return `
          bottom: 50%;
          transform:  translateY(50%);
        `;
    }
  }}

  ${(props) => {
    if (props?.popupPosition?.horizontal === 'right') {
      return `
        right: 0;
      `;
    } else if (props?.popupPosition?.horizontal === 'right-out') {
      return `
        left: calc(100% + ${props?.spaceBetween});
        margin-left: 1em;
        &.active {
           margin-left:  0;
        }
      `;
    }
  }}

  ${(props) => {
    if (props?.popupPosition?.horizontal === 'left') {
      return `
        left: 0;
      `;
    } else if (props?.popupPosition?.horizontal === 'left-out') {
      return `
        right: calc(100% + ${props?.spaceBetween});
         margin-right: 1em;
        &.active {
           margin-right:  0;
        }
      `;
    }
  }}
  
  ${(props) => {
    if (
      props?.popupPosition?.horizontal === 'center' ||
      !props?.popupPosition?.horizontal
    ) {
      return `
        left: 50%;
        transform:  translateX(-50%);
      `;
    }
  }}

  ${(props) => {
    if (
      (props?.popupPosition?.vertical === 'center' ||
        !props?.popupPosition?.vertical) &&
      (props?.popupPosition?.horizontal === 'center' ||
        !props?.popupPosition?.horizontal)
    ) {
      return `
        bottom: 50%;
        transform:  translateX(-50%) translateY(50%);
      `;
    }
  }}
  &.active {
    opacity: 1;
  }
`;
