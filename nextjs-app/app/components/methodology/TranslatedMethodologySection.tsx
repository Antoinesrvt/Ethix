'use client';

import { useState, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MethodologySection from './MethodologySection';

type CategoryKey = 'environmental' | 'social' | 'governance';

type TranslatedMethodologySectionProps = {
  categoryKey: CategoryKey;
  icon: ReactNode;
  delay?: number;
};

// Define fallback metrics for each category
const fallbackMetrics = {
  environmental: [
    {
      name: "Carbon Footprint",
      description: "Measures greenhouse gas emissions throughout the product lifecycle, converted to CO2 equivalent (CO2e).",
      methodology: "Data is gathered from lifecycle assessments, manufacturer disclosures, and industry benchmarks."
    },
    {
      name: "Water Usage",
      description: "Quantifies the total water consumption required for production, including water used in material extraction.",
      methodology: "We analyze water consumption data across the supply chain, with particular attention to water-intensive materials and manufacturing processes."
    }
  ],
  social: [
    {
      name: "Labor Practices",
      description: "Evaluates working conditions, fair pay, safety standards, and worker rights throughout the supply chain.",
      methodology: "We analyze third-party labor certifications, company policies, factory audits, and living wage calculations."
    },
    {
      name: "Community Impact",
      description: "Assesses how production affects local communities, including job creation and community investment.",
      methodology: "We examine company disclosures, community feedback, and NGO assessments about relationships with local communities."
    }
  ],
  governance: [
    {
      name: "Transparency",
      description: "Assesses how openly a company shares information about its supply chain and social practices.",
      methodology: "We analyze the comprehensiveness of sustainability reports and responsiveness to stakeholder inquiries."
    },
    {
      name: "Ethical Business Practices",
      description: "Evaluates company conduct regarding anti-corruption, marketing claims, and tax responsibility.",
      methodology: "We incorporate data on legal compliance and ethical controversies, and alignment between public statements and actions."
    }
  ]
};

export default function TranslatedMethodologySection({ 
  categoryKey, 
  icon,
  delay = 0
}: TranslatedMethodologySectionProps) {
  const { t } = useTranslation();
  
  // Directly translate the title and description
  const title = t(`methodology.categories.${categoryKey}.title`, 
    `${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Impact`); // Fallback title
  const description = t(`methodology.categories.${categoryKey}.description`, 
    "Impact assessment for this category includes various metrics and evaluation criteria.");  // Fallback description
  
  // Get metrics data with proper error handling
  let metrics = [];
  try {
    const metricsData = t(`methodology.categories.${categoryKey}.metrics`, { returnObjects: true });
    metrics = Array.isArray(metricsData) && metricsData.length > 0 
      ? metricsData 
      : fallbackMetrics[categoryKey];
  } catch (error) {
    console.error(`Error loading metrics for ${categoryKey}:`, error);
    metrics = fallbackMetrics[categoryKey];
  }
  
  return (
    <MethodologySection
      title={title}
      icon={icon}
      description={description}
      metrics={metrics}
      delay={delay}
    />
  );
} 