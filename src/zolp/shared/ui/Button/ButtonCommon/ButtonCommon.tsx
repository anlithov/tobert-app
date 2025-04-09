import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';

import * as Styled from './ButtonCommon.styled.ts';
import { ContainerIcon } from './ButtonCommon.styled.ts';
import { Loading } from '../../Loading/Loading';
import {
  BUTTON_VARIANTS,
  ButtonVariants,
} from '../libs/constants/button.variants.ts';
import { IconButtonColors } from '../ButtonIconed/libs/types/button-iconed.types.ts';
import { ButtonCommonColorsSetup } from './ButtonCommon.types.ts';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  height?: string;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | ReactNode;
  variant?: ButtonVariants;
  padding?: string;
  borderRadius?: string;
  colorVariant?: IconButtonColors;
  colorCustomSetup?: ButtonCommonColorsSetup;
}

const ButtonCommon: FC<ButtonProps> = ({
  children,
  height = '4.6em',
  width,
  disabled,
  loading,
  iconLeft,
  iconRight,
  variant = BUTTON_VARIANTS.FILLED,
  onClick,
  text = 'Button',
  className,
  ...props
}) => {
  return (
    <Styled.ButtonContainer
      height={height}
      width={width}
      className={`btn ${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <div className="support-layer" />
      <ContainerIcon>{iconLeft}</ContainerIcon>
      {loading ? (
        <Styled.LoaderCoverFully>
          <Loading size="1.8em" />
        </Styled.LoaderCoverFully>
      ) : (
        children || <span>{text}</span>
      )}
      <ContainerIcon>{iconRight}</ContainerIcon>
    </Styled.ButtonContainer>
  );
};

export { ButtonCommon };
