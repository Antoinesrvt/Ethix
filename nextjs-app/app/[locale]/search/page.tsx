'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductGrid from '@/app/components/ProductGrid';
import { Metadata } from 'next';

// We can't use metadata directly in client components
// In a real app, you would handle metadata in a layout or server component
// export const metadata: Metadata = {
//   title: 'Search Results | Ethix',
//   description: 'Find sustainable products that match your search criteria and align with your values.',
// };

// Sample products data - in a real app, this would come from an API call
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
    ]
  },
];

// Filter categories
const categories = [
  'All',
  'Personal Care',
  'Clothing',
  'Electronics',
  'Home',
  'Household',
  'Stationery',
];

// Impact filters
const impactFilters = [
  { name: 'High Impact Score', value: 'high-impact' },
  { name: 'Low Carbon', value: 'low-carbon' },
  { name: 'Water Efficient', value: 'water-efficient' },
  { name: 'Plastic-Free', value: 'plastic-free' },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImpacts, setSelectedImpacts] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  
  // Function to filter and sort products based on search query and filters
  useEffect(() => {
    let results = [...sampleProducts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.badges.some(badge => badge.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      results = results.filter(product => product.category === activeCategory);
    }
    
    // Filter by impact metrics (simplified for demo)
    if (selectedImpacts.includes('low-carbon')) {
      results = results.filter(product => 
        product.impactMetrics.some(metric => 
          metric.name === 'Carbon Footprint' && metric.rating === 'positive'
        )
      );
    }
    
    if (selectedImpacts.includes('water-efficient')) {
      results = results.filter(product => 
        product.impactMetrics.some(metric => 
          metric.name === 'Water Usage' && metric.rating === 'positive'
        )
      );
    }
    
    if (selectedImpacts.includes('plastic-free')) {
      results = results.filter(product => 
        product.badges.includes('Plastic-Free')
      );
    }
    
    // Sort products
    if (sortOption === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    }
    // Add more sorting options as needed
    
    setFilteredProducts(results);
  }, [searchQuery, activeCategory, selectedImpacts, sortOption]);
  
  // Toggle impact filter
  const toggleImpactFilter = (value: string) => {
    setSelectedImpacts(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Search Results for "{searchQuery}"
        </h1>
        <p className="text-slate max-w-3xl">
          We found {filteredProducts.length} sustainable products that match your search criteria.
          Refine your results using the filters below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-24">
            <h3 className="font-bold text-charcoal text-lg mb-4">Filter Results</h3>
            
            {/* Search refinement */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Refine Search</h4>
              <div className="relative">
                <form action="/search" method="GET">
                  <input
                    type="text"
                    name="q"
                    defaultValue={searchQuery}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-earth-green focus:outline-none text-sm"
                  />
                  <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Category filter */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center w-full text-left ${
                        activeCategory === category 
                          ? 'text-earth-green font-medium' 
                          : 'text-slate hover:text-earth-green'
                      }`}
                    >
                      <span className={`h-3 w-3 rounded-full mr-2 ${
                        activeCategory === category 
                          ? 'bg-earth-green' 
                          : 'bg-gray-200'
                      }`}></span>
                      {category}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Impact filter */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Impact</h4>
              <div className="space-y-2">
                {impactFilters.map((filter, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`impact-${index}`}
                      checked={selectedImpacts.includes(filter.value)}
                      onChange={() => toggleImpactFilter(filter.value)}
                      className="h-4 w-4 text-earth-green focus:ring-earth-green border-gray-300 rounded"
                    />
                    <label htmlFor={`impact-${index}`} className="ml-2 text-sm text-slate">
                      {filter.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price range filter */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Price Range</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate">$0</span>
                  <span className="text-xs text-slate">$100+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            {/* Clear filters button */}
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSelectedImpacts([]);
              }}
              className="w-full py-2 border border-gray-300 rounded-lg text-slate hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-grow">
          {/* Sort options */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-3 sm:mb-0">
              <span className="text-sm text-slate mr-2">Sort by:</span>
              <select 
                className="border border-gray-300 rounded p-1.5 text-sm text-charcoal"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="impact">Impact Score: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate">View:</span>
              <button className="bg-earth-green text-white p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="bg-gray-100 text-slate p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Active filters */}
          {(activeCategory !== 'All' || selectedImpacts.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-slate">Active filters:</span>
              
              {activeCategory !== 'All' && (
                <div className="bg-earth-green/10 text-earth-green text-sm px-3 py-1 rounded-full flex items-center">
                  {activeCategory}
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className="ml-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {selectedImpacts.map((impact, index) => {
                const label = impactFilters.find(f => f.value === impact)?.name || impact;
                return (
                  <div 
                    key={index} 
                    className="bg-earth-green/10 text-earth-green text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    {label}
                    <button 
                      onClick={() => toggleImpactFilter(impact)}
                      className="ml-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Search results */}
          {filteredProducts.length > 0 ? (
            <ProductGrid 
              title="" 
              products={filteredProducts}
              showFilters={false}
            />
          ) : (
            <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
              <div className="text-earth-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">No results found</h3>
              <p className="text-slate mb-6">
                We couldn't find any products matching your search criteria. 
                Try adjusting your filters or search for something else.
              </p>
              <Link href="/products" className="btn btn-primary">
                Browse All Products
              </Link>
            </div>
          )}
          
          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center">
                <button className="px-3 py-2 text-sm font-medium rounded-l-lg border border-gray-300 bg-white text-slate hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm font-medium border-t border-b border-gray-300 bg-earth-green text-white">
                  1
                </button>
                <button className="px-3 py-2 text-sm font-medium border-t border-b border-gray-300 bg-white text-slate hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm font-medium border-t border-b border-gray-300 bg-white text-slate hover:bg-gray-50">
                  3
                </button>
                <span className="px-3 py-2 text-sm font-medium border-t border-b border-gray-300 bg-white text-slate">
                  ...
                </span>
                <button className="px-3 py-2 text-sm font-medium rounded-r-lg border border-gray-300 bg-white text-slate hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 