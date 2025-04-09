import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImpactMetric {
  name: string;
  value: number;
  rating: 'positive' | 'neutral' | 'negative';
}

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  currency?: string;
  impactMetrics: ImpactMetric[];
  category?: string;
  badges?: string[];
  isAlternative?: boolean;
}

export default function ProductCard({
  id,
  name,
  brand,
  image,
  price,
  currency = '€',
  impactMetrics,
  category,
  badges = [],
  isAlternative = false
}: ProductCardProps) {
  
  // Function to determine color class based on rating
  const getRatingColorClass = (rating: 'positive' | 'neutral' | 'negative') => {
    switch (rating) {
      case 'positive':
        return 'bg-positive';
      case 'neutral':
        return 'bg-neutral';
      case 'negative':
        return 'bg-negative';
      default:
        return 'bg-neutral';
    }
  };

  return (
    <div className={`group bg-white rounded-xl border ${isAlternative ? 'border-earth-green' : 'border-light-gray'} overflow-hidden shadow-sm hover:shadow-floating transition-all duration-300 hover:-translate-y-1`}>
      {/* Alternative product badge */}
      {isAlternative && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-earth-green text-white">
            Better Alternative
          </span>
        </div>
      )}

      {/* Product image */}
      <div className="relative w-full aspect-square overflow-hidden bg-light-gray">
        {/* Placeholder when no image is available */}
        {!image ? (
          <div className="absolute inset-0 flex items-center justify-center bg-light-gray">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        
        {/* Category tag */}
        {category && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-charcoal/70 text-white backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
        
        {/* Other badges */}
        {badges.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            {badges.map((badge, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-warm-sand/80 text-clay backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="mb-3">
          <p className="text-xs text-slate font-medium uppercase">{brand}</p>
          <h3 className="font-heading font-bold text-lg text-charcoal line-clamp-2 h-12">{name}</h3>
          <p className="text-earth-green font-medium mt-1">{currency}{price.toFixed(2)}</p>
        </div>
        
        {/* Impact metrics */}
        <div className="space-y-2">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-slate">{metric.name}</span>
                <span className={`text-xs ${
                  metric.rating === 'positive' ? 'text-positive' : 
                  metric.rating === 'negative' ? 'text-negative' : 
                  'text-neutral'
                }`}>
                  {metric.rating === 'positive' ? 'Good' : 
                   metric.rating === 'negative' ? 'Poor' : 
                   'Average'}
                </span>
              </div>
              <div className="w-full bg-light-gray rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${getRatingColorClass(metric.rating)}`} 
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <div className="px-4 pb-4 mt-auto flex justify-between items-center">
        <Link 
          href={`/product/${id}`}
          className="text-sm font-medium text-earth-green hover:text-earth-green-dark transition-colors"
        >
          View Details
        </Link>
        <button 
          className="p-2 rounded-full bg-earth-green/10 text-earth-green hover:bg-earth-green/20 transition-colors"
          aria-label="Add to favorites"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 