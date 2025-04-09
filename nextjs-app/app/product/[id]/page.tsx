import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ProductGrid from '@/app/components/ProductGrid';

// Sample product data - in a real app, this would come from an API call
// using the ID from the URL params
const productData = {
  id: 'prod1',
  name: 'Eco-Friendly Bamboo Toothbrush',
  brand: 'GreenSmile',
  image: '/products/toothbrush.jpg',
  price: 4.99,
  description: `This eco-friendly bamboo toothbrush features biodegradable bamboo handles and BPA-free nylon bristles. 
  The ergonomic design ensures comfortable brushing while minimizing environmental impact. Each purchase supports 
  reforestation efforts and plastic waste reduction.`,
  category: 'Personal Care',
  badges: ['Eco-Friendly', 'Plastic-Free', 'Vegan'],
  impactMetrics: [
    { name: 'Carbon Footprint', value: 85, rating: 'positive', details: 'Manufacturing produces 85% less CO2 compared to plastic alternatives' },
    { name: 'Water Usage', value: 75, rating: 'positive', details: 'Requires minimal water during production' },
    { name: 'Biodegradability', value: 90, rating: 'positive', details: 'Handle is 100% biodegradable, bristles can be removed for recycling' },
    { name: 'Social Impact', value: 70, rating: 'positive', details: 'Fair labor practices and community reinvestment' },
    { name: 'Material Sourcing', value: 95, rating: 'positive', details: 'Sustainably harvested bamboo from managed forests' },
  ],
  specifications: [
    { name: 'Materials', value: 'Bamboo handle, BPA-free nylon bristles' },
    { name: 'Dimensions', value: '19cm x 1.5cm x 2cm' },
    { name: 'Weight', value: '15g' },
    { name: 'Package Contents', value: '1x Bamboo Toothbrush, 1x Biodegradable Storage Case' },
    { name: 'Care Instructions', value: 'Rinse after use, store in dry place, replace every 3 months' },
    { name: 'End of Life', value: 'Remove bristles, compost handle or use as plant marker' },
  ],
  certifications: [
    { name: 'FSC Certified', logo: '/certifications/fsc.png', description: 'Forest Stewardship Council certified bamboo' },
    { name: 'Cruelty-Free', logo: '/certifications/cruelty-free.png', description: 'No animal testing' },
    { name: 'Plastic-Free', logo: '/certifications/plastic-free.png', description: 'Plastic-free packaging and product' },
  ],
  manufacturer: {
    name: 'GreenSmile',
    location: 'Portugal',
    founded: 2015,
    rating: 4.7,
    description: 'GreenSmile is dedicated to creating sustainable personal care products that reduce plastic waste while maintaining high performance.',
    sustainabilityCommitment: 'For every product sold, GreenSmile plants one tree and removes 1kg of plastic from oceans.',
  }
};

// Dynamically generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // In a real app, fetch the product data using the ID
  // const product = await fetchProductById(params.id);
  const product = productData; // Using our sample data
  
  return {
    title: `${product.name} | Ethix`,
    description: `Discover the environmental and social impact of ${product.name} by ${product.brand}. View detailed sustainability metrics and make an informed purchase decision.`,
    openGraph: {
      images: ['/products/toothbrush.jpg'], // In real app: product.image
    },
  };
}

const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'positive':
      return 'text-positive';
    case 'negative':
      return 'text-negative';
    default:
      return 'text-neutral';
  }
};

// Function to generate progress bar background color
const getRatingBgColor = (rating: string) => {
  switch (rating) {
    case 'positive':
      return 'bg-positive';
    case 'negative':
      return 'bg-negative';
    default:
      return 'bg-neutral';
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, fetch the product data using the ID
  // const product = await fetchProductById(params.id);
  const product = productData; // Using our sample data

  return (
    <div className="container px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6">
        <Link href="/" className="hover:text-earth-green">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-earth-green">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-earth-green">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">{product.name}</span>
      </div>

      {/* Product Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-xl border border-light-gray shadow-sm">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-light-gray">
            <Image
              src={product.image || '/placeholder.jpg'}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Certifications */}
          <div className="mt-6">
            <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              {product.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg border border-light-gray">
                  <div className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center mr-3">
                    {/* Would use actual image in production */}
                    <div className="text-slate text-xs font-medium">{cert.name.substring(0, 2)}</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-charcoal">{cert.name}</div>
                    <div className="text-xs text-slate">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Link 
                href={`/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-earth-green hover:text-earth-green-dark"
              >
                {product.brand}
              </Link>
              <div className="h-4 w-px bg-light-gray mx-3"></div>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ${star <= Math.round(product.manufacturer.rating) ? 'text-highlight' : 'text-light-gray'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate ml-1">{product.manufacturer.rating}/5</span>
              </div>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
              {product.name}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {product.badges.map((badge, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-earth-green/10 text-earth-green"
                >
                  {badge}
                </span>
              ))}
            </div>
            
            <p className="text-slate mb-6">{product.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-charcoal">€{product.price.toFixed(2)}</span>
              <span className="ml-3 text-sm text-positive">In stock</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn btn-primary flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="btn btn-secondary flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Save for Later
              </button>
            </div>
          </div>
          
          {/* Quick Impact Summary */}
          <div className="bg-white p-5 rounded-xl border border-light-gray mb-6">
            <h3 className="font-heading text-lg font-bold text-charcoal mb-4">Impact Summary</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-positive/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-positive mb-1">A+</div>
                <div className="text-xs text-slate">Environmental</div>
              </div>
              <div className="bg-positive/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-positive mb-1">A</div>
                <div className="text-xs text-slate">Social</div>
              </div>
              <div className="bg-positive/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-positive mb-1">A</div>
                <div className="text-xs text-slate">Overall</div>
              </div>
            </div>
          </div>
          
          {/* About Manufacturer */}
          <div className="bg-white p-5 rounded-xl border border-light-gray">
            <h3 className="font-heading text-lg font-bold text-charcoal mb-3">About the Manufacturer</h3>
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-lg bg-earth-green/10 flex items-center justify-center text-earth-green font-bold mr-3">
                {product.manufacturer.name.substring(0, 2)}
              </div>
              <div>
                <div className="font-bold text-charcoal">{product.manufacturer.name}</div>
                <div className="text-sm text-slate">{product.manufacturer.location} · Est. {product.manufacturer.founded}</div>
              </div>
            </div>
            <p className="text-sm text-slate mb-3">{product.manufacturer.description}</p>
            <p className="text-sm font-medium text-earth-green">{product.manufacturer.sustainabilityCommitment}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-12">
        <div className="border-b border-light-gray mb-6">
          <div className="flex overflow-x-auto">
            <button className="px-6 py-3 font-medium text-earth-green border-b-2 border-earth-green">
              Impact Details
            </button>
            <button className="px-6 py-3 font-medium text-slate hover:text-earth-green">
              Specifications
            </button>
            <button className="px-6 py-3 font-medium text-slate hover:text-earth-green">
              Reviews
            </button>
            <button className="px-6 py-3 font-medium text-slate hover:text-earth-green">
              FAQs
            </button>
          </div>
        </div>
        
        {/* Impact Metrics Detail Section */}
        <div className="bg-white p-6 rounded-xl border border-light-gray">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-6">Impact Metrics in Detail</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {product.impactMetrics.map((metric, index) => (
                <div key={index} className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-charcoal">{metric.name}</div>
                    <div className={`font-medium ${getRatingColor(metric.rating)}`}>
                      {metric.rating === 'positive' ? 'Good' : metric.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5 mb-3">
                    <div 
                      className={`h-2.5 rounded-full ${getRatingBgColor(metric.rating)}`} 
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate">{metric.details}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-light-gray/30 p-6 rounded-xl">
              <h4 className="font-heading text-lg font-bold text-charcoal mb-4">How We Calculate Impact</h4>
              <p className="text-slate mb-4">
                Our impact metrics are calculated using a comprehensive methodology that considers the entire 
                product lifecycle, from material sourcing and manufacturing to use and end-of-life disposal.
              </p>
              <p className="text-slate mb-4">
                We analyze data from multiple sources, including manufacturer disclosures, third-party certifications, 
                independent laboratory testing, and industry benchmarks.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/methodology" className="btn btn-secondary btn-sm">
                  Learn More About Our Methodology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mb-12 hidden">
        <div className="bg-white p-6 rounded-xl border border-light-gray">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-6">Product Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="py-3 border-b border-light-gray">
                <div className="font-medium text-charcoal mb-1">{spec.name}</div>
                <div className="text-slate">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternatives Section */}
      <div className="mb-16">
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">Better Alternatives</h3>
        <ProductGrid 
          showFilters={false}
          maxProducts={4}
        />
      </div>

      {/* You May Also Like Section */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">You May Also Like</h3>
        <ProductGrid 
          showFilters={false}
          maxProducts={4}
        />
      </div>
    </div>
  );
} 