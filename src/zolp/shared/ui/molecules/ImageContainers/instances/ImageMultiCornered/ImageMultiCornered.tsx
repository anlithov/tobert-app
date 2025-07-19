import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  ImageAddonContainer,
  ImageCorneredWithTitlesContainer,
  ImagesContainer,
} from './ImageMultiCornered.styled.ts';
import ImageWithCornered from '../ImageWithCornered/ImageWithCornered.tsx';

interface Props extends PropsWithChildren {
  imgWidth?: string;
  imgHeight?: string;
  maxWidth?: string;
  containerWidth?: string;
  cornerScale?: number;
  flex?: string;
  dividerWidth?: string;
  images: {
    src?: ReactNode | string | null;
    cornerSrc?: string | null;
    opacity?: number;
  }[];
  ImageAddonComponent?: ReactNode;
}

const ImageMultiCornered: FC<Props> = ({
  imgWidth = '3.4em',
  imgHeight,
  containerWidth = '100%',
  cornerScale,
  images,
  flex,
  ImageAddonComponent,
}) => {
  const marginOnMultiImages = 0.3;

  const reversed = [...images].reverse();

  return (
    <ImageCorneredWithTitlesContainer width={containerWidth} flex={flex}>
      {images && (
        <ImagesContainer margin={`calc(-${imgWidth} * ${marginOnMultiImages})`}>
          <ImageAddonContainer className="addon">
            {ImageAddonComponent}
          </ImageAddonContainer>
          {reversed.map((imageSetup, index) => (
            <ImageWithCornered
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

export default ImageMultiCornered;
