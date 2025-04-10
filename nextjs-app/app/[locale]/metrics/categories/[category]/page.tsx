import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from "@/sanity/lib/live";
import { metricCategoriesQuery, allMetricsSummaryQuery } from "@/sanity/lib/queries";
import MetricCard from '@/app/components/metrics/MetricCard';

type Params = {
  params: {
    category: string;
  };
};

// Generate static params for the page
export async function generateStaticParams() {
  const { data: categories } = await sanityFetch({
    query: metricCategoriesQuery,
    perspective: "published",
    stega: false,
  });
  
  return categories.map((category: { slug: string }) => ({
    category: category.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // We must await the entire params object before accessing its properties
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;
  
  const { data: categories } = await sanityFetch({
    query: metricCategoriesQuery,
    stega: false,
  });
  
  const category = categories.find((c: { slug: string }) => c.slug === categorySlug);
  
  if (!category) {
    return {
      title: 'Category Not Found | Impact Metrics | Ethix',
      description: 'The requested metric category could not be found.',
    };
  }
  
  return {
    title: `${category.name} Metrics | Ethix`,
    description: category.description || `Browse all metrics in the ${category.name} category.`,
  };
}

export default async function CategoryPage({ params }: Params) {
  // We must await the entire params object before accessing its properties
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;
  
  // Fetch the category and its metrics
  const [{ data: categories }, { data: allMetrics }] = await Promise.all([
    sanityFetch({ query: metricCategoriesQuery }),
    sanityFetch({ query: allMetricsSummaryQuery }),
  ]);
  
  const category = categories.find((c: { slug: string }) => c.slug === categorySlug);
  
  if (!category) {
    return notFound();
  }

  // Filter metrics by category
  const metrics = allMetrics.filter((metric: any) => 
    metric.category?.slug === categorySlug
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6">
        <Link href="/" className="hover:text-earth-green">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/metrics" className="hover:text-earth-green">Metrics</Link>
        <span className="mx-2">/</span>
        <Link href="/metrics#categories" className="hover:text-earth-green">Categories</Link>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">{category.name}</span>
      </div>

      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 rounded-full bg-${category.color || 'earth-green'}/10 flex items-center justify-center text-3xl`}>
            {category.icon || '🏷️'}
          </div>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
          {category.name} Metrics
        </h1>
        {category.description && (
          <p className="text-slate text-lg max-w-3xl mx-auto">
            {category.description}
          </p>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric: any) => (
            <MetricCard key={metric._id} metric={metric} />
          ))}
        </div>
        
        {metrics.length === 0 && (
          <div className="text-center py-12 bg-light-gray/30 rounded-xl">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">No metrics found</h3>
            <p className="text-slate">There are currently no metrics in this category.</p>
          </div>
        )}
      </div>

      {/* Other Categories */}
      <div className="bg-light-gray/30 p-8 rounded-xl mb-16">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 text-center">
          Explore Other Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .filter((c: { slug: string }) => c.slug !== categorySlug)
            .map((otherCategory: any) => (
              <Link 
                key={otherCategory._id}
                href={`/metrics/categories/${otherCategory.slug}`}
                className="bg-white rounded-lg p-4 flex items-center hover:shadow-md transition-shadow"
              >
                <div className={`w-8 h-8 rounded-full bg-${otherCategory.color || 'deep-teal'}/10 flex items-center justify-center text-lg mr-3`}>
                  {otherCategory.icon || '🏷️'}
                </div>
                <span className="font-medium text-charcoal">{otherCategory.name}</span>
              </Link>
            ))}
        </div>
      </div>

      {/* Back to All Metrics */}
      <div className="text-center">
        <Link href="/metrics" className="btn btn-secondary">
          View All Metrics
        </Link>
      </div>
    </div>
  );
} 