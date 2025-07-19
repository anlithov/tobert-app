import React, { FC } from 'react';
import InlineMessage from '../../../../../../zolp/shared/ui/atoms/InlineMessages/InlineMessage.tsx';

interface Props {
  text: string;
  variant: 'error' | 'warning';
}
const RegisterErrorInformer: FC<Props> = ({ text, variant }) => {
  return <InlineMessage variant={variant} text={text} />;
};

export default RegisterErrorInformer;
