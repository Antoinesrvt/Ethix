'use client';

import { useTranslation } from 'react-i18next';
import RatingCard from './RatingCard';

type RatingKey = 'excellent' | 'very_good' | 'good' | 'below_average' | 'poor' | 'not_applicable';

type TranslatedRatingCardProps = {
  ratingKey: RatingKey;
  grade: string;
  color: string;
  delay?: number;
};

// Default values for each rating
const defaultRatings = {
  excellent: {
    label: "Excellent",
    description: "Industry-leading performance that goes above and beyond standards. Represents innovation and exceptional commitment to sustainability."
  },
  very_good: {
    label: "Very Good",
    description: "Significantly better than average performance, exceeding standard requirements and demonstrating strong sustainability practices."
  },
  good: {
    label: "Good",
    description: "Average to above-average performance that meets sustainability standards and demonstrates improvement efforts."
  },
  below_average: {
    label: "Below Average",
    description: "Below average performance with significant areas for improvement. May comply with minimum requirements but lacks comprehensive sustainability efforts."
  },
  poor: {
    label: "Poor",
    description: "Poor performance that fails to meet minimum sustainability standards, or cases where companies have demonstrated negligence or greenwashing."
  },
  not_applicable: {
    label: "Not Applicable",
    description: "Used when a specific metric does not apply to a particular product category, or when insufficient data is available for evaluation."
  }
};

export default function TranslatedRatingCard({ 
  ratingKey, 
  grade,
  color = 'emerald',
  delay = 0 
}: TranslatedRatingCardProps) {
  const { t } = useTranslation();
  
  // Safely translate with fallbacks
  let label, description;
  
  try {
    label = t(`methodology.ratings.${ratingKey}.label`, defaultRatings[ratingKey].label);
  } catch (error) {
    console.warn(`Translation missing for ${ratingKey} label`);
    label = defaultRatings[ratingKey].label;
  }
  
  try {
    description = t(`methodology.ratings.${ratingKey}.description`, defaultRatings[ratingKey].description);
  } catch (error) {
    console.warn(`Translation missing for ${ratingKey} description`);
    description = defaultRatings[ratingKey].description;
  }
  
  return (
    <RatingCard
      grade={grade}
      label={label}
      description={description}
      color={color}
      delay={delay}
    />
  );
} 