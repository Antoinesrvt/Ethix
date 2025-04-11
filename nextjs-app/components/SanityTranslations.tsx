'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { defaultLocale } from '@/i18n';

// Define the translation context type
interface TranslationsContextType {
  translations: Record<string, any>;
  isLoading: boolean;
  locale: string;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

// Create the context with default values
const TranslationsContext = createContext<TranslationsContextType>({
  translations: {},
  isLoading: true,
  locale: defaultLocale,
  t: (key) => key,
});

// Hook to use translations
export const useSanityTranslations = () => useContext(TranslationsContext);

// Groq query to fetch translations from Sanity
const translationsQuery = `*[_type == "translation" && language == $language][0]{
  "translations": content
}`;

interface SanityTranslationsProviderProps {
  children: ReactNode;
  initialTranslations?: Record<string, any>;
  fallbackLocale?: string;
}

export function SanityTranslationsProvider({ 
  children, 
  initialTranslations = {},
  fallbackLocale = defaultLocale
}: SanityTranslationsProviderProps) {
  // Get the current locale from URL params
  const params = useParams();
  const locale = (params?.locale as string) || fallbackLocale;
  
  // State for translations
  const [translations, setTranslations] = useState<Record<string, any>>(initialTranslations);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch translations from Sanity
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoading(true);
        
        const result = await client.fetch(translationsQuery, { language: locale });
        
        if (result && result.translations) {
          setTranslations(result.translations);
        } else {
          console.warn(`No translations found for locale: ${locale}`);
          
          // If we don't have translations for this locale, try to fetch the fallback
          if (locale !== fallbackLocale) {
            const fallbackResult = await client.fetch(translationsQuery, { language: fallbackLocale });
            if (fallbackResult && fallbackResult.translations) {
              setTranslations(fallbackResult.translations);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching translations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Only fetch if we don't already have translations for this locale
    if (Object.keys(initialTranslations).length === 0) {
      fetchTranslations();
    } else {
      setIsLoading(false);
    }
  }, [locale, fallbackLocale, initialTranslations]);
  
  // Translation function
  const t = (key: string, replacements?: Record<string, string | number>): string => {
    // Split the key by dots to access nested properties
    const keyParts = key.split('.');
    
    // Traverse the translations object
    let current: any = translations;
    for (const part of keyParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // If the key doesn't exist, return the key itself as fallback
        return key;
      }
    }
    
    // If we found a string value
    if (typeof current === 'string') {
      // Replace placeholders if replacements are provided
      if (replacements) {
        let result = current;
        for (const [key, value] of Object.entries(replacements)) {
          result = result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
        }
        return result;
      }
      return current;
    }
    
    // If it's not a string, return the key as fallback
    return key;
  };
  
  return (
    <TranslationsContext.Provider value={{ translations, isLoading, locale, t }}>
      {children}
    </TranslationsContext.Provider>
  );
}

// Higher Order Component to inject translations into any component
export function withSanityTranslations<P extends { t?: (key: string, replacements?: Record<string, string | number>) => string }>(
  Component: React.ComponentType<P>
) {
  return function WithTranslations(props: Omit<P, 't'>) {
    const { t } = useSanityTranslations();
    return <Component {...(props as P)} t={t} />;
  };
} 