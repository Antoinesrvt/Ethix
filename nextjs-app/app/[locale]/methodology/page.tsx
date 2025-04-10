import React from 'react';
import { Metadata } from 'next';
import { initServerTranslations } from '@/i18n/init';
import { t } from '@/i18n/server';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

import MethodologyPageContent from './content';

// Type definition for metadata generation params
type Props = {
  params: Promise<{ locale: string }>;
};

// Generate metadata with proper translation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Extract and validate locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Initialize translations
  await initServerTranslations(locale);
  
  return {
  title: 'Our Methodology | Ethix',
  description: 'Learn how we evaluate and rate sustainable products across environmental and social impact dimensions.',
};
}

// Server component for static page content
export default async function MethodologyPage({ params }: Props) {
  // Extract and validate locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Initialize translations for server components
  await initServerTranslations(locale);
  
  return <MethodologyPageContent locale={locale} />;
}

// Type definitions for translated content
type FAQ = {
  question: string;
  answer: string;
};

