'use client';

import { useParams } from 'next/navigation';
import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { locales, defaultLocale } from './index';

/**
 * Gets the current locale from route params
 */
export function useLocale(): string {
  const params = useParams();
  return (params?.locale as string) || defaultLocale;
}

/**
 * React hook for translations in client components
 */
export function useTranslation(namespace: string = 'common') {
  const locale = useLocale();
  const { t, i18n } = useI18nextTranslation(namespace);
  
  /**
   * Change the current language
   */
  function changeLocale(newLocale: string) {
    if (locales.includes(newLocale)) {
      i18n.changeLanguage(newLocale);
    }
  }
  
  return {
    t,
    i18n,
    locale,
    changeLocale,
  };
} 