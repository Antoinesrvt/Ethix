'use client';

import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { locales, defaultLocale } from './index';

/**
 * Initialize i18next instance for client-side usage
 * Uses cookies/localStorage for language detection instead of URL paths
 */
const i18n = i18next.createInstance();

// Define proper type for the configuration
const i18nConfig: InitOptions = {
  // Default language
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  
  // Supported languages
  supportedLngs: locales,
  
  // Default namespace
  defaultNS: 'common',
  fallbackNS: 'common',
  ns: ['common'],
  
  // Backend configuration
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  
  // Language detection configuration
  detection: {
    // Prioritize cookie over localStorage over navigator
    order: ['cookie', 'localStorage', 'navigator'],
    
    // Cookie configuration
    lookupCookie: 'NEXT_LOCALE',
    // Using standard cookie options compatible with the type
    cookieOptions: {
      // Create a proper Date object for the expiration
      expires: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000), // 2 years
      path: '/',
      domain: typeof window !== 'undefined' ? window.location.hostname : '',
    },
    
    // LocalStorage configuration
    lookupLocalStorage: 'i18nextLng',
    
    // Cache the language
    caches: ['cookie', 'localStorage'],
  },
  
  // React configuration
  react: {
    useSuspense: false,
  },
  
  // Don't escape values (React handles this)
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init(i18nConfig);

export default i18n; 