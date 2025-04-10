'use client';

import { useRouter as useNextRouter } from 'next/navigation';
import { useCallback } from 'react';
import { getLocalizedPath, defaultLocale } from './i18n';
import Link from 'next/link';
import { ComponentProps, ReactElement } from 'react';

/**
 * Extract locale from pathname
 */
function extractLocaleFromPath(path: string): string {
  const pathSegments = path.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (firstSegment === 'en' || firstSegment === 'fr') {
    return firstSegment;
  }
  
  return defaultLocale;
}

/**
 * Custom router hook that handles localized routing
 */
export function useRouter() {
  const nextRouter = useNextRouter();
  
  const push = useCallback((href: string, options: { locale?: string } = {}) => {
    const currentPath = window.location.pathname;
    const currentLocale = extractLocaleFromPath(currentPath);
    const targetLocale = options.locale || currentLocale;
    
    const localizedPath = getLocalizedPath(href, targetLocale);
    nextRouter.push(localizedPath);
  }, [nextRouter]);

  return {
    ...nextRouter,
    push,
  };
}

/**
 * Props for the LocalizedLink component
 */
interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string;
  locale?: string;
}

/**
 * Custom Link component for internationalized routing
 */
export function LocalizedLink({ 
  href, 
  locale, 
  ...props 
}: LocalizedLinkProps): ReactElement {
  // Allow locale override or get it from the current path
  let targetLocale = locale;
  if (!targetLocale && typeof window !== 'undefined') {
    targetLocale = extractLocaleFromPath(window.location.pathname);
  }
  
  const localizedHref = targetLocale 
    ? getLocalizedPath(href.toString(), targetLocale)
    : href;
  
  return <Link href={localizedHref} {...props} />;
} 