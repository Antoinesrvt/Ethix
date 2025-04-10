/**
 * Core internationalization configuration
 * Single source of truth for locale settings
 */

// Available languages with their metadata
export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', isDefault: true },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

// Extract just the locale codes for i18next
export const locales = languages.map(lang => lang.code);

// Default locale for the application
export const defaultLocale = languages.find(lang => lang.isDefault)?.code || 'en';

/**
 * Load messages for a specific locale
 */
export async function getMessages(locale: string) {
  try {
    return (await import(`./public/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Return empty object rather than throwing to prevent runtime errors
    return {};
  }
}

/**
 * Extract localized content from a Sanity document based on requested language
 * Falls back to default language if requested language is not available
 */
export function getLocalizedValue<T>(
  document: any,
  fieldPath: string,
  language: string = defaultLocale
): T | undefined {
  // First check if the field has a direct localization in localizedContent
  if (document?.localizedContent?.[language]?.[fieldPath]) {
    return document.localizedContent[language][fieldPath];
  }
  
  // Check if there's a field with this name in the document
  if (document?.[fieldPath]) {
    return document[fieldPath];
  }
  
  // If not found in requested language, fall back to default language
  if (language !== defaultLocale && document?.localizedContent?.[defaultLocale]?.[fieldPath]) {
    return document.localizedContent[defaultLocale][fieldPath];
  }
  
  return undefined;
}

/**
 * Build a complete record with all fields for a given language
 * This merges the base document fields with language-specific overrides
 */
export function getLocalizedDocument(document: any, language: string = defaultLocale): any {
  if (!document) return document;
  
  const result = { ...document };
  
  // If document has localized content for the requested language, 
  // merge it with the base document
  if (document.localizedContent?.[language]) {
    Object.entries(document.localizedContent[language]).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    });
  }
  
  return result;
}

/**
 * Get the path for a specific language
 */
export function getLocalizedPath(path: string, language: string): string {
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(en|fr)(?:\/|$)/, '/');
  
  // Add the language prefix
  return `/${language}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
}

/**
 * Extract locale from pathname
 */
export function extractLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
} 