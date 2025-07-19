import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { PiWarningCircleFill } from 'react-icons/pi';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

interface Props {
  size?: string;
}
const WarningGrey: FC<Props> = ({ size = '7.4em' }) => {
  const theme = useTheme();
  return (
    <PiWarningCircleFill
      color={
        theme.mode === THEME_MODES.light
          ? theme.palette.secondary200
          : theme.palette.secondary600
      }
      size={size}
    />
  );
};

export default WarningGrey;
