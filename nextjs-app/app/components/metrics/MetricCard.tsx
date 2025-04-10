import Link from 'next/link';

type Benchmark = {
  label: string;
  percentile: number;
  color: string;
  value?: string;
};

type Category = {
  name: string;
  icon?: string;
  color?: string;
};

type MetricProps = {
  id: string;
  name: string;
  description?: string;
  slug: string;
  category?: Category;
  unit?: string;
  icon?: string;
  benchmarks?: Benchmark[];
};

export default function MetricCard({ metric }: { metric: MetricProps }) {
  // Function to get color class based on color string from CMS
  const getColorClass = (color: string) => {
    switch (color) {
      case 'positive':
        return 'bg-positive';
      case 'negative':
        return 'bg-negative';
      case 'neutral':
        return 'bg-neutral';
      default:
        return `bg-${color}`;
    }
  };

  // Get highest benchmark for display
  const primaryBenchmark = metric.benchmarks?.[0];

  return (
    <div className="bg-white rounded-xl shadow-md border border-light-gray overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg ${metric.category?.color ? `bg-${metric.category.color}/10` : 'bg-slate/10'} flex items-center justify-center text-${metric.category?.color || 'slate'}`}>
            {metric.icon ? (
              <span className="text-xl">{metric.icon}</span>
            ) : metric.category?.icon ? (
              <span className="text-xl">{metric.category.icon}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-charcoal">{metric.name}</h3>
            {metric.category && (
              <div className="text-xs text-slate">
                {metric.category.name}
              </div>
            )}
          </div>
        </div>

        {metric.description && (
          <p className="text-sm text-slate mb-5 line-clamp-2">{metric.description}</p>
        )}

        {metric.benchmarks && metric.benchmarks.length > 0 && (
          <div className="space-y-4">
            {metric.benchmarks.map((benchmark, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-slate">{benchmark.label}</span>
                  {benchmark.value && (
                    <span className="text-xs font-medium text-charcoal">{benchmark.value}</span>
                  )}
                </div>
                <div className="w-full bg-light-gray rounded-full h-2">
                  <div 
                    className={`${getColorClass(benchmark.color)} h-2 rounded-full relative`} 
                    style={{ width: `${benchmark.percentile}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="border-t border-light-gray p-3">
        <Link 
          href={`/metrics/${metric.slug}`} 
          className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center justify-center"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 