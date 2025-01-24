import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const defaultLanguage = localStorage.getItem('language') || 'zh';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const languages = [
  { key: 'zh', label: '中文' },
  { key: 'en', label: 'English' },
  // { key: 'ja', label: '日本語' },
];

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    lng: defaultLanguage,
    debug: true,
    backend: {
      loadPath: `${baseUrl}locales/{{lng}}/{{ns}}.json`,
    },
    ns: ['ui', 'home', 'about', 'projects'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
