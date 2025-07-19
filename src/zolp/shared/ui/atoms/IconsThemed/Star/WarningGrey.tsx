import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { THEME_MODES } from '../../../../../app/theme/theme-modes.ts';

const StarGrey: FC = () => {
  const theme = useTheme();
  return (
    <BsStarFill
      size="5em"
      fill={
        theme.mode === THEME_MODES.light
          ? theme.palette.secondary200
          : theme.palette.secondary600
      }
    />
  );
};

export default StarGrey;
