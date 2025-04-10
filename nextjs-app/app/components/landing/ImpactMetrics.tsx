import { t } from '@/i18n/server';
import Link from 'next/link';
import LocalizedLink from '@/components/LocalizedLink';
import { sanityFetch } from "@/sanity/lib/live";
import { featuredMetricsQuery } from "@/sanity/lib/queries";

// Define types for metrics
type Benchmark = {
  label: string;
  percentile: number;
  color: string;
  value?: string;
};

type Category = {
  name: string;
  slug?: string;
  icon?: string;
  color?: string;
};

type Metric = {
  _id?: string;
  id?: string;
  name: string;
  description?: string;
  slug?: string;
  icon?: string;
  category?: Category;
  benchmarks?: Benchmark[];
};

// Define fallback metrics with the correct types
const fallbackMetrics: Metric[] = [
  {
    id: 'carbon_footprint',
    name: 'Carbon Footprint',
    description: 'The total greenhouse gas emissions caused by a product throughout its lifecycle.',
    slug: 'carbon-footprint',
    icon: '🌍',
    category: { 
      name: 'Environmental',
      color: 'earth-green' 
    },
    benchmarks: [
      { label: 'low_impact', percentile: 75, color: 'positive' },
      { label: 'average', percentile: 50, color: 'neutral' },
      { label: 'high_impact', percentile: 25, color: 'negative' },
    ]
  },
  {
    id: 'water_usage',
    name: 'Water Usage',
    description: 'The amount of water required to produce the product, from manufacturing to packaging.',
    slug: 'water-usage',
    icon: '💧',
    category: { 
      name: 'Environmental',
      color: 'deep-teal' 
    },
    benchmarks: [
      { label: 'low_impact', percentile: 80, color: 'positive' },
      { label: 'average', percentile: 45, color: 'neutral' },
      { label: 'high_impact', percentile: 20, color: 'negative' },
    ]
  },
  {
    id: 'labor_conditions',
    name: 'Labor Conditions',
    description: 'Assessment of working conditions and fair labor practices in the supply chain.',
    slug: 'labor-conditions',
    icon: '👥',
    category: { 
      name: 'Social',
      color: 'earth-green' 
    },
    benchmarks: [
      { label: 'excellent', percentile: 90, color: 'positive' },
      { label: 'fair', percentile: 60, color: 'neutral' },
      { label: 'poor', percentile: 30, color: 'negative' },
    ]
  },
  {
    id: 'materials',
    name: 'Materials & Resources',
    description: 'Evaluation of material sourcing, renewable resources, and resource efficiency.',
    slug: 'materials',
    icon: '♻️',
    category: { 
      name: 'Environmental',
      color: 'sage' 
    },
    benchmarks: [
      { label: 'sustainable', percentile: 85, color: 'positive' },
      { label: 'mixed', percentile: 50, color: 'neutral' },
      { label: 'unsustainable', percentile: 15, color: 'negative' },
    ]
  }
];

// Define function to get translated benchmark label
function getTranslatedBenchmarkLabel(label: string): string {
  // Return the translation key directly
  return t(`impact_metrics.benchmarks.${label}`);
}

// Server Component
export default function ImpactMetrics() {
  // Get the title and replace <em> tags with styled spans
  const title = t('impact_metrics.title');
  const titleHtml = title.replace(/<em>(.*?)<\/em>/g, 
    '<span class="text-earth-green">$1</span>');
  const subtitle = t('impact_metrics.subtitle');
  const exploreAll = t('impact_metrics.explore_all');
  
  // Use the fallback data
  const displayMetrics: Metric[] = fallbackMetrics;

  // Helper function to determine background and text color classes
  const getColorClasses = (metric: Metric) => {
    const color = metric.category?.color || 'earth-green';
    return {
      bg: `bg-${color}/10`,
      text: `text-${color}`
    };
  };

  return (
    <section className="py-16 md:py-24 bg-snow relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-waves opacity-20 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <p className="text-slate text-lg">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayMetrics.map((metric, index) => {
            const colors = getColorClasses(metric);
            // Get translated metric data
            const metricId = metric.id || '';
            const translatedName = t(`impact_metrics.metrics.${metricId}.name`);
            const translatedDescription = t(`impact_metrics.metrics.${metricId}.description`);
            const learnMore = t('impact_metrics.learn_more');
            
            return (
              <div key={metric._id || metric.id} className="bg-white rounded-2xl shadow-md border border-light-gray overflow-hidden">
                <div className="p-6 border-b border-light-gray">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}>
                      {metric.icon || (metric.category?.icon || '📊')}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-charcoal">{translatedName}</h3>
                      <p className="text-sm text-slate">{translatedDescription}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-6">
                    {(metric.benchmarks || []).map((benchmark, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate">
                            {getTranslatedBenchmarkLabel(benchmark.label)}
                          </span>
                        </div>
                        <div className="w-full bg-light-gray rounded-full h-3">
                          <div 
                            className={`bg-${benchmark.color} h-3 rounded-full relative`} 
                            style={{ width: `${benchmark.percentile}%` }}
                          >
                            <div className="absolute -right-2 -top-1 bg-white rounded-full border border-light-gray shadow-sm w-5 h-5 flex items-center justify-center text-xs font-medium">
                              {benchmark.percentile}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-light-gray/50 py-3 px-6">
                  <LocalizedLink 
                    href={`/metrics/${metric.slug || metric.id}`} 
                    className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center justify-end"
                  >
                    {learnMore}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </LocalizedLink>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <LocalizedLink href="/metrics" className="btn btn-secondary">
            {exploreAll}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
} 