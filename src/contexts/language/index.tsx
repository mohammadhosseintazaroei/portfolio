import { createContext, type FC, type PropsWithChildren, useState } from 'react';
import { dictionaryList } from '../../vocabs';

type Language = 'fa' | 'en';

interface LanguageContextValue {
  userLanguage: Language;
  dictionary: (typeof dictionaryList)['fa'];
  changeLanguage: (lang: string) => void;
}

type LanguageProviderValue = Record<string, unknown>;

export const LanguageContext = createContext<LanguageContextValue>({
  userLanguage: 'fa',
  dictionary: dictionaryList.fa,
  changeLanguage: () => {},
});

export const LanguageProvider: FC<PropsWithChildren<LanguageProviderValue>> = (props) => {
  const [language, setLanguage] = useState<Language>('fa');

  const provider = {
    userLanguage: language,
    changeLanguage: () => setLanguage,
    dictionary: dictionaryList.fa,
  };

  return <LanguageContext.Provider value={provider}>{props.children}</LanguageContext.Provider>;
};
