import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

interface ILanguage {
  key: string;
  value: string;
}

export const languages: ILanguage[] = [
  { key: 'Ru', value: 'ru-RU' },
  { key: 'En', value: 'en-US' },
];

export const changeLanguage = async (language: string) => {
  if (!i18next.getDataByLanguage(language)) {
    const data = await import(`./${language}.json`);
    i18next.addResourceBundle(language, 'translations', data, true, true);
  }
  await i18next.changeLanguage(language);
};

export const initLocales = async () => {
  await i18next.use(initReactI18next).use(LanguageDetector).init({
    debug: false,
    ns: 'translations',
    resources: {},
  });

  await changeLanguage(i18next.language);
};
