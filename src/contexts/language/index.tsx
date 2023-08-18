import { createContext, type FC, type PropsWithChildren, useState } from 'react';
import { dictionaryList } from '../../vocabs';

type Language = 'fa' | 'en';
enum Lang {
  FA = 'fa',
  EN = 'en',
}
const lang: string = window.localStorage.getItem('lang') ?? 'en';
console.log(lang);
const langu: Language = Lang.FA == lang ? Lang.FA : Lang.EN;
// type la<T extends Lang.FA | Lang.EN> =T extends   ? Lang.FA: Lang.EN
console.log(langu)
type mmd<T extedns (typeof dictionaryList)> 
// type la<T > = T extends Lang.FA 
interface LanguageContextValue {
  userLanguage: Language;
  dictionary:  (typeof dictionaryList)[lang];
  changeLanguage: (lang: string) => void;
}

type LanguageProviderValue = Record<string, unknown>;
export const LanguageContext = createContext<LanguageContextValue>({
  userLanguage: Lang.FA == lang ? Lang.FA : Lang.EN,
  dictionary: dictionaryList[Lang.EN || Lang.FA],
  changeLanguage: () => {},
});

export const LanguageProvider: FC<PropsWithChildren<LanguageProviderValue>> = (props) => {
  console.log(lang);
  const [language, setLanguage] = useState<Language>(langu);

  const provider = {
    userLanguage: language,
    changeLanguage: () => setLanguage,
    dictionary: dictionaryList[langu],
  };

  return <LanguageContext.Provider value={provider}>{props.children}</LanguageContext.Provider>;
};
