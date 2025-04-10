/**
 * This file provides initialization functions for server components
 * to ensure translations are available synchronously
 */
import { loadTranslationFile, setLocale } from './server';
import { locales, defaultLocale } from './index';

let isInitialized = false;

/**
 * Initialize translations for server components
 * This should be called in layout.tsx or similar server component
 * that runs before other components need translations
 */
export async function initServerTranslations(locale: string = defaultLocale): Promise<void> {
  if (isInitialized) return;
  
  try {
    // Set the locale
    setLocale(locale);
    
    // Load the common namespace
    await loadTranslationFile(locale, 'common');
    
    // Also load the fallback locale if different
    if (locale !== defaultLocale) {
      await loadTranslationFile(defaultLocale, 'common');
    }
    
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize server translations:', error);
  }
}

/**
 * Preload all supported locales (useful at build time)
 */
export async function preloadAllTranslations(): Promise<void> {
  try {
    for (const locale of locales) {
      await loadTranslationFile(locale, 'common');
    }
    
    isInitialized = true;
  } catch (error) {
    console.error('Failed to preload all translations:', error);
  }
} 