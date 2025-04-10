'use client';

import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/utils';
import { useParams } from 'next/navigation';
import { getLocalizedValue } from '@/i18n';

type CriterionType = {
  name: string;
  description?: string;
  localizedContent?: {
    en?: {
      name?: string;
      description?: string;
    };
    fr?: {
      name?: string;
      description?: string;
    };
  };
};

type CertificationDetailProps = {
  certification: {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    category?: string;
    credibility?: number;
    logo?: any;
    website?: string;
    criteria?: CriterionType[];
    localizedContent?: {
      en?: {
        name?: string;
        description?: string;
      };
      fr?: {
        name?: string;
        description?: string;
      };
    };
  };
};

export default function CertificationDetail({ certification }: CertificationDetailProps) {
  // Get the current locale from the URL params
  const params = useParams();
  const locale = params.locale as string || 'en';
  
  // Get localized values - ensure we're getting string values
  const certName = getLocalizedValue<string>(certification, 'name', locale) || certification.name || '';
  const certDescription = getLocalizedValue<string>(certification, 'description', locale) || certification.description || '';
  
  // Function to get color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'environmental':
        return 'earth-green';
      case 'social':
        return 'terracotta';
      case 'quality':
        return 'deep-teal';
      case 'health-safety':
        return 'sage';
      default:
        return 'slate';
    }
  };
  
  // Calculate color class
  const categoryColor = certification.category ? getCategoryColor(certification.category) : 'slate';
  
  // Calculate the credibility rating safely
  const credibilityRating = certification.credibility || 0;
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-light-gray">
        {certification.logo && (
          <div className="w-24 h-24 bg-light-gray/30 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={urlForImage(certification.logo)?.url() || ''}
              alt={certification.logo.alt || certName}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-2">{certName}</h1>
          
          <div className="flex flex-wrap items-center gap-4">
            {certification.category && (
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${categoryColor}/10 text-${categoryColor} text-sm font-medium`}>
                {certification.category.charAt(0).toUpperCase() + certification.category.slice(1)}
              </div>
            )}
            
            {certification.credibility && (
              <div className="inline-flex items-center gap-2">
                <span className="text-charcoal text-sm font-medium">Credibility:</span>
                <div className={`flex items-center gap-0.5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-8 rounded-sm ${i < Math.round(credibilityRating / 2) ? `bg-${categoryColor}` : 'bg-light-gray'}`}
                      style={{ height: `${16 + (i * 3)}px` }}
                    />
                  ))}
                </div>
                <span className={`text-${categoryColor} font-bold text-lg`}>{credibilityRating}/10</span>
              </div>
            )}
            
            {certification.website && (
              <a 
                href={certification.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-earth-green hover:text-earth-green-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                <span className="text-sm font-medium">Official Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Description */}
      {certDescription && (
        <div className="bg-light-gray/20 p-6 rounded-lg">
          <h2 className="font-heading text-xl font-bold text-charcoal mb-3">About this Certification</h2>
          <p className="text-slate">{certDescription}</p>
        </div>
      )}
      
      {/* Criteria */}
      {certification.criteria && certification.criteria.length > 0 && (
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">Certification Criteria</h2>
          
          <div className="space-y-4">
            {certification.criteria.map((criterion, index) => {
              // Get localized criterion values
              const criterionName = getLocalizedValue<string>(criterion, 'name', locale) || criterion.name || '';
              const criterionDescription = getLocalizedValue<string>(criterion, 'description', locale) || criterion.description || '';
              
              return (
                <div key={index} className="bg-white p-5 rounded-lg border border-light-gray shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{criterionName}</h3>
                  {criterionDescription && <p className="text-slate text-sm">{criterionDescription}</p>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 