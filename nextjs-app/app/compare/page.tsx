import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Products | Ethix',
  description: 'Compare sustainable products side by side to find the option that best aligns with your values and needs.',
};

// Sample products for comparison
const comparisonProducts = [
  {
    id: 'prod1',
    name: 'Eco-Friendly Bamboo Toothbrush',
    brand: 'GreenSmile',
    image: '/products/toothbrush.jpg',
    price: 4.99,
    category: 'Personal Care',
    overallScore: 92,
    badges: ['Eco-Friendly', 'Plastic-Free'],
    metrics: {
      carbonFootprint: { value: 85, rating: 'positive' },
      waterUsage: { value: 75, rating: 'positive' },
      resourceUse: { value: 80, rating: 'positive' },
      wasteProduction: { value: 95, rating: 'positive' },
      laborPractices: { value: 70, rating: 'neutral' },
      animalWelfare: { value: 100, rating: 'positive' },
    },
    features: {
      material: 'Bamboo handle, BPA-free nylon bristles',
      packaging: 'Recycled paper box',
      certifications: ['FSC', 'Cruelty-Free', 'Plastic-Free'],
      lifespan: '3 months',
      recyclable: 'Partially',
      biodegradable: 'Yes (handle only)',
    }
  },
  {
    id: 'prod2',
    name: 'Recycled Plastic Toothbrush',
    brand: 'OceanClean',
    image: '/products/toothbrush2.jpg',
    price: 3.49,
    category: 'Personal Care',
    overallScore: 78,
    badges: ['Recycled Materials'],
    metrics: {
      carbonFootprint: { value: 65, rating: 'neutral' },
      waterUsage: { value: 60, rating: 'neutral' },
      resourceUse: { value: 85, rating: 'positive' },
      wasteProduction: { value: 70, rating: 'neutral' },
      laborPractices: { value: 80, rating: 'positive' },
      animalWelfare: { value: 100, rating: 'positive' },
    },
    features: {
      material: 'Recycled ocean plastic, BPA-free bristles',
      packaging: 'Recycled cardboard',
      certifications: ['Ocean Plastic', 'Cruelty-Free'],
      lifespan: '3 months',
      recyclable: 'Yes',
      biodegradable: 'No',
    }
  },
  {
    id: 'prod3',
    name: 'Plant-Based Electric Toothbrush',
    brand: 'EcoVibe',
    image: '/products/toothbrush3.jpg',
    price: 24.99,
    category: 'Personal Care',
    overallScore: 82,
    badges: ['Bio-Based', 'Rechargeable'],
    metrics: {
      carbonFootprint: { value: 55, rating: 'neutral' },
      waterUsage: { value: 90, rating: 'positive' },
      resourceUse: { value: 75, rating: 'positive' },
      wasteProduction: { value: 60, rating: 'neutral' },
      laborPractices: { value: 85, rating: 'positive' },
      animalWelfare: { value: 100, rating: 'positive' },
    },
    features: {
      material: 'Plant-based plastic, replaceable head',
      packaging: 'Minimal recycled cardboard',
      certifications: ['Bio-Based', 'Energy Star', 'Cruelty-Free'],
      lifespan: 'Handle: 5+ years, Heads: 3 months',
      recyclable: 'Yes (select components)',
      biodegradable: 'Partially',
    }
  }
];

const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'positive':
      return 'text-positive bg-positive/10';
    case 'negative':
      return 'text-negative bg-negative/10';
    default:
      return 'text-neutral bg-neutral/10';
  }
};

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

export default function ComparePage() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
          Compare Products
        </h1>
        <p className="text-slate max-w-3xl">
          Compare these sustainable options side by side to find the product that best aligns with your
          values and needs. Our comprehensive impact metrics help you make informed decisions.
        </p>
      </div>

      {/* Comparison Controls */}
      <div className="bg-white p-4 rounded-xl border border-light-gray mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <span className="text-sm font-medium text-slate mr-2">
            Comparing {comparisonProducts.length} Products
          </span>
          <button className="text-sm text-earth-green hover:text-earth-green-dark">
            Clear All
          </button>
        </div>
        
        <div className="flex gap-3">
          <button className="btn btn-secondary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Product
          </button>
          <button className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Share Comparison
          </button>
          <button className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr>
              <th className="w-1/4 py-4 px-4 bg-light-gray text-left text-charcoal font-heading font-bold text-lg rounded-tl-xl">
                Comparison Criteria
              </th>
              {comparisonProducts.map((product, index) => (
                <th 
                  key={product.id} 
                  className={`w-1/4 py-4 px-4 bg-light-gray text-center relative ${
                    index === comparisonProducts.length - 1 ? 'rounded-tr-xl' : ''
                  }`}
                >
                  <button className="absolute top-2 right-2 text-slate hover:text-negative p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-2">
                      {product.image ? (
                        <Image
                          src={product.image || '/placeholder.jpg'}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate/10 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-slate">{product.brand}</div>
                    <h3 className="font-bold text-charcoal">{product.name}</h3>
                    <div className="text-earth-green font-medium">€{product.price.toFixed(2)}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {/* Overall Score Row */}
            <tr className="border-b border-light-gray">
              <td className="py-6 px-4 bg-white font-medium text-charcoal">
                Overall Impact Score
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-6 px-4 bg-white text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-earth-green/10 text-earth-green">
                    <div className="text-xl font-bold">{product.overallScore}</div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Badge Row */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Badges
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {product.badges.map((badge, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-earth-green/10 text-earth-green"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Section Header: Environmental Impact */}
            <tr>
              <td colSpan={comparisonProducts.length + 1} className="py-4 px-4 bg-earth-green/5 font-heading font-bold text-charcoal">
                Environmental Impact
              </td>
            </tr>

            {/* Carbon Footprint */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Carbon Footprint
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.carbonFootprint.rating)}`}>
                      {product.metrics.carbonFootprint.rating === 'positive' ? 'Good' : 
                       product.metrics.carbonFootprint.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.carbonFootprint.rating)}`} 
                        style={{ width: `${product.metrics.carbonFootprint.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Water Usage */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Water Usage
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.waterUsage.rating)}`}>
                      {product.metrics.waterUsage.rating === 'positive' ? 'Good' : 
                       product.metrics.waterUsage.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.waterUsage.rating)}`} 
                        style={{ width: `${product.metrics.waterUsage.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Resource Use */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Resource Use
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.resourceUse.rating)}`}>
                      {product.metrics.resourceUse.rating === 'positive' ? 'Good' : 
                       product.metrics.resourceUse.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.resourceUse.rating)}`} 
                        style={{ width: `${product.metrics.resourceUse.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Waste Production */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Waste Production
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.wasteProduction.rating)}`}>
                      {product.metrics.wasteProduction.rating === 'positive' ? 'Good' : 
                       product.metrics.wasteProduction.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.wasteProduction.rating)}`} 
                        style={{ width: `${product.metrics.wasteProduction.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Section Header: Social Impact */}
            <tr>
              <td colSpan={comparisonProducts.length + 1} className="py-4 px-4 bg-earth-green/5 font-heading font-bold text-charcoal">
                Social Impact
              </td>
            </tr>

            {/* Labor Practices */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Labor Practices
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.laborPractices.rating)}`}>
                      {product.metrics.laborPractices.rating === 'positive' ? 'Good' : 
                       product.metrics.laborPractices.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.laborPractices.rating)}`} 
                        style={{ width: `${product.metrics.laborPractices.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Animal Welfare */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Animal Welfare
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-1 rounded-full mb-2 text-xs font-medium ${getRatingColor(product.metrics.animalWelfare.rating)}`}>
                      {product.metrics.animalWelfare.rating === 'positive' ? 'Good' : 
                       product.metrics.animalWelfare.rating === 'negative' ? 'Poor' : 'Average'}
                    </div>
                    <div className="w-full max-w-[120px] bg-light-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getRatingBgColor(product.metrics.animalWelfare.rating)}`} 
                        style={{ width: `${product.metrics.animalWelfare.value}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Section Header: Product Features */}
            <tr>
              <td colSpan={comparisonProducts.length + 1} className="py-4 px-4 bg-earth-green/5 font-heading font-bold text-charcoal">
                Product Features
              </td>
            </tr>

            {/* Material */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Material
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.material}
                </td>
              ))}
            </tr>

            {/* Packaging */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Packaging
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.packaging}
                </td>
              ))}
            </tr>

            {/* Certifications */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Certifications
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.certifications.join(', ')}
                </td>
              ))}
            </tr>

            {/* Lifespan */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Expected Lifespan
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.lifespan}
                </td>
              ))}
            </tr>

            {/* Recyclable */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Recyclable
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.recyclable}
                </td>
              ))}
            </tr>

            {/* Biodegradable */}
            <tr className="border-b border-light-gray">
              <td className="py-4 px-4 bg-white font-medium text-charcoal">
                Biodegradable
              </td>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="py-4 px-4 bg-white text-center">
                  {product.features.biodegradable}
                </td>
              ))}
            </tr>

            {/* Actions Row */}
            <tr>
              <td className="py-6 px-4 bg-white font-medium text-charcoal rounded-bl-xl">
                Actions
              </td>
              {comparisonProducts.map((product, index) => (
                <td 
                  key={product.id} 
                  className={`py-6 px-4 bg-white text-center ${index === comparisonProducts.length - 1 ? 'rounded-br-xl' : ''}`}
                >
                  <div className="flex flex-col gap-2">
                    <Link 
                      href={`/product/${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                    <button className="btn btn-secondary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add More Products */}
      <div className="mt-12 text-center">
        <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
          Looking for more options?
        </h3>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          Add more products to your comparison to find the perfect sustainable option
          that meets your needs and aligns with your values.
        </p>
        <Link href="/products" className="btn btn-primary">
          Browse More Products
        </Link>
      </div>
    </div>
  );
} 