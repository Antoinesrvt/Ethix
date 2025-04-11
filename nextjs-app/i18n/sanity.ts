/**
 * Sanity-specific localization utilities
 * This file contains functions for working with localized content in Sanity
 */

import { defaultLocale } from './index';

/**
 * A more robust typesafe function to extract localized content from a Sanity document
 */
export function extractLocalizedContent<T>(
  document: Record<string, any> | null | undefined,
  fieldName: string,
  locale: string = defaultLocale
): T | undefined {
  if (!document) return undefined;
  
  // First try to get the content from the localized content field
  if (document.localizedContent?.[locale]?.[fieldName]) {
    return document.localizedContent[locale][fieldName] as T;
  }
  
  // Next try to get it from the base field
  if (document[fieldName] !== undefined && document[fieldName] !== null) {
    return document[fieldName] as T;
  }
  
  // Finally, fall back to the default locale
  if (locale !== defaultLocale && document.localizedContent?.[defaultLocale]?.[fieldName]) {
    return document.localizedContent[defaultLocale][fieldName] as T;
  }
  
  return undefined;
}

// For documents that have the criteria field
interface DocumentWithCriteria extends Record<string, any> {
  criteria?: Array<{
    localizedContent?: Record<string, Record<string, any>>;
    [key: string]: any;
  }>;
}

/**
 * Process an entire document to create a fully localized version
 * This returns a new object with all localizable fields replaced with their localized versions
 */
export function createLocalizedDocument<T extends Record<string, any>>(
  document: T | null | undefined,
  locale: string = defaultLocale
): T | undefined {
  if (!document) return undefined;
  
  // Start with the original document
  const result = { ...document } as T;
  
  // Overlay localized content if available
  if (document.localizedContent?.[locale]) {
    Object.entries(document.localizedContent[locale]).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        (result as Record<string, any>)[key] = value;
      }
    });
  }
  
  // Handle nested localizable objects (like criteria in certifications)
  const docWithCriteria = document as DocumentWithCriteria;
  if (Array.isArray(docWithCriteria.criteria)) {
    (result as unknown as DocumentWithCriteria).criteria = docWithCriteria.criteria.map((criterion) => {
      const localizedCriterion = { ...criterion };
      
      if (criterion.localizedContent?.[locale]) {
        Object.entries(criterion.localizedContent[locale]).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            localizedCriterion[key] = value;
          }
        });
      }
      
      return localizedCriterion;
    });
  }
  
  return result;
}

/**
 * Extract localized content from object fields that have their own localizedContent structure
 */
export function extractNestedLocalizedContent<T>(
  object: Record<string, any> | null | undefined,
  fieldName: string,
  locale: string = defaultLocale
): T | undefined {
  if (!object) return undefined;
  
  // First try to get the content from the localized content field
  if (object.localizedContent?.[locale]?.[fieldName]) {
    return object.localizedContent[locale][fieldName] as T;
  }
  
  // Next try to get it from the base field
  if (object[fieldName] !== undefined && object[fieldName] !== null) {
    return object[fieldName] as T;
  }
  
  // Finally, fall back to the default locale
  if (locale !== defaultLocale && object.localizedContent?.[defaultLocale]?.[fieldName]) {
    return object.localizedContent[defaultLocale][fieldName] as T;
  }
  
  return undefined;
}

/**
 * Get translated text from a localized block content field
 * This is useful for rich text fields that use Portable Text
 */
export function getLocalizedBlockContent(
  document: Record<string, any> | null | undefined,
  fieldName: string,
  locale: string = defaultLocale
) {
  return extractLocalizedContent<any[]>(document, fieldName, locale) || 
         document?.[fieldName] || 
         [];
}

/**
 * Type definitions for common Sanity document structures
 */

// Base localized content structure
export interface LocalizedContent {
  en?: Record<string, any>;
  fr?: Record<string, any>;
  [key: string]: Record<string, any> | undefined;
}

// Document with localized content
export interface LocalizedDocument {
  localizedContent?: LocalizedContent;
  [key: string]: any;
}

// Common certification structure
export interface Certification extends LocalizedDocument {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  category?: string;
  credibility?: number;
  logo?: any;
  website?: string;
  criteria?: Array<{
    name: string;
    description?: string;
    localizedContent?: LocalizedContent;
  }>;
}

// Common product structure
export interface Product extends LocalizedDocument {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  category?: { name: string; slug: { current: string } };
  price?: number;
  images?: any[];
  brand?: {
    name: string;
    logo?: any;
    slug: { current: string };
  };
  certifications?: Certification[];
} 