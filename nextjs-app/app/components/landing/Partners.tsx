'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LocalizedLink from '@/components/LocalizedLink';

// Note: These are placeholder arrays. In a production environment, 
// you would likely fetch this data from your Sanity backend
const partners = [
  { 
    name: 'Eco Brands Co', 
    logo: '/brands/placeholder1.svg',
    logoPlaceholder: (
      <div className="bg-earth-green/5 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-earth-green font-heading font-bold text-lg">ECO</span>
      </div>
    ) 
  },
  { 
    name: 'Green Future', 
    logo: '/brands/placeholder2.svg',
    logoPlaceholder: (
      <div className="bg-earth-green/5 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-earth-green font-heading font-bold text-lg">GF</span>
      </div>
    ) 
  },
  { 
    name: 'Sustainable Living', 
    logo: '/brands/placeholder3.svg',
    logoPlaceholder: (
      <div className="bg-mint/10 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-mint font-heading font-bold text-lg">SL</span>
      </div>
    ) 
  },
  { 
    name: 'Ethical Corp', 
    logo: '/brands/placeholder4.svg',
    logoPlaceholder: (
      <div className="bg-sage/10 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-sage font-heading font-bold text-lg">EC</span>
      </div>
    ) 
  },
  { 
    name: 'Planet First', 
    logo: '/brands/placeholder5.svg',
    logoPlaceholder: (
      <div className="bg-deep-teal/10 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-deep-teal font-heading font-bold text-lg">PF</span>
      </div>
    ) 
  },
  { 
    name: 'EcoLeaders', 
    logo: '/brands/placeholder6.svg',
    logoPlaceholder: (
      <div className="bg-earth-green/5 flex items-center justify-center w-full h-full rounded-lg px-4">
        <span className="text-earth-green font-heading font-bold text-lg">EL</span>
      </div>
    ) 
  },
];

const certifications = [
  { 
    name: 'Fair Trade Certified', 
    logo: '/certifications/placeholder1.svg',
    color: '#0D5C63'
  },
  { 
    name: 'Organic Standard', 
    logo: '/certifications/placeholder2.svg',
    color: '#4C956C' 
  },
  { 
    name: 'B Corp', 
    logo: '/certifications/placeholder3.svg',
    color: '#2541B2' 
  },
  { 
    name: 'Carbon Neutral', 
    logo: '/certifications/placeholder4.svg',
    color: '#1D6A73' 
  },
];

export default function Partners() {
  // Use the useTranslation hook for client components
  const { t } = useTranslation();
  
  // Get translations
  const industryBadge = t('partners.industry_badge');
  const title = t('partners.title');
  const subtitle = t('partners.subtitle');
  const certificationTitle = t('partners.certification_title');
  const certificationSubtitle = t('partners.certification_subtitle');
  const seeAll = t('partners.see_all');
  
  return (
    <section className="py-14 bg-light-gray/30 border-y border-light-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-warm-sand text-clay rounded-full mb-3">
            {industryBadge}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-charcoal">
            {title}
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Brand Partners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="aspect-[3/2] bg-white rounded-lg flex items-center justify-center px-4 py-3 border border-light-gray shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
                {/* This would be replaced with actual image in production */}
                {partner.logoPlaceholder}
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-slate group-hover:text-earth-green transition-colors">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certification Partners */}
        <div className="border-t border-light-gray pt-12">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              {certificationTitle}
            </h3>
            <p className="text-slate text-sm max-w-2xl mx-auto">
              {certificationSubtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <LocalizedLink 
                key={index} 
                href={`/certifications/${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="h-12 bg-white rounded-full flex items-center px-5 py-2 border border-light-gray shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-light-gray/20">
                  <div
                    className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.name.charAt(0)}
                  </div>
                  <div className="text-sm text-charcoal font-medium group-hover:text-earth-green transition-colors">
                    {cert.name}
                  </div>
                </div>
              </LocalizedLink>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <LocalizedLink href="/partners" className="text-earth-green hover:text-earth-green-dark flex items-center gap-1 text-sm font-medium transition-colors duration-200">
              {seeAll}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
} 