'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/utils';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '@/i18n';

type CertificationProps = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  category?: string;
  credibility?: number;
  logo?: any;
  website?: string;
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

export default function CertificationCard({ certification }: { certification: CertificationProps }) {
  const { t } = useTranslation();
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
  
  // Animation variants
  const cardVariants = {
    initial: { 
      y: 20, 
      opacity: 0 
    },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      y: -8,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17
      }
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl border border-light-gray overflow-hidden"
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          {certification.logo ? (
            <div className="w-16 h-16 bg-light-gray/30 rounded-lg flex items-center justify-center overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Image
                  src={urlForImage(certification.logo)?.url() || ''}
                  alt={certification.logo.alt || certName}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </motion.div>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-lg bg-light-gray/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-charcoal">{certName}</h3>
            {certification.category && (
              <div className={`text-sm text-${categoryColor} font-medium`}>
                {certification.category.charAt(0).toUpperCase() + certification.category.slice(1)}
              </div>
            )}
          </div>
          
          {certification.credibility && (
            <div className="ml-auto">
              <div className={`w-10 h-10 rounded-full bg-${categoryColor}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className={`text-${categoryColor} font-bold`}>{certification.credibility}</span>
              </div>
              <div className="text-xs text-slate text-center mt-1">{t('certifications.credibility')}</div>
            </div>
          )}
        </div>
        
        {certDescription && (
          <p className="text-sm text-slate mb-4 line-clamp-3">{certDescription}</p>
        )}
        
        {/* Verified badge */}
        <div className="flex items-center mb-2">
          <span className="inline-flex items-center text-xs font-medium text-positive bg-positive/10 px-2 py-0.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('certifications.verified')}
          </span>
        </div>
      </div>
      
      <div className="border-t border-light-gray p-3 flex justify-between items-center">
        <Link 
          href={`/${locale}/certifications/${certification.slug}`} 
          className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center group"
        >
          {t('certifications.more_info')}
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </Link>
        
        {certification.website && (
          <motion.a 
            href={certification.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate text-sm hover:text-earth-green transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
} 