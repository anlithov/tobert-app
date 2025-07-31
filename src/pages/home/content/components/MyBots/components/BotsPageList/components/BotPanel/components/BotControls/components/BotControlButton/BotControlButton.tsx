import React, { FC } from 'react';
import { Container } from './BotControlButton.styled.ts';
import { RxResume } from 'react-icons/rx';
import { PiPause } from 'react-icons/pi';
import { IoStopOutline } from 'react-icons/io5';
import { Loading } from '../../../../../../../../../../../../../zolp/shared/ui/atoms/Loading/Loading.tsx';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  type: 'resume' | 'stop' | 'pause';
  onClick?: () => void;
}

const ICONS = {
  resume: <RxResume size="1.6em" />,
  pause: <PiPause size="1.6em" />,
  stop: <IoStopOutline size="1.8em" />,
};

const BotControlButton: FC<Props> = ({ loading, type, onClick, disabled }) => {
  return (
    <Container
      className={`${type} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
      onClick={onClick}
    >
      {loading ? <Loading size="2em" /> : ICONS[type]}
    </Container>
  );
};

export default BotControlButton;
