import { defineMessages, MessageDescriptor } from 'react-intl';

export const defineMessagesExtended = <
  T extends keyof any,
  U extends string,
  O extends Record<T, U> = Record<T, U>,
>(
  commonPath = '',
) => {
  return <I = O>(messagesMap: I): Record<keyof I, MessageDescriptor> => {
    const obj: Record<string, MessageDescriptor> = {};
    const keys = Object.keys(messagesMap as object);
    for (const key of keys) {
      obj[key] = {
        id: commonPath + '.' + key,
        // @ts-ignore
        defaultMessage: messagesMap[key] as string,
      };
    }

    return defineMessages(obj) as Record<keyof I, MessageDescriptor>;
  };
};
