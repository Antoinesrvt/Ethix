import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from "@/sanity/lib/live";
import { metricQuery, metricPagesSlugs } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';

type Params = {
  params: {
    metric: string;
  };
};

// Generate static params for the page
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: metricPagesSlugs,
    perspective: "published",
    stega: false,
  });
  return data;
}

// Generate metadata for the page
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { data: metric } = await sanityFetch({
    query: metricQuery,
    params: { slug: params.metric },
    stega: false,
  });
  
  if (!metric) {
    return {
      title: 'Metric Not Found | Ethix',
      description: 'The requested impact metric could not be found.',
    };
  }
  
  return {
    title: `${metric.name} | Impact Metrics | Ethix`,
    description: metric.description,
  };
}

export default async function MetricDetailPage({ params }: Params) {
  const { data: metric } = await sanityFetch({
    query: metricQuery,
    params: { slug: params.metric },
  });
  
  if (!metric) {
    return notFound();
  }

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
        return `bg-${color || 'earth-green'}`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6">
        <Link href="/" className="hover:text-earth-green">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/methodology" className="hover:text-earth-green">Methodology</Link>
        <span className="mx-2">/</span>
        <Link href="/metrics" className="hover:text-earth-green">Metrics</Link>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">{metric.name}</span>
      </div>

      {/* Hero section */}
      <div className="bg-white rounded-xl border border-light-gray p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 rounded-full bg-earth-green/10 flex items-center justify-center text-4xl flex-shrink-0">
            {metric.icon || metric.category?.icon || '📊'}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              {metric.category && (
                <Link 
                  href={`/metrics/categories/${metric.category.slug}`}
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-${metric.category.color || 'earth-green'}/10 text-${metric.category.color || 'earth-green'}`}
                >
                  {metric.category.name}
                </Link>
              )}
              {metric.unit && (
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-light-gray text-slate">
                  Unit: {metric.unit}
                </div>
              )}
              {/* Additional tags could be added here */}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {metric.name}
            </h1>
            <p className="text-slate text-lg max-w-3xl">
              {metric.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* What is this metric */}
          <div className="bg-white rounded-xl border border-light-gray p-8 mb-8">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              What is {metric.name}?
            </h2>
            {metric.what ? (
              <div className="prose max-w-none text-slate">
                <PortableText value={metric.what} />
              </div>
            ) : (
              <p className="text-slate">
                {metric.description}
              </p>
            )}
          </div>

          {/* Why it matters */}
          {metric.why && (
            <div className="bg-white rounded-xl border border-light-gray p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                Why It Matters
              </h2>
              <div className="prose max-w-none text-slate">
                <PortableText value={metric.why} />
              </div>
            </div>
          )}

          {/* How we measure */}
          {metric.howWeMeasure && (
            <div className="bg-white rounded-xl border border-light-gray p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                How We Measure It
              </h2>
              <div className="prose max-w-none text-slate">
                <PortableText value={metric.howWeMeasure} />
              </div>
            </div>
          )}

          {/* Industry stats */}
          {metric.industryStats && (
            <div className="bg-snow rounded-xl border border-light-gray p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
                Industry Statistics
              </h2>
              <div className="prose max-w-none text-slate">
                <PortableText value={metric.industryStats} />
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          {/* Benchmarks */}
          {metric.benchmarks && metric.benchmarks.length > 0 && (
            <div className="bg-white rounded-xl border border-light-gray p-6 mb-8">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Benchmarks
              </h3>
              <div className="space-y-5">
                {metric.benchmarks.map((benchmark: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate">{benchmark.label}</span>
                      {benchmark.value && (
                        <span className="text-sm font-medium text-charcoal">{benchmark.value}</span>
                      )}
                    </div>
                    <div className="w-full bg-light-gray rounded-full h-2.5">
                      <div 
                        className={`${getColorClass(benchmark.color)} h-2.5 rounded-full`} 
                        style={{ width: `${benchmark.percentile}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consumer tips */}
          {metric.consumerTips && (
            <div className="bg-earth-green/5 rounded-xl border border-light-gray p-6 mb-8">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Consumer Tips
              </h3>
              <div className="prose max-w-none text-slate">
                <PortableText value={metric.consumerTips} />
              </div>
            </div>
          )}

          {/* Related metrics */}
          {metric.relatedMetrics && metric.relatedMetrics.length > 0 && (
            <div className="bg-white rounded-xl border border-light-gray p-6">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Related Metrics
              </h3>
              <div className="space-y-3">
                {metric.relatedMetrics.map((related: any) => (
                  <Link 
                    key={related._id || related.slug}
                    href={`/metrics/${related.slug}`}
                    className="flex items-center p-3 rounded-lg hover:bg-light-gray transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate/10 flex items-center justify-center text-lg mr-3">
                      {related.icon || '📊'}
                    </div>
                    <span className="text-charcoal font-medium">{related.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related content section */}
      {metric.relatedContent && metric.relatedContent.length > 0 && (
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metric.relatedContent.map((post: any) => (
              <Link 
                key={post._id} 
                href={`/posts/${post.slug}`} 
                className="bg-white rounded-xl border border-light-gray overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {post.featuredImage && (
                  <div className="h-40 bg-light-gray relative">
                    <img 
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-slate text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-earth-green/5 p-8 rounded-xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Explore Products Based on {metric.name}
        </h2>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          Find products that perform well on this metric and align with your values.
        </p>
        <Link href={`/products?metric=${metric.slug}`} className="btn btn-primary">
          Find Products
        </Link>
      </div>
    </div>
  );
} 