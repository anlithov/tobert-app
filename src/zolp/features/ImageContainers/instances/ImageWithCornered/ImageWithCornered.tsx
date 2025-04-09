import React, { FC, ReactNode } from 'react';
import { ImageContainers } from './ImageWithCornered.styled.ts';
import ImageContainer from '../../../../shared/ui/ImageContainer/base/ImageContainer.tsx';

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  src?: string | ReactNode | null;
  cornerSrc?: string | null;
  cornerScale?: number;
  opacity?: number;
}

const ImageWithCornered: FC<Props> = ({
  src,
  cornerSrc,
  width = '3.2em',
  height,
  margin = '0',
  cornerScale = 0.45,
  opacity,
}) => {
  const backgroundColorImage = '#fff';

  return (
    <ImageContainers
      width={width}
      height={height}
      margin={margin}
      opacity={opacity}
    >
      <ImageContainer
        src={src}
        width={width}
        height={height}
        borderRadius={`calc(${width} / 2)`}
        shadow
        backgroundColor={backgroundColorImage}
      />
      {cornerSrc !== undefined && (
        <ImageContainer
          backgroundColor={backgroundColorImage}
          src={cornerSrc}
          width={`calc(${width} * ${cornerScale})`}
          height={`calc(${height || width} * ${cornerScale})`}
          borderRadius={`calc(${width} / 2)`}
          shadow
        />
      )}
    </ImageContainers>
  );
};

export default ImageWithCornered;
