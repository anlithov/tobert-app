import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Container, Image } from './ImageContainer.styled';
import { BsQuestionCircleFill } from 'react-icons/bs';

interface ImageContainerProps extends PropsWithChildren {
  disabledDropdown?: boolean;
  width?: string;
  height?: string;
  src: string | ReactNode | null;
  borderRadius?: string;
  backgroundColor?: string;
  placeholderSrc?: string | ReactNode;
  backgroundPlaceholder?: string;
  shadow?: boolean;
}

const ImageContainer: FC<ImageContainerProps> = ({
  disabledDropdown,
  width = 'auto',
  height,
  src,
  borderRadius = '50%',
  backgroundColor,
  placeholderSrc = <BsQuestionCircleFill size={width} />,
  backgroundPlaceholder,
  shadow,
  children: addonChildren,
}) => {
  let backgroundSrc = undefined;

  if (typeof src === 'string' && src.startsWith('http')) {
    backgroundSrc = src;
  } else if (
    !src &&
    typeof placeholderSrc === 'string' &&
    placeholderSrc.startsWith('http')
  ) {
    backgroundSrc = placeholderSrc;
  }

  let children = undefined;

  if (!backgroundSrc) {
    if (typeof src === 'string') {
      children = <Image src={src} />;
    } else if (typeof placeholderSrc === 'string') {
      children = <Image src={placeholderSrc} />;
    } else {
      children = src ?? placeholderSrc;
    }
  }

  return (
    <Container
      className={`${disabledDropdown ? 'disabled' : ''} ${
        shadow ? 'shadow' : ''
      }`}
      backgroundColor={backgroundColor}
      backgroundPlaceholder={backgroundPlaceholder}
      width={width}
      height={height}
      borderRadius={borderRadius}
      src={backgroundSrc}
    >
      {addonChildren}
      {children}
    </Container>
  );
};

export default ImageContainer;
