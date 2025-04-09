import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useIntl } from 'react-intl';
import { defineMessagesExtended } from '../../zolp/shared/lib/helpers/define-messages-extended.ts';

const yupRewrite = defineMessagesExtended('messages.yuRewrite')({
  required: 'Please, fill out this field',
});

const YupRewriteMessagesProvider = () => {
  const intl = useIntl();

  useEffect(() => {
    Yup.setLocale({
      mixed: {
        required: intl.formatMessage(yupRewrite.required), // Override the default "required" message
      },
      // You can also override other messages here
    });
  }, []);

  return <div></div>;
};

export default YupRewriteMessagesProvider;
