import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './lang/en.mjs';
import { ta } from './lang/ta.mjs';

const resources = {
    en: en,
    ta: ta,
}

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources,
    });

export default i18next;
