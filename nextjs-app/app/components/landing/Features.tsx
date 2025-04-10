import { ReactNode } from 'react';
import { t } from '@/i18n/server';

// Define a type for our feature keys
type FeatureKey = 'data' | 'comparisons' | 'alternatives' | 'insights' | 'recommendations' | 'resources';

// Feature icons for reuse
const icons: Record<FeatureKey, ReactNode> = {
  data: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  comparisons: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  alternatives: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  insights: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  recommendations: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  resources: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
};

// Feature item keys to map to translations
const featureKeys: FeatureKey[] = [
  'data',
  'comparisons',
  'alternatives', 
  'insights',
  'recommendations',
  'resources'
];

export default function Features() {
  // Get title translation and split it to insert the styled element
  const title = t('features.title');
  const subtitle = t('features.subtitle');
  const comingSoon = t('features.coming_soon');
  
  // Replace <em> tags with styled spans for server rendering
  const titleHtml = title.replace(/<em>(.*?)<\/em>/g, 
    '<span class="text-earth-green">$1</span>');
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-snow to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <p className="text-slate text-lg">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map((key, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border border-light-gray shadow-sm hover:shadow-floating transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-earth-green">{icons[key]}</div>
              <h3 className="font-heading text-xl font-bold mb-3 text-charcoal">
                {t(`features.items.${key}.title`)}
              </h3>
              <p className="text-slate">
                {t(`features.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-pill bg-warm-sand/50 text-clay">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{comingSoon}</span>
          </div>
        </div>
      </div>
    </section>
  );
} 