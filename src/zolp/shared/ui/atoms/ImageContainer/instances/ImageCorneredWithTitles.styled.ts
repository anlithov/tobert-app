import styled from 'styled-components';

export const ImageCorneredWithTitlesContainer = styled.div<{
  width?: string;
  flex?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  flex: ${({ flex }) => flex};
`;

export const ImagesContainer = styled.div<{
  margin: string;
  reverse?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  > *:not(:${({ reverse }) =>
    reverse ? 'last-child' : 'nth-child(2)'}):not(.addon) {
    position: relative;
    margin-left: ${({ margin }) => margin};
  }
`;

export const ImageAddonContainer = styled.div`
  position: absolute !important;
  display: flex;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
