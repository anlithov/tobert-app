import enTranslationMessages from './languages/en.json';
import uaTranslationMessages from './languages/ua.json';

import { LOCALES } from './locales';

const formatTranslationMessages = (
  locale: string,
  messages: { [key: string]: string },
): { [key: string]: string } => {
  const defaultLocale = LOCALES.EN;

  const messageKeys = Object.keys(messages);

  const defaultFormattedMessages =
    locale !== defaultLocale
      ? formatTranslationMessages(defaultLocale, enTranslationMessages)
      : {};

  return messageKeys.reduce((formattedMessages, key) => {
    const isDefaultFormattedMessage =
      !messages[key] && locale !== defaultLocale;
    const formattedMessage = isDefaultFormattedMessage
      ? defaultFormattedMessages[key]
      : messages[key];

    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translations = {
  [LOCALES.EN]: formatTranslationMessages(LOCALES.EN, enTranslationMessages),
  [LOCALES.UA]: formatTranslationMessages(LOCALES.UA, uaTranslationMessages),
};
