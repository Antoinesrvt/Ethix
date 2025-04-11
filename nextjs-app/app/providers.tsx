'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/client';
import { defaultLocale } from '@/i18n';
import { SanityTranslationsProvider } from '@/components/SanityTranslations';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

/**
 * I18n Provider
 * This component provides the i18n context to client components
 * It should only be used in client components, not server components
 */
function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

/**
 * Root providers wrapper
 * This component wraps all the providers needed for the app
 */
export default function Providers({
  children,
  locale = defaultLocale,
  initialTranslations = {},
}: {
  children: React.ReactNode;
  locale?: string;
  initialTranslations?: Record<string, any>;
}) {
  return (
    <I18nProvider locale={locale}>
      <SanityTranslationsProvider 
        initialTranslations={initialTranslations}
        fallbackLocale={defaultLocale}
      >
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child, i) => 
            React.isValidElement(child) ? 
              React.cloneElement(child, { key: `page-${i}` }) : 
              child
          )}
        </AnimatePresence>
      </SanityTranslationsProvider>
    </I18nProvider>
  );
} 