import React from 'react';
import ProductCard from './ProductCard';

// Sample product data for demonstration
const sampleProducts = [
  {
    id: 'prod1',
    name: 'Eco-Friendly Bamboo Toothbrush',
    brand: 'GreenSmile',
    image: '/products/toothbrush.jpg',
    price: 4.99,
    category: 'Personal Care',
    badges: ['Eco-Friendly', 'Plastic-Free'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 85, rating: 'positive' as const },
      { name: 'Water Usage', value: 75, rating: 'positive' as const },
      { name: 'Biodegradability', value: 90, rating: 'positive' as const },
    ]
  },
  {
    id: 'prod2',
    name: 'Organic Cotton T-Shirt',
    brand: 'EcoThreads',
    image: '/products/tshirt.jpg',
    price: 24.95,
    category: 'Clothing',
    badges: ['Organic', 'Fair Trade'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 60, rating: 'neutral' as const },
      { name: 'Water Usage', value: 45, rating: 'neutral' as const },
      { name: 'Labor Conditions', value: 80, rating: 'positive' as const },
    ]
  },
  {
    id: 'prod3',
    name: 'Reusable Stainless Steel Water Bottle',
    brand: 'AquaEco',
    image: '/products/bottle.jpg',
    price: 19.99,
    category: 'Home',
    badges: ['BPA-Free'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 75, rating: 'positive' as const },
      { name: 'Resource Use', value: 65, rating: 'neutral' as const },
      { name: 'End of Life', value: 90, rating: 'positive' as const },
    ]
  },
  {
    id: 'prod4',
    name: 'Biodegradable Phone Case',
    brand: 'EcoTech',
    image: '/products/phonecase.jpg',
    price: 29.95,
    category: 'Electronics',
    badges: ['Biodegradable'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 70, rating: 'positive' as const },
      { name: 'Material Sourcing', value: 85, rating: 'positive' as const },
      { name: 'End of Life', value: 95, rating: 'positive' as const },
    ]
  },
  {
    id: 'prod5',
    name: 'Recycled Paper Notebook',
    brand: 'EarthNotes',
    image: '/products/notebook.jpg',
    price: 9.99,
    category: 'Stationery',
    badges: ['Recycled'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 80, rating: 'positive' as const },
      { name: 'Resource Use', value: 90, rating: 'positive' as const },
      { name: 'Chemicals Used', value: 65, rating: 'neutral' as const },
    ]
  },
  {
    id: 'prod6',
    name: 'Plant-Based Cleaning Spray',
    brand: 'CleanGreen',
    image: '/products/cleaner.jpg',
    price: 7.50,
    category: 'Household',
    badges: ['Non-Toxic', 'Plant-Based'],
    impactMetrics: [
      { name: 'Carbon Footprint', value: 85, rating: 'positive' as const },
      { name: 'Chemicals Used', value: 95, rating: 'positive' as const },
      { name: 'Water Impact', value: 90, rating: 'positive' as const },
    ],
    isAlternative: true
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  filterTags?: string[];
  products?: any[]; // In a real app, you would define a more specific type
  maxProducts?: number;
  showFilters?: boolean;
}

export default function ProductGrid({
  title,
  subtitle,
  filterTags = [],
  products = sampleProducts,
  maxProducts = 6,
  showFilters = true
}: ProductGridProps) {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const displayedProducts = products.slice(0, maxProducts);

  return (
    <div className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-charcoal">{title}</h2>}
          {subtitle && <p className="text-slate max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      {/* Filter tags */}
      {showFilters && filterTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-earth-green text-white' 
                : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
            }`}
          >
            All
          </button>
          
          {filterTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag 
                  ? 'bg-earth-green text-white' 
                  : 'bg-light-gray text-slate hover:bg-earth-green/10 hover:text-earth-green'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            image={product.image}
            price={product.price}
            impactMetrics={product.impactMetrics}
            category={product.category}
            badges={product.badges}
            isAlternative={product.isAlternative}
          />
        ))}
      </div>
      
      {/* Load more button */}
      {products.length > maxProducts && (
        <div className="flex justify-center mt-10">
          <button className="btn btn-secondary">
            Load More Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
} 