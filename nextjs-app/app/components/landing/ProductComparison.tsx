'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import LocalizedLink from '@/components/LocalizedLink';
import InfoTooltip from './InfoTooltip';

// Define product type for comparison
interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
  sustainabilityScore: number;
  metrics: {
    carbonFootprint: { value: number; rating: string; percentile: number };
    waterUsage: { value: number; rating: string; percentile: number };
    laborConditions: { value: number; rating: string; percentile: number };
    endOfLife: { value: number; rating: string; percentile: number };
  };
}

// Sample products for comparison
const sampleProducts: Product[] = [
  {
    id: 'eco-tshirt',
    name: 'Organic Cotton T-Shirt',
    category: 'Fashion',
    brand: 'EcoWear',
    price: '€29.99',
    image: '/images/products/placeholder-tshirt.png',
    sustainabilityScore: 8.5,
    metrics: {
      carbonFootprint: { value: 2.1, rating: 'positive', percentile: 85 },
      waterUsage: { value: 120, rating: 'positive', percentile: 75 },
      laborConditions: { value: 7.8, rating: 'positive', percentile: 90 },
      endOfLife: { value: 6.5, rating: 'neutral', percentile: 60 },
    },
  },
  {
    id: 'standard-tshirt',
    name: 'Standard Cotton T-Shirt',
    category: 'Fashion',
    brand: 'BasicClothes',
    price: '€14.99',
    image: '/images/products/placeholder-tshirt2.png',
    sustainabilityScore: 4.2,
    metrics: {
      carbonFootprint: { value: 5.6, rating: 'negative', percentile: 25 },
      waterUsage: { value: 350, rating: 'negative', percentile: 20 },
      laborConditions: { value: 4.2, rating: 'neutral', percentile: 45 },
      endOfLife: { value: 3.0, rating: 'negative', percentile: 30 },
    },
  },
  {
    id: 'recycled-tshirt',
    name: 'Recycled Polyester T-Shirt',
    category: 'Fashion',
    brand: 'GreenThread',
    price: '€24.99',
    image: '/images/products/placeholder-tshirt3.png',
    sustainabilityScore: 7.2,
    metrics: {
      carbonFootprint: { value: 3.2, rating: 'neutral', percentile: 65 },
      waterUsage: { value: 80, rating: 'positive', percentile: 85 },
      laborConditions: { value: 6.5, rating: 'neutral', percentile: 60 },
      endOfLife: { value: 7.8, rating: 'positive', percentile: 75 },
    },
  },
];

export default function ProductComparison() {
  const { t } = useTranslation();
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['eco-tshirt', 'standard-tshirt']);
  const [activeMetric, setActiveMetric] = useState<string>('all');
  
  // Filter products based on selection
  const productsToCompare = sampleProducts.filter(p => selectedProducts.includes(p.id));
  
  // Handle product selection
  const toggleProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(id => id !== productId));
      }
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };
  
  // Get color class based on rating
  const getRatingColorClass = (rating: string) => {
    switch (rating) {
      case 'positive': return 'text-positive';
      case 'neutral': return 'text-neutral';
      case 'negative': return 'text-negative';
      default: return 'text-slate';
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light-gray/50 to-transparent z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            <span className="text-earth-green">{t('product_comparison.interactive')}</span> {t('product_comparison.title')}
          </h2>
          <p className="text-slate text-lg">
            {t('product_comparison.subtitle')}
          </p>
        </div>
        
        {/* Product Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-heading font-bold mb-4 text-center">{t('product_comparison.select_products')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sampleProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => toggleProduct(product.id)}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  selectedProducts.includes(product.id)
                    ? 'border-earth-green bg-earth-green/5 shadow-md'
                    : 'border-light-gray bg-white hover:border-earth-green/30'
                }`}
              >
                <div className="w-10 h-10 bg-light-gray rounded-md flex items-center justify-center">
                  {/* Product image placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate/60" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{product.name}</div>
                  <div className="text-xs text-slate">{product.brand}</div>
                </div>
                {selectedProducts.includes(product.id) && (
                  <div className="ml-2 bg-earth-green/10 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-earth-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Metric Filter */}
        <div className="mb-8">
          <div className="flex justify-center flex-wrap gap-3">
            <button
              onClick={() => setActiveMetric('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMetric === 'all'
                  ? 'bg-earth-green text-white'
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {t('product_comparison.all_metrics')}
            </button>
            
            <button
              onClick={() => setActiveMetric('carbonFootprint')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMetric === 'carbonFootprint'
                  ? 'bg-earth-green text-white'
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {t('product_impact.metrics.carbon_footprint.name')}
            </button>
            
            <button
              onClick={() => setActiveMetric('waterUsage')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMetric === 'waterUsage'
                  ? 'bg-earth-green text-white'
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {t('product_impact.metrics.water_usage.name')}
            </button>
            
            <button
              onClick={() => setActiveMetric('laborConditions')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMetric === 'laborConditions'
                  ? 'bg-earth-green text-white'
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {t('product_impact.metrics.labor_conditions.name')}
            </button>
            
            <button
              onClick={() => setActiveMetric('endOfLife')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMetric === 'endOfLife'
                  ? 'bg-earth-green text-white'
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {t('product_impact.metrics.end_of_life.name')}
            </button>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white border border-light-gray rounded-xl overflow-hidden shadow-md">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
            <div className="p-4 font-medium text-slate bg-light-gray/30">{t('product_comparison.metric')}</div>
            {productsToCompare.map((product) => (
              <div key={product.id} className="p-4 font-medium text-charcoal border-l border-light-gray bg-light-gray/30 flex flex-col">
                <span>{product.name}</span>
                <span className="text-sm text-slate font-normal">{product.brand}</span>
              </div>
            ))}
          </div>
          
          {/* Row: Sustainability Score */}
          <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
            <div className="p-4 bg-light-gray/10 font-medium flex items-center">
              {t('product_comparison.sustainability_score')}
              <InfoTooltip i18nKey="product_comparison.sustainability_score_tooltip" />
            </div>
            {productsToCompare.map((product) => (
              <div key={product.id} className="p-4 border-l border-light-gray">
                <div className="flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-4 border-earth-green flex items-center justify-center">
                    <span className="text-2xl font-bold text-earth-green">{product.sustainabilityScore}</span>
                  </div>
                </div>
                <div className="text-center mt-2 text-sm text-slate">
                  {t('product_comparison.out_of_10')}
                </div>
              </div>
            ))}
          </div>
          
          {/* Show/hide metrics based on filter */}
          {(activeMetric === 'all' || activeMetric === 'carbonFootprint') && (
            <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
              <div className="p-4 bg-light-gray/10 font-medium flex items-center">
                {t('product_impact.metrics.carbon_footprint.name')}
                <InfoTooltip i18nKey="product_impact.metrics.carbon_footprint.tooltip" />
              </div>
              {productsToCompare.map((product) => (
                <div key={`${product.id}-carbon`} className="p-4 border-l border-light-gray">
                  <div className="mb-2">
                    <span className="font-medium">{product.metrics.carbonFootprint.value} kg CO₂e</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                    <div 
                      className={`${product.metrics.carbonFootprint.rating === 'positive' ? 'bg-positive' : product.metrics.carbonFootprint.rating === 'neutral' ? 'bg-neutral' : 'bg-negative'} h-2 rounded-full`} 
                      style={{ width: `${product.metrics.carbonFootprint.percentile}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {(activeMetric === 'all' || activeMetric === 'waterUsage') && (
            <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
              <div className="p-4 bg-light-gray/10 font-medium flex items-center">
                {t('product_impact.metrics.water_usage.name')}
                <InfoTooltip i18nKey="product_impact.metrics.water_usage.tooltip" />
              </div>
              {productsToCompare.map((product) => (
                <div key={`${product.id}-water`} className="p-4 border-l border-light-gray">
                  <div className="mb-2">
                    <span className="font-medium">{product.metrics.waterUsage.value} L</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                    <div 
                      className={`${product.metrics.waterUsage.rating === 'positive' ? 'bg-positive' : product.metrics.waterUsage.rating === 'neutral' ? 'bg-neutral' : 'bg-negative'} h-2 rounded-full`} 
                      style={{ width: `${product.metrics.waterUsage.percentile}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {(activeMetric === 'all' || activeMetric === 'laborConditions') && (
            <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
              <div className="p-4 bg-light-gray/10 font-medium flex items-center">
                {t('product_impact.metrics.labor_conditions.name')}
                <InfoTooltip i18nKey="product_impact.metrics.labor_conditions.tooltip" />
              </div>
              {productsToCompare.map((product) => (
                <div key={`${product.id}-labor`} className="p-4 border-l border-light-gray">
                  <div className="mb-2">
                    <span className="font-medium">{product.metrics.laborConditions.value}/10</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                    <div 
                      className={`${product.metrics.laborConditions.rating === 'positive' ? 'bg-positive' : product.metrics.laborConditions.rating === 'neutral' ? 'bg-neutral' : 'bg-negative'} h-2 rounded-full`} 
                      style={{ width: `${product.metrics.laborConditions.percentile}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {(activeMetric === 'all' || activeMetric === 'endOfLife') && (
            <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
              <div className="p-4 bg-light-gray/10 font-medium flex items-center">
                {t('product_impact.metrics.end_of_life.name')}
                <InfoTooltip i18nKey="product_impact.metrics.end_of_life.tooltip" />
              </div>
              {productsToCompare.map((product) => (
                <div key={`${product.id}-eol`} className="p-4 border-l border-light-gray">
                  <div className="mb-2">
                    <span className="font-medium">{product.metrics.endOfLife.value}/10</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                    <div 
                      className={`${product.metrics.endOfLife.rating === 'positive' ? 'bg-positive' : product.metrics.endOfLife.rating === 'neutral' ? 'bg-neutral' : 'bg-negative'} h-2 rounded-full`} 
                      style={{ width: `${product.metrics.endOfLife.percentile}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Price Row */}
          <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-light-gray">
            <div className="p-4 bg-light-gray/10 font-medium">{t('product_comparison.price')}</div>
            {productsToCompare.map((product) => (
              <div key={`${product.id}-price`} className="p-4 border-l border-light-gray">
                <span className="font-medium">{product.price}</span>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))]">
            <div className="p-4 bg-light-gray/10 font-medium">{t('product_comparison.actions')}</div>
            {productsToCompare.map((product) => (
              <div key={`${product.id}-actions`} className="p-4 border-l border-light-gray">
                <LocalizedLink 
                  href={`/products/${product.id}`}
                  className="block w-full text-center py-2 px-4 bg-earth-green text-white rounded-md hover:bg-earth-green-dark transition-colors text-sm"
                >
                  {t('product_comparison.view_details')}
                </LocalizedLink>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <LocalizedLink 
            href="/products/compare" 
            className="inline-flex items-center text-earth-green hover:text-earth-green-dark font-medium"
          >
            {t('product_comparison.see_more')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
} 