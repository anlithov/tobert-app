import React, { FC } from 'react';
import InlineMessage from '../../../../../../zolp/shared/ui/atoms/InlineMessages/InlineMessage.tsx';

interface Props {
  text: string | null;
  variant: 'error' | 'warning' | 'success';
}
const LoginErrorInformer: FC<Props> = ({ text, variant }) => {
  return text && <InlineMessage variant={variant} text={text} />;
};

export default LoginErrorInformer;
