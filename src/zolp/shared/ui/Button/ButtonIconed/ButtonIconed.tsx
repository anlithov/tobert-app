import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { IconButtonColors } from './libs/types/button-iconed.types.ts';
import { IconButtonContainer } from './ButtonIconed.styled.ts';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  height?: string;
  width: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  variant?: 'filled' | 'tonal' | 'outlined' | 'flat';
  color?: IconButtonColors;
  borderRadius?: string;
}

const ButtonIconed: FC<Props> = ({
  children,
  height,
  width,
  disabled,
  loading,
  variant = 'filled',
  color = 'primary',
  onClick,
  active,
  ...props
}) => {
  return (
    <IconButtonContainer
      height={height}
      width={width}
      className={`btn ${variant} ${active ? 'active' : ''}`}
      color={color}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </IconButtonContainer>
  );
};

export default ButtonIconed;
