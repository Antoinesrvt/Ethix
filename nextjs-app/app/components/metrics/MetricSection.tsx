import MetricCard from './MetricCard';

type Metric = {
  id: string;
  name: string;
  description?: string;
  slug: string;
  category?: {
    name: string;
    icon?: string;
    color?: string;
  };
  unit?: string;
  icon?: string;
  benchmarks?: Array<{
    label: string;
    percentile: number;
    color: string;
    value?: string;
  }>;
};

type MetricSectionProps = {
  title: string;
  description?: string;
  metrics: Metric[];
  layout?: 'grid' | 'list' | 'cards';
  backgroundColor?: string;
};

export default function MetricSection({
  title,
  description,
  metrics,
  layout = 'grid',
  backgroundColor = 'white'
}: MetricSectionProps) {
  // Background color class mapping
  const getBgColorClass = (color: string) => {
    switch (color) {
      case 'light-gray':
        return 'bg-light-gray';
      case 'snow':
        return 'bg-snow';
      case 'warm-sand-light':
        return 'bg-warm-sand/30';
      default:
        return 'bg-white';
    }
  };

  // Layout class mapping
  const getLayoutClasses = (layout: string) => {
    switch (layout) {
      case 'list':
        return 'grid grid-cols-1 gap-6';
      case 'cards':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      case 'grid':
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <section className={`py-12 ${getBgColorClass(backgroundColor)}`}>
      <div className="container">
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-charcoal">{title}</h2>
          {description && (
            <p className="text-slate max-w-3xl">{description}</p>
          )}
        </div>

        <div className={getLayoutClasses(layout)}>
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
} 