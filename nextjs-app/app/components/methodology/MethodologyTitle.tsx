'use client';

import { Trans, useTranslation } from 'react-i18next';

export default function MethodologyTitle() {
  const { t } = useTranslation();
  
  // Check if the translation key exists before using Trans
  let hasTranslation = false;
  try {
    const titleTranslation = t('methodology.heading');
    hasTranslation = !!titleTranslation && titleTranslation !== 'methodology.heading';
  } catch (error) {
    console.warn('Translation missing for methodology heading');
  }
  
  if (!hasTranslation) {
    // Fallback to plain text with styled component
    return (
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
        Our <em className="text-earth-green">Methodology</em>
      </h1>
    );
  }
  
  // Use Trans component if translation exists
  return (
    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
      <Trans 
        i18nKey="methodology.heading"
        components={{
          em: <em className="text-earth-green" />
        }}
      />
    </h1>
  );
} 