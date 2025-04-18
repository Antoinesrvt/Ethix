import Link from 'next/link';
import { Metadata } from 'next';
import { sanityFetch } from "@/sanity/lib/live";
import { metricsPageQuery, metricCategoriesQuery } from "@/sanity/lib/queries";
import MetricSection from '../../components/metrics/MetricSection';

export const metadata: Metadata = {
  title: 'Impact Metrics | Ethix',
  description: 'Explore the metrics we use to evaluate product sustainability - from carbon footprint to labor practices and resource use.',
};

export default async function MetricsPage() {
  // Fetch metrics data from Sanity
  const [{ data: metricsPage }, { data: categories }] = await Promise.all([
    sanityFetch({ query: metricsPageQuery }),
    sanityFetch({ query: metricCategoriesQuery }),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6">
        <Link href="/" className="hover:text-earth-green">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/methodology" className="hover:text-earth-green">Methodology</Link>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">Impact Metrics</span>
      </div>

      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
          {metricsPage?.title || 'Our Impact Metrics'}
        </h1>
        <p className="text-slate text-lg max-w-3xl mx-auto">
          {metricsPage?.description || 'We evaluate products across multiple sustainability dimensions to give you a comprehensive view of their environmental and social impact.'}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-xl border border-light-gray p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            {metricsPage?.hero ? (
              <img 
                src={metricsPage.hero} 
                alt="Metrics Illustration" 
                className="w-full h-auto rounded-lg"
                width={400}
                height={300}
              />
            ) : (
              <div className="w-full h-64 bg-light-gray rounded-lg flex items-center justify-center">
                <span className="text-slate">Metrics Illustration</span>
              </div>
            )}
          </div>
          <div className="md:w-2/3">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
              How We Evaluate Sustainability
            </h2>
            {metricsPage?.introduction ? (
              <div className="text-slate prose max-w-none">
                {metricsPage.introduction}
              </div>
            ) : (
              <>
                <p className="text-slate mb-4">
                  At Ethix, we believe that true sustainability encompasses both environmental and social responsibility. Our comprehensive metrics system evaluates products across multiple dimensions to provide you with a complete picture of a product's impact.
                </p>
                <p className="text-slate mb-4">
                  Each metric is carefully researched using a combination of life cycle assessments, third-party certifications, manufacturer disclosures, and independent research. Products receive a rating from A (Excellent) to F (Poor) for each applicable metric.
                </p>
                <p className="text-slate">
                  Click on any metric below to learn more about how we evaluate it and why it matters.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Featured Metrics */}
      {metricsPage?.featuredMetrics && metricsPage.featuredMetrics.length > 0 && (
        <div className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-earth-green/10 flex items-center justify-center text-lg mr-3">
              ⭐
            </span>
            Featured Metrics
          </h2>
          <p className="text-slate mb-8">
            These are the key metrics we focus on when evaluating product sustainability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsPage.featuredMetrics.map((metric: any) => (
              <Link 
                key={metric._id} 
                href={`/metrics/${metric.slug}`}
                className="bg-white rounded-xl border border-light-gray p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-${metric.category?.color || 'earth-green'}/10 flex items-center justify-center text-2xl mr-4`}>
                    {metric.icon || metric.category?.icon || '📊'}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {metric.name}
                  </h3>
                </div>
                <p className="text-slate flex-grow">
                  {metric.description}
                </p>
                <div className="mt-4 pt-4 border-t border-light-gray flex justify-between items-center">
                  <span className={`text-${metric.category?.color || 'earth-green'} font-medium`}>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-${metric.category?.color || 'earth-green'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Metric Sections from CMS */}
      {metricsPage?.sections && metricsPage.sections.map((section: any, index: number) => (
        <MetricSection 
          key={index}
          title={section.title}
          description={section.description}
          metrics={section.metrics}
          layout={section.layout || 'grid'}
          backgroundColor={section.backgroundColor || 'white'}
        />
      ))}

      {/* Metrics Categories */}
      {categories && categories.length > 0 && (
        <div className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-deep-teal/10 flex items-center justify-center text-lg mr-3">
              🏷️
            </span>
            Metrics Categories
          </h2>
          <p className="text-slate mb-8">
            Browse metrics by category to focus on the aspects of sustainability that matter most to you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category: any) => (
              <Link 
                key={category._id} 
                href={`/metrics/categories/${category.slug}`}
                className="bg-white rounded-xl border border-light-gray p-6 hover:shadow-lg transition-shadow duration-300 flex items-center h-full"
              >
                <div className={`w-12 h-12 rounded-full bg-${category.color || 'deep-teal'}/10 flex items-center justify-center text-2xl mr-4`}>
                  {category.icon || '🏷️'}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {category.name}
                  </h3>
                  <p className="text-slate text-sm">
                    {category.metricsCount} metrics
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* How we calculate overall scores */}
      <div className="bg-light-gray/30 p-8 rounded-xl mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">
          How We Calculate Overall Product Scores
        </h2>
        <p className="text-slate mb-8 max-w-3xl mx-auto text-center">
          Product overall ratings are calculated using a weighted average of applicable metrics, with consideration for the product category and its most relevant impact areas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mb-4 mx-auto">
              ⚖️
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
              Category-Specific Weighting
            </h3>
            <p className="text-slate text-center">
              Different product categories have different sustainability priorities. For example, water usage is weighted more heavily for textiles than for electronics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mb-4 mx-auto">
              📊
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
              Benchmark Comparison
            </h3>
            <p className="text-slate text-center">
              Products are scored relative to industry benchmarks, allowing for meaningful comparisons within categories while recognizing industry-specific challenges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mb-4 mx-auto">
              🔄
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
              Continuous Updates
            </h3>
            <p className="text-slate text-center">
              Our methodology evolves as new research, technologies, and standards emerge. Ratings are regularly reviewed to ensure they reflect current best practices.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/methodology" className="btn btn-primary">
            Learn More About Our Methodology
          </Link>
        </div>
      </div>

      {/* CTA - Find Products */}
      <div className="bg-earth-green/5 p-8 rounded-xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Start Exploring Sustainable Products
        </h2>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          Ready to find products with excellent ratings across these impact metrics? Browse our catalog of sustainable products.
        </p>
        <Link href="/products" className="btn btn-primary">
          Explore Products
        </Link>
      </div>

    </div>
  );
} 