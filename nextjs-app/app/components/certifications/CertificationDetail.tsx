'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/utils';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = params.locale as string || 'en';
  
  // Get localized values - ensure we're getting string values
  const certName = getLocalizedValue<string>(certification, 'name', locale) || certification.name || '';
  const certDescription = getLocalizedValue<string>(certification, 'description', locale) || certification.description || '';
  
  // State for expanded criteria
  const [expandedCriteria, setExpandedCriteria] = useState<string[]>([]);
  
  // Function to toggle expansion of a criterion
  const toggleCriterion = (criterionId: string) => {
    if (expandedCriteria.includes(criterionId)) {
      setExpandedCriteria(expandedCriteria.filter(id => id !== criterionId));
    } else {
      setExpandedCriteria([...expandedCriteria, criterionId]);
    }
  };
  
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
  
  // Determine if we should automatically expand all criteria (for UX research or specific view)
  const showAllCriteria = searchParams.get('showAll') === 'true';
  
  // Framer motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };
  
  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };
  
  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-light-gray"
        variants={itemVariants}
      >
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
                <span className="text-charcoal text-sm font-medium">{t('certifications.credibility')}:</span>
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
                <span className="text-sm font-medium">{t('certifications.official_website')}</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Description */}
      {certDescription && (
        <motion.div 
          className="bg-light-gray/20 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h2 className="font-heading text-xl font-bold text-charcoal mb-3">{t('certifications.about')}</h2>
          <p className="text-slate">{certDescription}</p>
        </motion.div>
      )}
      
      {/* Criteria */}
      {certification.criteria && certification.criteria.length > 0 && (
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-2xl font-bold text-charcoal">{t('certifications.criteria_title')}</h2>
            <button 
              onClick={() => setExpandedCriteria(
                expandedCriteria.length === certification.criteria?.length 
                  ? [] 
                  : certification.criteria?.map((_, i) => i.toString()) || []
              )}
              className="text-sm font-medium text-earth-green hover:text-earth-green-dark flex items-center gap-1"
            >
              {expandedCriteria.length === certification.criteria?.length 
                ? t('certifications.collapse_all')
                : t('certifications.expand_all')}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                {expandedCriteria.length === certification.criteria?.length ? (
                  <path 
                    fillRule="evenodd" 
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                    clipRule="evenodd" 
                  />
                ) : (
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                )}
              </svg>
            </button>
          </div>
          
          <motion.div className="space-y-4">
            {certification.criteria.map((criterion, index) => {
              // Get localized criterion values
              const criterionName = getLocalizedValue<string>(criterion, 'name', locale) || criterion.name || '';
              const criterionDescription = getLocalizedValue<string>(criterion, 'description', locale) || criterion.description || '';
              const criterionId = index.toString();
              const isExpanded = expandedCriteria.includes(criterionId) || showAllCriteria;
              
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg border border-light-gray shadow-sm overflow-hidden"
                  layoutId={`criterion-${index}`}
                  variants={itemVariants}
                  initial={false}
                >
                  <div 
                    className={`p-5 cursor-pointer transition-colors ${isExpanded ? 'bg-light-gray/10' : 'hover:bg-light-gray/5'}`} 
                    onClick={() => toggleCriterion(criterionId)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold text-charcoal">{criterionName}</h3>
                      <div className={`rounded-full p-0.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-slate" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && criterionDescription && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={expandVariants}
                        className="border-t border-light-gray/50"
                      >
                        <div className="p-5 bg-light-gray/5">
                          <p className="text-slate text-sm">{criterionDescription}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
      
      {/* Recommended Products Section (if we want to add this) */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 pt-8 border-t border-light-gray"
      >
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">{t('certifications.products_with_certification')}</h2>
        <p className="text-slate mb-6">{t('certifications.products_description')}</p>
        
        {/* This would be where we'd render recommended products */}
        <div className="bg-light-gray/20 rounded-lg p-8 text-center">
          <p className="text-slate italic">{t('certifications.coming_soon')}</p>
        </div>
      </motion.div>
    </motion.div>
  );
} 