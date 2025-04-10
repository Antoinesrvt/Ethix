import { t } from '@/i18n/server';
import LocalizedLink from '@/components/LocalizedLink';

// Define stat key type for type safety
type StatKey = 'products' | 'metrics' | 'brands' | 'community';

export default function CallToAction() {
  // Get translations
  const title = t('call_to_action.title');
  const subtitle = t('call_to_action.subtitle');
  const getStarted = t('call_to_action.get_started');
  const learnMore = t('call_to_action.learn_more');
  
  // Stats to display
  const stats: Array<{ key: StatKey }> = [
    { key: 'products' },
    { key: 'metrics' },
    { key: 'brands' },
    { key: 'community' }
  ];
  
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-green via-deep-teal to-earth-green-dark z-0 opacity-90"></div>
      <div className="absolute inset-0 bg-pattern-dots z-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedLink href="/products" className="btn bg-white text-earth-green hover:bg-light-gray">
              {getStarted}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </LocalizedLink>
            <LocalizedLink href="/methodology" className="btn border border-white/30 text-white hover:bg-white/10">
              {learnMore}
            </LocalizedLink>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t(`call_to_action.stats.${stat.key}.number`)}
                </div>
                <div className="text-white/80 text-sm">
                  {t(`call_to_action.stats.${stat.key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 