'use client';

import { useTranslation } from 'react-i18next';
import { useParams, usePathname } from 'next/navigation';
import { getLocalizedPath, extractLocaleFromPath, locales, defaultLocale } from '../i18n';

/**
 * Hook to get current locale from route params in client components
 * @returns The current locale
 */
export function useLocale(): string {
  const params = useParams();
  return params?.locale as string || defaultLocale;
}

/**
 * Hook to get a path for another locale
 * @param locale The target locale
 * @returns A function that converts a path to the target locale
 */
export function useLocalizedPath(locale: string) {
  const pathname = usePathname();
  return (path: string = pathname) => getLocalizedPath(path, locale);
}

/**
 * Hook to get localized href for navigation
 * @param path The path to localize
 * @returns The path with the current locale prefix
 */
export function useLocalizedHref(path: string): string {
  const locale = useLocale();
  return getLocalizedPath(path, locale);
}

/**
 * Hook to get translation functions and current locale
 * @param namespace The translation namespace
 * @returns Translation utilities and current locale
 */
export function useI18n(namespace: string = 'common') {
  const locale = useLocale();
  const { t, i18n } = useTranslation(namespace);
  
  return {
    t,
    i18n,
    locale,
    changeLocale: (newLocale: string) => {
      if (locales.includes(newLocale)) {
        i18n.changeLanguage(newLocale);
      }
    }
  };
}

// Re-export key functions for convenience
export { 
  getLocalizedPath,
  extractLocaleFromPath,
  locales,
  defaultLocale
}; 