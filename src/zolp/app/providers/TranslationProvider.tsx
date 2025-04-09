import React, { FC, PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';
import { create } from 'zustand/react';
import { Locales, LOCALES } from '../translations/locales.ts';
import { translations } from '../translations/translation.ts';

type LangStore = {
  language: Locales;
  setLanguage: (mode: Locales) => void;
};

export const useLanguageStore = create<LangStore>()((set) => ({
  language: LOCALES.EN,
  setLanguage: (language) => set({ language }),
}));

const TranslationProvider: FC<PropsWithChildren> = ({ children }) => {
  const { language } = useLanguageStore();

  return (
    <IntlProvider
      messages={translations[language]}
      locale={language}
      defaultLocale={LOCALES.EN}
    >
      {children}
    </IntlProvider>
  );
};

export default TranslationProvider;
