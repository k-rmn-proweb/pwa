import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
// import Ru from './ru.json';
// import En from './en.json';

export const languages: string[] = ['ru', 'en'];

export const initLocales = async () => {
  await i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace, callback) => {
        import(`./${language}/.json`)
          .then((resources) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
          });
      })
    )
    .init({
      fallbackLng: 'en',
      lng: 'en',
      debug: false,
      resources: {},
    });

  return i18next.languages;
};
