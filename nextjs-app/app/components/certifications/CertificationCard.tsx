'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/utils';
import { useParams } from 'next/navigation';
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
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-light-gray overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          {certification.logo && (
            <div className="w-16 h-16 bg-light-gray/30 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={urlForImage(certification.logo)?.url() || ''}
                alt={certification.logo.alt || certName}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          )}
          
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal">{certName}</h3>
            {certification.category && (
              <div className={`text-sm text-${categoryColor} font-medium`}>
                {certification.category.charAt(0).toUpperCase() + certification.category.slice(1)}
              </div>
            )}
          </div>
          
          {certification.credibility && (
            <div className="ml-auto">
              <div className={`w-10 h-10 rounded-full bg-${categoryColor}/10 flex items-center justify-center`}>
                <span className={`text-${categoryColor} font-bold`}>{certification.credibility}</span>
              </div>
              <div className="text-xs text-slate text-center mt-1">Rating</div>
            </div>
          )}
        </div>
        
        {certDescription && (
          <p className="text-sm text-slate mb-4 line-clamp-3">{certDescription}</p>
        )}
      </div>
      
      <div className="border-t border-light-gray p-3 flex justify-between items-center">
        <Link 
          href={`/${locale}/certifications/${certification.slug}`} 
          className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        
        {certification.website && (
          <a 
            href={certification.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate text-sm hover:text-earth-green transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
} 