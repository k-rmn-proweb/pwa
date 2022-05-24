import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languages: string[] = ['ru', 'en'];

export const changeLanguage = async (language: string) => {
  const data = await import(`./${language}.json`);
  await i18next.changeLanguage(language);
  i18next.addResourceBundle(language, 'translations', data, true, true);
};

export const initLocales = async () => {
  await i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    ns: 'translations',
    resources: {},
  });

  await changeLanguage(i18next.language);
};
