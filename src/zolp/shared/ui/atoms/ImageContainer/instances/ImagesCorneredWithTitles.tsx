import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  ImageAddonContainer,
  ImageCorneredWithTitlesContainer,
  ImagesContainer,
} from './ImageCorneredWithTitles.styled';
import Divider from '../../Divider/Divider.tsx';
import Titles from '../../Titles/Titles.tsx';
import ImageContainerCornered from './ImageContainerCornered.tsx';

interface Props extends PropsWithChildren {
  imgWidth?: string;
  imgHeight?: string;
  title: ReactNode;
  titleSize?: string;
  subTitle?: ReactNode;
  subTitleSize?: string;
  customSubTitle?: ReactNode;
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

const ImagesCorneredWithTitles: FC<Props> = ({
  imgWidth = '3.4em',
  imgHeight,
  title,
  titleSize = '1.6em',
  subTitle,
  subTitleSize = '1.3em',
  customSubTitle,
  maxWidth = '100%',
  containerWidth = '100%',
  cornerScale,
  images,
  flex,
  dividerWidth = '1.6em',
  ImageAddonComponent,
}) => {
  const marginOnMultiImages = 0.3;

  const widthOfMultiImages =
    images?.length > 1
      ? `+ (${imgWidth} - ${imgWidth} * ${marginOnMultiImages}) * ${images.length}`
      : '';

  const reversed = [...images].reverse();

  return (
    <ImageCorneredWithTitlesContainer width={containerWidth} flex={flex}>
      {images && (
        <ImagesContainer margin={`calc(-${imgWidth} * ${marginOnMultiImages})`}>
          <ImageAddonContainer className="addon">
            {ImageAddonComponent}
          </ImageAddonContainer>
          {reversed.map((imageSetup, index) => (
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
      <Divider width={dividerWidth} />
      <Titles
        titleFontSize={titleSize}
        title={title}
        subTitle={subTitle}
        subTitleFontSize={subTitleSize}
        customSubTitle={customSubTitle}
        width={`calc(${maxWidth} - ${dividerWidth} - (${imgWidth} ${widthOfMultiImages}))`}
      />
    </ImageCorneredWithTitlesContainer>
  );
};

export default ImagesCorneredWithTitles;
