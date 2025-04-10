import { createInstance } from 'i18next';
import path from 'path';
import { locales, defaultLocale } from './index';

// Track the current locale in a server context
let currentLocale = defaultLocale;
const resourcesCache = new Map<string, Record<string, any>>();

/**
 * Set the current locale for server-side rendering
 */
export function setLocale(locale: string): void {
  if (!locales.includes(locale)) {
    console.warn(`Invalid locale: ${locale}. Using default: ${defaultLocale}`);
    currentLocale = defaultLocale;
  } else {
    currentLocale = locale;
  }
}

/**
 * Get the current locale for server-side rendering
 */
export function getLocale(): string {
  return currentLocale;
}

/**
 * Load a translation file synchronously from the public directory
 */
export async function loadTranslationFile(locale: string, namespace: string): Promise<Record<string, any>> {
  const cacheKey = `${locale}:${namespace}`;
  
  // Return cached version if available
  if (resourcesCache.has(cacheKey)) {
    return resourcesCache.get(cacheKey)!;
  }
  
  try {
    let resources;
    
    // Use different approaches for server and client
    if (typeof window === 'undefined') {
      // Server-side: Use dynamic import for fs module
      const fs = await import('fs/promises');
      const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
      const content = await fs.readFile(filePath, 'utf8');
      resources = JSON.parse(content);
    } else {
      // Client-side: Use fetch API
      const response = await fetch(`/locales/${locale}/${namespace}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch locale: ${locale}`);
      }
      resources = await response.json();
    }
    
    // Cache the result
    resourcesCache.set(cacheKey, resources);
    return resources;
  } catch (error) {
    console.error(`Failed to load translation file for ${locale}/${namespace}:`, error);
    
    // Return empty object as fallback
    const emptyResources = {};
    resourcesCache.set(cacheKey, emptyResources);
    return emptyResources;
  }
}

/**
 * Create a translation function for the current locale
 */
export async function createTranslator(
  locale: string = getLocale(),
  namespace: string = 'common'
) {
  const resources = await loadTranslationFile(locale, namespace);
  
  // Return a translation function
  return function translate(key: string, replacements?: Record<string, string | number> | { returnObjects?: boolean }): any {
    // Handle the returnObjects option
    const options = replacements as { returnObjects?: boolean } || {};
    if (options.returnObjects) {
      // Split the key by dots to access nested properties
      const keyParts = key.split('.');
      
      // Traverse the resources object
      let current: any = resources;
      for (const part of keyParts) {
        if (current && typeof current === 'object' && part in current) {
          current = current[part];
        } else {
          // Key not found
          return {};
        }
      }
      
      return current;
    }
    
    // Handle string replacements
    const replacementValues = replacements as Record<string, string | number> || {};
    
    // Split the key by dots to access nested properties
    const keyParts = key.split('.');
    
    // Traverse the resources object
    let current: any = resources;
    for (const part of keyParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Key not found
        return key;
      }
    }
    
    // If we have a string value and replacements, apply them
    if (typeof current === 'string' && Object.keys(replacementValues).length > 0) {
      let result: string = current;
      for (const [replaceKey, replacement] of Object.entries(replacementValues)) {
        result = result.replace(
          new RegExp(`{{${replaceKey}}}`, 'g'), 
          String(replacement)
        );
      }
      return result;
    }
    
    return typeof current === 'string' ? current : key;
  };
}

/**
 * Shorthand translation function that works synchronously using cached data
 * or falls back to key if translation is not available
 */
export function t(
  key: string,
  replacements?: Record<string, string | number> | { returnObjects?: boolean },
  options?: { locale?: string; namespace?: string }
): any {
  const locale = options?.locale || getLocale();
  const namespace = options?.namespace || 'common';
  
  // Get cached data if available
  const cacheKey = `${locale}:${namespace}`;
  const cachedResources = resourcesCache.get(cacheKey);
  
  if (!cachedResources) {
    // If no cached data is available, return the key or empty object
    if (replacements && 'returnObjects' in replacements && replacements.returnObjects) {
      return {};
    }
    return key;
  }
  
  // Split the key by dots to access nested properties
  const keyParts = key.split('.');
  
  // Traverse the resources object
  let current: any = cachedResources;
  for (const part of keyParts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // Key not found
      if (replacements && 'returnObjects' in replacements && replacements.returnObjects) {
        return {};
      }
      return key;
    }
  }
  
  // Handle returnObjects option
  if (replacements && 'returnObjects' in replacements && replacements.returnObjects) {
    return current;
  }
  
  // If we have a string value and replacements, apply them
  const replacementValues = replacements as Record<string, string | number> || {};
  if (typeof current === 'string' && Object.keys(replacementValues).length > 0) {
    let result: string = current;
    for (const [replaceKey, replacement] of Object.entries(replacementValues)) {
      result = result.replace(
        new RegExp(`{{${replaceKey}}}`, 'g'), 
        String(replacement)
      );
    }
    return result;
  }
  
  return typeof current === 'string' ? current : key;
}

/**
 * Initialize i18next instance for server-side rendering
 * This version is simplified and doesn't use React-specific features
 */
export async function initI18next(locale: string, ns: string | string[] = 'common') {
  const namespaces = Array.isArray(ns) ? ns : [ns];
  const instance = createInstance();
  
  // Load all requested namespaces for the locale
  const resources: Record<string, Record<string, any>> = { [locale]: {} };
  
  for (const namespace of namespaces) {
    try {
      resources[locale][namespace] = await loadTranslationFile(locale, namespace);
    } catch (error) {
      console.error(`Failed to load namespace ${namespace} for locale ${locale}:`, error);
      resources[locale][namespace] = {};
    }
  }
  
  // Also load the default locale as fallback
  if (locale !== defaultLocale) {
    resources[defaultLocale] = {};
    
    for (const namespace of namespaces) {
      try {
        resources[defaultLocale][namespace] = await loadTranslationFile(defaultLocale, namespace);
      } catch (error) {
        console.error(`Failed to load fallback namespace ${namespace} for locale ${defaultLocale}:`, error);
        resources[defaultLocale][namespace] = {};
      }
    }
  }
  
  // Initialize i18next with the loaded resources
  instance.init({
    resources,
    lng: locale,
    fallbackLng: defaultLocale,
    defaultNS: 'common',
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });
    
  return instance;
}
