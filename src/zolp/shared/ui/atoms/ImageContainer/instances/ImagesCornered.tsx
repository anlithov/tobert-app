import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  ImageAddonContainer,
  ImageCorneredWithTitlesContainer,
  ImagesContainer,
} from './ImageCorneredWithTitles.styled';
import ImageContainerCornered from './ImageContainerCornered.tsx';

interface Props extends PropsWithChildren {
  imgWidth?: string;
  imgHeight?: string;
  maxWidth?: string;
  containerWidth?: string;
  cornerScale?: number;
  flex?: string;
  dividerWidth?: string;
  negativeMargin?: number;
  reversed?: boolean;
  images: {
    src?: ReactNode | string | null;
    cornerSrc?: string | null;
    opacity?: number;
  }[];
  ImageAddonComponent?: ReactNode;
}

const ImagesCornered: FC<Props> = ({
  imgWidth = '3.4em',
  imgHeight,
  containerWidth = '100%',
  negativeMargin = 0.3,
  cornerScale,
  images,
  flex,
  reversed = true,
  ImageAddonComponent,
}) => {
  const reversedImages = reversed ? [...images].reverse() : images;

  return (
    <ImageCorneredWithTitlesContainer width={containerWidth} flex={flex}>
      {images && (
        <ImagesContainer margin={`calc(-${imgWidth} * ${negativeMargin})`}>
          <ImageAddonContainer className="addon">
            {ImageAddonComponent}
          </ImageAddonContainer>
          {reversedImages.map((imageSetup, index) => (
            <ImageContainerCornered
              key={index}
              src={imageSetup.src}
              cornerSrc={imageSetup.cornerSrc}
              width={imgWidth}
              height={imgHeight}
              cornerScale={cornerScale}
              opacity={imageSetup.opacity}
            />
          ))}
        </ImagesContainer>
      )}
    </ImageCorneredWithTitlesContainer>
  );
};

export default ImagesCornered;
