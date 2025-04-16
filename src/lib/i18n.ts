import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';

// Get browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
  // Check if the language matches our supported languages
  if (browserLang?.startsWith('pt')) {
    return 'pt';
  }
  if (browserLang?.startsWith('en')) {
    return 'en';
  }
  // Default to English if no match
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      pt: {
        translation: ptTranslation
      }
    },
    lng: getBrowserLanguage(), // Use browser language if supported
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 