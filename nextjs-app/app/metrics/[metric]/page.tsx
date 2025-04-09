import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Sample metrics data - in a real app, this would come from a database or API
const metricsData = {
  'carbon-footprint': {
    id: 'carbon-footprint',
    name: 'Carbon Footprint',
    shortDescription: 'The total greenhouse gas emissions caused directly and indirectly by a product throughout its life cycle.',
    icon: '🌍',
    color: 'green',
    what: `A carbon footprint measures the total greenhouse gas emissions caused by a product, expressed as carbon dioxide equivalent (CO₂e). It includes emissions from raw material extraction, manufacturing, transportation, use, and end-of-life disposal.`,
    why: `Carbon emissions are the primary driver of climate change. By measuring and reducing carbon footprints, we can mitigate global warming and its impacts on ecosystems, weather patterns, and human communities.`,
    howWeMeasure: `Our carbon footprint calculations are based on life cycle assessment (LCA) methodologies. We analyze data from:

- Product life cycle assessments
- Manufacturing energy use
- Transportation emissions
- Material extraction and processing emissions
- Packaging and distribution
- Use phase energy consumption
- End-of-life treatment

We validate this data through third-party certifications, manufacturer disclosures, and independent research.`,
    impactScale: [
      { 
        rating: 'A (Excellent)', 
        description: 'Minimal carbon footprint with documented carbon reduction or offset programs in place',
        example: 'Products made from reclaimed materials using renewable energy, with minimal shipping distances',
      },
      { 
        rating: 'B (Good)', 
        description: 'Below industry average carbon footprint with some reduction measures',
        example: 'Products using some recycled materials and energy-efficient manufacturing',
      },
      { 
        rating: 'C (Average)', 
        description: 'Industry standard carbon footprint',
        example: 'Conventional products with some improvements in manufacturing efficiency',
      },
      { 
        rating: 'D (Below Average)', 
        description: 'Above industry average carbon footprint',
        example: 'Products with carbon-intensive materials or manufacturing',
      },
      { 
        rating: 'F (Poor)', 
        description: 'Significantly high carbon footprint with no reduction measures',
        example: 'Products requiring extensive mining of virgin materials, high-energy manufacturing, and global shipping',
      },
    ],
    industryStats: [
      { industry: 'Fashion', average: '10-20kg CO₂e per garment', best: '0.5-5kg CO₂e per garment' },
      { industry: 'Electronics', average: '30-100kg CO₂e per device', best: '10-30kg CO₂e per device' },
      { industry: 'Food', average: '1-5kg CO₂e per kg', best: '0.1-1kg CO₂e per kg' },
      { industry: 'Household Products', average: '1-3kg CO₂e per item', best: '0.2-1kg CO₂e per item' },
    ],
    consumerTips: [
      'Choose products made with renewable energy',
      'Select items with minimal packaging',
      'Buy locally produced goods when possible',
      'Opt for durable products with long lifespans',
      'Consider secondhand or refurbished options',
      'Look for carbon-neutral certifications',
    ],
    relatedMetrics: [
      { name: 'Energy Efficiency', link: '/metrics/energy-efficiency' },
      { name: 'Waste Production', link: '/metrics/waste-production' },
      { name: 'Transportation Impact', link: '/metrics/transportation-impact' },
    ],
  },
  'water-usage': {
    id: 'water-usage',
    name: 'Water Usage',
    shortDescription: 'The total amount of water used throughout a product\'s life cycle, including production, use, and disposal.',
    icon: '💧',
    color: 'blue',
    what: `Water usage measures the total volume of freshwater consumed or affected throughout a product's life cycle. This includes water used in raw material extraction, manufacturing processes, product use, and end-of-life disposal. We also consider water pollution impact as a factor in our assessment.`,
    why: `Water is a precious and increasingly scarce resource in many regions of the world. Excessive water consumption and pollution in production processes can lead to water scarcity, ecosystem damage, and reduced access to clean water for communities. By measuring water usage, we help consumers choose products that minimize impact on this essential resource.`,
    howWeMeasure: `Our water usage assessments consider several factors:

- Direct water consumption in manufacturing
- Virtual water embedded in ingredients or materials
- Water requirements during product use
- Water pollution caused during production
- Geographic location of manufacturing (water stress in the region)
- Water recycling and treatment practices

We integrate data from water footprint assessments, manufacturer disclosures, industry benchmarks, and independent research.`,
    impactScale: [
      { 
        rating: 'A (Excellent)', 
        description: 'Minimal water usage with closed-loop water systems or advanced water recycling',
        example: 'Products manufactured with rainwater harvesting and 95%+ water recycling systems',
      },
      { 
        rating: 'B (Good)', 
        description: 'Below industry average water use with significant water conservation practices',
        example: 'Products with water-efficient manufacturing and partial water recycling',
      },
      { 
        rating: 'C (Average)', 
        description: 'Industry standard water usage',
        example: 'Conventional products with basic water management systems',
      },
      { 
        rating: 'D (Below Average)', 
        description: 'Above industry average water consumption',
        example: 'Products with water-intensive processes and limited conservation measures',
      },
      { 
        rating: 'F (Poor)', 
        description: 'Extremely high water usage with no conservation measures',
        example: 'Products requiring extensive water for production with no recycling or treatment',
      },
    ],
    industryStats: [
      { industry: 'Apparel', average: '10,000-20,000 liters per kg of fabric', best: '500-5,000 liters per kg of fabric' },
      { industry: 'Food & Beverage', average: '5-15 liters per liter of product', best: '1.5-3 liters per liter of product' },
      { industry: 'Personal Care', average: '10-30 liters per item', best: '2-8 liters per item' },
      { industry: 'Home Goods', average: '50-500 liters per item', best: '10-100 liters per item' },
    ],
    consumerTips: [
      'Choose products made with water-efficient manufacturing',
      'Select drought-resistant or organically grown plant materials',
      'Opt for products that require less water during use',
      'Look for water stewardship certifications',
      'Consider the geographic origin of water-intensive products',
      'Avoid products from companies with water pollution violations',
    ],
    relatedMetrics: [
      { name: 'Chemical Usage', link: '/metrics/chemical-usage' },
      { name: 'Ecosystem Impact', link: '/metrics/ecosystem-impact' },
      { name: 'Resource Efficiency', link: '/metrics/resource-efficiency' },
    ],
  },
  'labor-practices': {
    id: 'labor-practices',
    name: 'Labor Practices',
    shortDescription: 'The working conditions, fair pay policies, and worker rights throughout a product\'s supply chain.',
    icon: '👥',
    color: 'yellow',
    what: `Labor practices evaluate how companies treat the workers involved in making their products. This includes wages, working conditions, worker rights, health and safety standards, and protections against exploitation or discrimination throughout the entire supply chain.`,
    why: `Every product has a human story behind it. Poor labor practices can lead to exploitation, unsafe working conditions, child labor, and poverty wages. By assessing labor practices, we help consumers support companies that treat workers fairly and with dignity.`,
    howWeMeasure: `Our labor practices assessment examines multiple dimensions:

- Living wage commitments and implementation
- Working hours and conditions
- Health and safety standards
- Freedom of association and collective bargaining rights
- Child labor and forced labor prevention
- Discrimination and harassment policies
- Supply chain transparency and monitoring

We analyze data from independent labor audits, third-party certifications (like Fair Trade), company policies and disclosures, and reports from labor rights organizations.`,
    impactScale: [
      { 
        rating: 'A (Excellent)', 
        description: 'Industry-leading labor practices with verified living wages, exemplary working conditions, and worker empowerment programs',
        example: 'Worker-owned cooperatives or B Corps with transparent supply chains and independently verified labor standards',
      },
      { 
        rating: 'B (Good)', 
        description: 'Above average labor standards with fair trade certification or equivalent',
        example: 'Companies with fair trade certification, living wage commitments, and regular third-party audits',
      },
      { 
        rating: 'C (Average)', 
        description: 'Basic compliance with labor laws in manufacturing countries',
        example: 'Companies following legal minimums with some additional policies but limited verification',
      },
      { 
        rating: 'D (Below Average)', 
        description: 'Minimal transparency or problematic labor issues in parts of the supply chain',
        example: 'Companies with documented labor violations or very limited supply chain visibility',
      },
      { 
        rating: 'F (Poor)', 
        description: 'Documented serious labor violations or refusal to disclose labor information',
        example: 'Companies with repeated major labor violations or those operating in regions with systematic labor exploitation',
      },
    ],
    industryStats: [
      { industry: 'Apparel', average: 'Minimum wage payments', best: 'Living wage + benefits for all workers' },
      { industry: 'Electronics', average: '60-70 hour work weeks in peak periods', best: 'Maximum 48-hour work weeks with overtime limitations' },
      { industry: 'Agriculture', average: 'Seasonal contracts with limited benefits', best: 'Year-round employment with full benefits and fair trade premiums' },
      { industry: 'Home Goods', average: 'Limited supply chain transparency', best: 'Full supply chain traceability to raw material level' },
    ],
    consumerTips: [
      'Look for Fair Trade, B Corp, or SA8000 certifications',
      'Support worker-owned cooperatives when possible',
      'Research company labor policies and practices',
      'Choose products with supply chain transparency',
      'Consider geographic origin and local labor standards',
      'Avoid companies with documented labor violations',
    ],
    relatedMetrics: [
      { name: 'Community Impact', link: '/metrics/community-impact' },
      { name: 'Corporate Governance', link: '/metrics/corporate-governance' },
      { name: 'Diversity & Inclusion', link: '/metrics/diversity-inclusion' },
    ],
  },
};

// Dynamically generate metadata for the page
export async function generateMetadata({ params }: { params: { metric: string } }): Promise<Metadata> {
  const metric = metricsData[params.metric as keyof typeof metricsData];
  
  if (!metric) {
    return {
      title: 'Metric Not Found | Ethix',
      description: 'The requested impact metric could not be found.',
    };
  }
  
  return {
    title: `${metric.name} | Impact Metrics | Ethix`,
    description: metric.shortDescription,
  };
}

export default function MetricDetailPage({ params }: { params: { metric: string } }) {
  const metricId = params.metric;
  const metric = metricsData[metricId as keyof typeof metricsData];
  
  if (!metric) {
    return notFound();
  }

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
            {metric.icon}
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {metric.name}
            </h1>
            <p className="text-slate text-lg">
              {metric.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* What is it? */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              What is {metric.name}?
            </h2>
            <p className="text-slate whitespace-pre-line">
              {metric.what}
            </p>
          </div>
          
          {/* Why is it important? */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              Why is it important?
            </h2>
            <p className="text-slate whitespace-pre-line">
              {metric.why}
            </p>
          </div>
          
          {/* How we measure it */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              How we measure it
            </h2>
            <p className="text-slate whitespace-pre-line">
              {metric.howWeMeasure}
            </p>
          </div>
          
          {/* Rating scale */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              Our Rating Scale
            </h2>
            <div className="space-y-4 mt-6">
              {metric.impactScale.map((level, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-light-gray">
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full bg-${index < 2 ? 'positive' : index < 3 ? 'neutral' : 'negative'}/10 text-${index < 2 ? 'positive' : index < 3 ? 'neutral' : 'negative'} flex items-center justify-center font-bold mr-3`}>
                      {level.rating.charAt(0)}
                    </div>
                    <h3 className="font-heading font-bold text-charcoal">{level.rating}</h3>
                  </div>
                  <p className="text-slate mb-2">{level.description}</p>
                  <p className="text-sm text-slate"><strong>Example:</strong> {level.example}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Industry benchmarks */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              Industry Benchmarks
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="py-3 px-4 text-left text-charcoal font-bold rounded-tl-lg">Industry</th>
                    <th className="py-3 px-4 text-left text-charcoal font-bold">Average Performance</th>
                    <th className="py-3 px-4 text-left text-charcoal font-bold rounded-tr-lg">Best Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {metric.industryStats.map((stat, index) => (
                    <tr key={index} className={`border-b border-light-gray ${index % 2 === 1 ? 'bg-light-gray/30' : 'bg-white'}`}>
                      <td className="py-3 px-4 font-medium">{stat.industry}</td>
                      <td className="py-3 px-4">{stat.average}</td>
                      <td className="py-3 px-4 text-positive">{stat.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Consumer tips */}
          <div className="bg-white rounded-lg border border-light-gray p-6 mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
              Consumer Tips
            </h3>
            <ul className="space-y-3">
              {metric.consumerTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-earth-green/10 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-earth-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Related metrics */}
          <div className="bg-white rounded-lg border border-light-gray p-6">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
              Related Metrics
            </h3>
            <ul className="space-y-3">
              {metric.relatedMetrics.map((related, index) => (
                <li key={index}>
                  <Link href={related.link} className="flex items-center text-earth-green hover:text-earth-green-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {related.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Products with excellent ratings */}
      <div className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 text-center">
          Products with Excellent {metric.name} Ratings
        </h2>
        <div className="text-center">
          <Link href={`/products?impact=${metric.id}`} className="btn btn-primary inline-flex items-center">
            View Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Learn more about our methodology */}
      <div className="bg-light-gray/30 p-8 rounded-xl text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
          Learn More About Our Methodology
        </h2>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          Discover how we evaluate products across all impact dimensions to help you make more sustainable choices.
        </p>
        <Link href="/methodology" className="btn btn-secondary">
          Explore Our Methodology
        </Link>
      </div>
    </div>
  );
} 