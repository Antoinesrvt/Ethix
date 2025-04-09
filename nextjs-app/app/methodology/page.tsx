import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Methodology | Ethix',
  description: 'Learn how we evaluate and rate sustainable products across environmental and social impact dimensions.',
};

const methodologies = [
  {
    id: 'environmental',
    title: 'Environmental Impact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'We evaluate the complete environmental footprint of a product, from resource extraction and manufacturing to transportation, use, and end-of-life disposal.',
    metrics: [
      {
        name: 'Carbon Footprint',
        description: 'Measures greenhouse gas emissions throughout the product lifecycle, converted to CO2 equivalent (CO2e).',
        methodology: 'Data is gathered from lifecycle assessments, manufacturer disclosures, and industry benchmarks. We consider both direct emissions from production and indirect emissions from transportation and energy use.'
      },
      {
        name: 'Water Usage',
        description: 'Quantifies the total water consumption required for production, including water used in material extraction, manufacturing, and processing.',
        methodology: 'We analyze water consumption data across the supply chain, with particular attention to water-intensive materials and manufacturing processes. This includes water pollution impact as well as consumption.'
      },
      {
        name: 'Resource Efficiency',
        description: 'Evaluates how efficiently the product uses raw materials and the proportion of renewable or recycled materials.',
        methodology: 'We assess material composition, use of virgin vs. recycled materials, material yield during manufacturing, and design elements that minimize waste generation.'
      },
      {
        name: 'End of Life',
        description: 'Assesses how easily the product can be recycled, composted, or otherwise diverted from landfill after use.',
        methodology: 'We analyze product design for disassembly, material selection for recyclability, availability of take-back programs, and biodegradability where applicable.'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Responsibility',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: 'We examine how products impact the people involved in their creation, from working conditions and fair wages to community impact and inclusivity.',
    metrics: [
      {
        name: 'Labor Practices',
        description: 'Evaluates working conditions, fair pay, safety standards, and worker rights throughout the supply chain.',
        methodology: 'We analyze third-party labor certifications, company policies, factory audits, living wage calculations, and reports from labor rights organizations.'
      },
      {
        name: 'Community Impact',
        description: 'Assesses how production affects local communities, including job creation, community investment, and avoiding displacement.',
        methodology: 'We examine company disclosures, community feedback, news reports, and NGO assessments about relationships with local communities.'
      },
      {
        name: 'Diversity & Inclusion',
        description: 'Examines company commitment to diversity, inclusion, and accessibility in both workforce and product design.',
        methodology: 'We analyze company diversity reports, leadership composition, inclusive design features, and policies supporting marginalized communities.'
      },
      {
        name: 'Human Rights',
        description: 'Evaluates compliance with human rights standards, including prevention of forced labor, child labor, and discrimination.',
        methodology: 'We incorporate data from human rights organizations, supply chain transparency disclosures, and third-party human rights audits.'
      }
    ]
  },
  {
    id: 'governance',
    title: 'Corporate Governance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'We evaluate the business ethics and transparency of companies, including their commitment to sustainability, tax practices, and stakeholder engagement.',
    metrics: [
      {
        name: 'Transparency',
        description: 'Assesses how openly a company shares information about its supply chain, ingredient sourcing, environmental impact, and social practices.',
        methodology: 'We analyze the comprehensiveness of sustainability reports, supply chain disclosures, ingredient transparency, and responsiveness to stakeholder inquiries.'
      },
      {
        name: 'Ethical Business Practices',
        description: 'Evaluates company conduct regarding anti-corruption, marketing claims, lobbying activities, and tax responsibility.',
        methodology: 'We incorporate data on legal compliance, ethical controversies, third-party ethics certifications, and alignment between public statements and actions.'
      },
      {
        name: 'Sustainable Commitment',
        description: 'Measures long-term commitment to sustainability through policies, targets, investments, and executive accountability.',
        methodology: 'We evaluate science-based targets, sustainability roadmaps, capital allocation to sustainable initiatives, and executive compensation tied to sustainability goals.'
      }
    ]
  }
];

export default function MethodologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6">
        <Link href="/" className="hover:text-earth-green">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">Methodology</span>
      </div>

      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
          Our Methodology
        </h1>
        <p className="text-slate text-lg max-w-3xl mx-auto">
          How we evaluate products across multiple sustainability dimensions to provide you with accurate, transparent, and actionable information.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-xl border border-light-gray p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img 
              src="/images/methodology-illustration.svg" 
              alt="Methodology Illustration" 
              className="w-full h-auto rounded-lg"
              width={400}
              height={300}
              // This is a placeholder - replace with actual image
              style={{ backgroundColor: '#f3f4f6' }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Our Approach to Product Evaluation
            </h2>
            <p className="text-slate mb-4">
              At Ethix, we believe that making sustainable choices should be easy and accessible. Our methodology combines rigorous research, data analysis, and expert evaluation to provide you with a comprehensive understanding of a product's environmental and social impact.
            </p>
            <p className="text-slate">
              We evaluate products across multiple dimensions, considering the entire lifecycle from raw material extraction to end-of-life disposal. Our goal is to help you make informed choices that align with your values and contribute to a more sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Methodology Process */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">
          Our Evaluation Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-green text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 mt-4">
              Data Collection
            </h3>
            <p className="text-slate">
              We gather information from multiple sources, including manufacturer disclosures, third-party certifications, lifecycle assessments, and independent research.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-green text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 mt-4">
              Impact Assessment
            </h3>
            <p className="text-slate">
              We evaluate products across 12 impact metrics covering environmental, social, and product-specific dimensions, customized by product category.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-green text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 mt-4">
              Scoring & Benchmarking
            </h3>
            <p className="text-slate">
              We rate products from A to F on each applicable metric and calculate a weighted average for the overall score, comparing against industry benchmarks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-green text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3 mt-4">
              Review & Verification
            </h3>
            <p className="text-slate">
              Our team of sustainability experts reviews each evaluation, verifying data accuracy and ensuring consistent application of our methodology.
            </p>
          </div>
        </div>
      </div>

      {/* Rating System */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8">
          Our Rating System
        </h2>
        <p className="text-slate mb-8">
          We use a letter-grade rating system (A-F) to make it easy to understand how products perform across different impact metrics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-xl mr-4">
              A
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Excellent</h3>
              <p className="text-slate">
                Industry-leading performance that goes above and beyond standards. Represents innovation and exceptional commitment to sustainability.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700 text-xl mr-4">
              B
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Very Good</h3>
              <p className="text-slate">
                Significantly better than average performance, exceeding standard requirements and demonstrating strong sustainability practices.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center font-bold text-lime-700 text-xl mr-4">
              C
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Good</h3>
              <p className="text-slate">
                Average to above-average performance that meets sustainability standards and demonstrates improvement efforts.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xl mr-4">
              D
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Below Average</h3>
              <p className="text-slate">
                Below average performance with significant areas for improvement. May comply with minimum requirements but lacks comprehensive sustainability efforts.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-700 text-xl mr-4">
              F
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Poor</h3>
              <p className="text-slate">
                Poor performance that fails to meet minimum sustainability standards, or cases where companies have demonstrated negligence or greenwashing.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex items-start">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xl mr-4">
              N/A
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Not Applicable</h3>
              <p className="text-slate">
                Used when a specific metric does not apply to a particular product category, or when insufficient data is available for evaluation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light-gray/30 p-6 rounded-lg mb-8">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
            How We Calculate Overall Scores
          </h3>
          <p className="text-slate mb-4">
            Overall product scores are calculated using a weighted average of applicable metrics. The weighting varies by product category to reflect the most significant impact areas for each type of product.
          </p>
          <p className="text-slate">
            For example, water usage is weighted more heavily for textile products, while energy efficiency receives greater emphasis for electronic devices. This category-specific approach ensures that products are evaluated fairly within their respective contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Continuous Improvement
            </h3>
            <p className="text-slate">
              Our methodology is not static—we continuously refine our approach based on new research, evolving industry standards, and feedback from sustainability experts. We regularly review and update our ratings to reflect the latest information and best practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Transparency
            </h3>
            <p className="text-slate">
              We believe in full transparency about our methodology. For each product evaluation, we provide detailed information about the data sources and criteria used. If we encounter data limitations or uncertainties, we clearly disclose these in our assessments.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
          Our Impact Metrics
        </h2>
        <p className="text-slate mb-8">
          We evaluate products across 12 impact metrics, organized into three main categories. Each metric is carefully defined with specific criteria and evaluation standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-light-gray h-full">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mb-4">
              🌿
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Environmental Impact
            </h3>
            <ul className="text-slate space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Carbon Footprint
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Water Usage
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Resource Efficiency
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Waste Production
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Biodiversity Impact
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-earth-green rounded-full mr-2"></span>
                Chemical Usage
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray h-full">
            <div className="w-12 h-12 rounded-full bg-deep-teal/10 flex items-center justify-center text-2xl mb-4">
              👥
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Social Impact
            </h3>
            <ul className="text-slate space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
                Labor Practices
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
                Animal Welfare
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
                Community Impact
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray h-full">
            <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-2xl mb-4">
              📦
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Product Attributes
            </h3>
            <ul className="text-slate space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber rounded-full mr-2"></span>
                Product Durability
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber rounded-full mr-2"></span>
                Packaging Impact
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber rounded-full mr-2"></span>
                Transportation Impact
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/metrics" className="btn btn-primary">
            Explore Our Impact Metrics in Detail
          </Link>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
          Our Data Sources
        </h2>
        <p className="text-slate mb-8">
          We use a variety of data sources to ensure comprehensive and accurate evaluations. These include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              📋
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Manufacturer Disclosures
              </h3>
              <p className="text-slate">
                Information provided by companies about their products, processes, and supply chains.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              ✅
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Third-Party Certifications
              </h3>
              <p className="text-slate">
                Verified standards such as B Corp, Fair Trade, GOTS, Energy Star, FSC, and other recognized certification programs.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              🧪
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Life Cycle Assessments
              </h3>
              <p className="text-slate">
                Comprehensive evaluations of environmental impacts throughout a product's life cycle.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              📚
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Academic Research
              </h3>
              <p className="text-slate">
                Peer-reviewed studies and publications from academic institutions and research organizations.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              🔍
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Independent Investigations
              </h3>
              <p className="text-slate">
                Findings from NGOs, investigative journalists, and independent monitoring organizations.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray flex">
            <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4">
              🌐
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Industry Benchmarks
              </h3>
              <p className="text-slate">
                Data on industry averages and best practices for different product categories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet our team */}
      <div className="bg-light-gray/30 p-8 rounded-xl mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">
          Meet Our Methodology Team
        </h2>
        <p className="text-slate mb-8 max-w-3xl mx-auto text-center">
          Our methodology is developed and maintained by a diverse team of experts with backgrounds in sustainability science, environmental engineering, social responsibility, and product design.
        </p>
        
        <div className="text-center mb-8">
          <img 
            src="/images/team-photo.jpg" 
            alt="Ethix Methodology Team" 
            className="rounded-lg mx-auto max-w-full"
            width={800}
            height={400}
            // This is a placeholder - replace with actual image
            style={{ backgroundColor: '#f3f4f6', height: '300px' }}
          />
        </div>

        <div className="text-center">
          <Link href="/about-us" className="btn btn-outline">
            Learn About Our Team
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              How often do you update your ratings?
            </h3>
            <p className="text-slate">
              We review and update our ratings regularly as new information becomes available. Major updates to product evaluations are conducted at least annually, while our methodology undergoes continuous refinement based on the latest research and industry developments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              How do you handle products with limited information?
            </h3>
            <p className="text-slate">
              When information is limited, we clearly indicate data gaps and may assign a lower rating if transparency is a concern. We reach out to manufacturers for additional information and update our evaluations as more data becomes available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              Do you consider price in your ratings?
            </h3>
            <p className="text-slate">
              Our primary focus is on sustainability performance, not price. However, we do provide price information to help consumers make informed decisions. We believe sustainable options should be accessible to all, so we feature products at various price points.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              How do you prevent greenwashing in your evaluations?
            </h3>
            <p className="text-slate">
              We look beyond marketing claims and require substantive evidence of sustainability practices. Our methodology prioritizes third-party verification, quantifiable metrics, and transparent reporting. Companies must demonstrate real impact, not just good intentions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              Can companies pay to improve their ratings?
            </h3>
            <p className="text-slate">
              Absolutely not. Our ratings are completely independent and cannot be influenced by financial considerations. We do not accept payment from companies to improve their ratings or to be featured on our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-earth-green/5 p-8 rounded-xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Ready to Explore Sustainable Products?
        </h2>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          Browse our catalog of evaluated products and find options that align with your values.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products" className="btn btn-primary">
            Explore Products
          </Link>
          <Link href="/metrics" className="btn btn-outline">
            Learn About Our Metrics
          </Link>
        </div>
      </div>
    </div>
  );
} 