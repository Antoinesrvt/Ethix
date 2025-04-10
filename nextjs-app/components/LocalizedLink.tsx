'use client';

import Link from 'next/link';
import { ComponentProps, ReactElement } from 'react';
import { useParams } from 'next/navigation';
import { getLocalizedPath } from '@/i18n';
import { locales, defaultLocale } from '@/i18n';

/**
 * Props for the LocalizedLink component
 */
interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string;
  locale?: string;
  children: React.ReactNode;
}

/**
 * Get the current locale from URL params
 */
function useLocale(): string {
  const params = useParams();
  return (params?.locale as string) || defaultLocale;
}

/**
 * Link component that automatically adds the current locale to the path
 */
export default function LocalizedLink({ 
  href, 
  locale,
  children,
  ...props 
}: LocalizedLinkProps): ReactElement {
  // Get current locale from route params
  const currentLocale = useLocale();
  
  // Target locale is either the explicitly provided one or the current one
  const targetLocale = locale || currentLocale;
  
  // Don't modify external links
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  
  // Use our utility to add the locale prefix
  const localizedHref = isExternal ? href : getLocalizedPath(href, targetLocale);
  
  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
} 