import { PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {
  padding?: string;
  borderRadius?: string;
  align?: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}
