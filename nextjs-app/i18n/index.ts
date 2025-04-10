/**
 * i18n configuration for the application
 */

// List of supported locales
export const locales = ['en', 'fr'];

// Default locale
export const defaultLocale = 'en';

// Flag icons for each locale
export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', isDefault: true },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

/**
 * Helper function to safely load translation messages
 * Uses fetch API instead of dynamic imports to avoid Next.js issues
 */
export async function getMessages(locale: string) {
  try {
    // In a server environment (Node.js), use fs to read files from the filesystem
    if (typeof window === 'undefined') {
      // Server-side (import fs dynamically to avoid including it in client bundles)
      const fs = await import('fs/promises');
      const path = await import('path');
      
      try {
        const filePath = path.default.join(process.cwd(), 'public', 'locales', locale, 'common.json');
        const fileContents = await fs.default.readFile(filePath, 'utf8');
        return JSON.parse(fileContents);
      } catch (err) {
        console.error(`Failed to load translation file for ${locale}:`, err);
        return {};
      }
    } 
    // In a browser environment, use fetch API
    else {
      const response = await fetch(`/locales/${locale}/common.json`);
      if (!response.ok) {
        throw new Error(`Failed to load locale: ${locale}`);
      }
      return await response.json();
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Return empty object rather than throwing to prevent runtime errors
    return {};
  }
}

/**
 * Generates a localized path with the specified locale
 */
export function getLocalizedPath(path: string, locale: string): string {
  // Remove existing locale prefix if present
  const pathWithoutLocale = path.replace(/^\/(en|fr)(?:\/|$)/, '/');
  return `/${locale}${pathWithoutLocale}`;
}

/**
 * Extracts localized content from a document
 */
export function getLocalizedValue<T>(
  document: any,
  fieldName: string, 
  locale: string = defaultLocale
): T | undefined {
  // Try to get the localized value
  if (document?.localizedContent?.[locale]?.[fieldName]) {
    return document.localizedContent[locale][fieldName];
  }
  
  // Fall back to the base field
  if (document?.[fieldName]) {
    return document[fieldName];
  }
  
  // Finally, try the default locale
  if (locale !== defaultLocale && document?.localizedContent?.[defaultLocale]?.[fieldName]) {
    return document.localizedContent[defaultLocale][fieldName];
  }
  
  return undefined;
}

/**
 * Returns a fully localized document
 */
export function getLocalizedDocument(document: any, locale: string = defaultLocale): any {
  if (!document) return document;
  
  // Start with the original document
  const result = { ...document };
  
  // Overlay localized content if available
  if (document.localizedContent?.[locale]) {
    Object.entries(document.localizedContent[locale]).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    });
  }
  
  return result;
} 