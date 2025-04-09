import React, { FC } from 'react';
import { CgSandClock } from 'react-icons/cg';
import { THEME_MODES } from '../../../../app/theme/theme-modes.ts';
import { useTheme } from 'styled-components';
import { Container } from './SandClockAnimated.styled.ts';

interface Props {
  size?: string;
}
const SandClockAnimated: FC<Props> = ({ size = '7.4em' }) => {
  const theme = useTheme();

  return (
    <Container size={size}>
      <CgSandClock
        color={
          theme.mode === THEME_MODES.light
            ? theme.palette.primary500
            : theme.palette.primary600
        }
      />
    </Container>
  );
};

export default SandClockAnimated;
