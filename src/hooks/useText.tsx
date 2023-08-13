import { useCallback, useContext } from 'react';
import { LanguageContext } from '../contexts/language';

export const useText = () => {
  const languageContext = useContext(LanguageContext);
  const translator = useCallback((tid: keyof typeof languageContext.dictionary) => {
    const res = languageContext.dictionary[tid];
    if (!res) {
      console.debug(`translation key not found ${tid}`);
      return tid;
    }

    return res;
  }, []);
  return translator;
};
