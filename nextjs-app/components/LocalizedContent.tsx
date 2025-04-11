'use client';

import { useParams } from 'next/navigation';
import { ReactNode } from 'react';
import { extractLocalizedContent } from '@/i18n/sanity';
import { defaultLocale } from '@/i18n';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';

interface LocalizedTextProps {
  document: Record<string, any> | null | undefined;
  field: string;
  fallback?: string;
  locale?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  animation?: boolean;
  animationDelay?: number;
}

/**
 * Component for displaying localized text content from a Sanity document
 */
export function LocalizedText({
  document,
  field,
  fallback = '',
  locale,
  className = '',
  as: Component = 'span',
  animation = false,
  animationDelay = 0,
}: LocalizedTextProps) {
  const params = useParams();
  const currentLocale = locale || (params?.locale as string) || defaultLocale;
  
  const localizedValue = extractLocalizedContent<string>(document, field, currentLocale) || fallback;
  
  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay }}
      >
        <Component className={className}>{localizedValue}</Component>
      </motion.div>
    );
  }
  
  return <Component className={className}>{localizedValue}</Component>;
}

interface LocalizedBlockContentProps {
  document: Record<string, any> | null | undefined;
  field: string;
  locale?: string;
  className?: string;
  animation?: boolean;
  animationDelay?: number;
  components?: Record<string, ReactNode>;
}

/**
 * Component for displaying localized block content (rich text) from a Sanity document
 */
export function LocalizedBlockContent({
  document,
  field,
  locale,
  className = '',
  animation = false,
  animationDelay = 0,
  components,
}: LocalizedBlockContentProps) {
  const params = useParams();
  const currentLocale = locale || (params?.locale as string) || defaultLocale;
  
  const blockContent = extractLocalizedContent<any[]>(document, field, currentLocale) || [];
  
  const content = (
    <div className={className}>
      <PortableText 
        value={blockContent} 
        components={components} 
      />
    </div>
  );
  
  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay }}
      >
        {content}
      </motion.div>
    );
  }
  
  return content;
}

interface LocalizedImageProps {
  document: Record<string, any> | null | undefined;
  field: string;
  locale?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  animation?: boolean;
  animationDelay?: number;
}

/**
 * Component for displaying localized images from a Sanity document
 * This currently doesn't switch the image based on locale, but could be extended to do so.
 */
export function LocalizedImage({
  document,
  field,
  locale,
  alt = '',
  className = '',
  width,
  height,
  animation = false,
  animationDelay = 0,
}: LocalizedImageProps) {
  const params = useParams();
  const currentLocale = locale || (params?.locale as string) || defaultLocale;
  
  const imageField = document?.[field];
  
  if (!imageField) return null;
  
  // TODO: Implement logic for localized images if needed
  
  if (animation) {
    return (
      <motion.img
        src={imageField.url}
        alt={alt || imageField.alt || ''}
        width={width}
        height={height}
        className={className}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: animationDelay }}
      />
    );
  }
  
  return (
    <img
      src={imageField.url}
      alt={alt || imageField.alt || ''}
      width={width}
      height={height}
      className={className}
    />
  );
} 