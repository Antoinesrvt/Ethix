"use client";
import ProductGrid from "../../components/ProductGrid";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Sustainable Products | Ethix',
//   description: 'Discover sustainable and ethical products that align with your values. Compare products based on environmental impact, social responsibility, and more.',
// };

export default function ProductsPage() {
  // These would typically come from an API or database
  const categories = [
    'Personal Care',
    'Clothing',
    'Electronics',
    'Home',
    'Food & Drink',
    'Household',
    'Beauty',
    'Fitness',
  ];

  const impactTags = [
    'Low Carbon',
    'Fair Trade',
    'Eco-Friendly',
    'Plastic-Free',
    'Vegan',
    'Organic',
    'Recycled',
    'Biodegradable',
  ];
  
  return (
    <div className="container mx-auto ">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Sustainable Products
        </h1>
        <p className="text-slate text-lg max-w-3xl mx-auto">
          Discover products that match your values. We've analyzed the impact of these 
          products across environmental, social, and ethical dimensions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-24">
            <h3 className="font-bold text-charcoal text-lg mb-4">Filters</h3>
            
            {/* Category filter */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      className="h-4 w-4 text-earth-green focus:ring-earth-green border-gray-300 rounded"
                    />
                    <label htmlFor={`category-${index}`} className="ml-2 text-sm text-slate">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Impact filter */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-2">Impact</h4>
              <div className="space-y-2">
                {impactTags.map((tag, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`impact-${index}`}
                      className="h-4 w-4 text-earth-green focus:ring-earth-green border-gray-300 rounded"
                    />
                    <label htmlFor={`impact-${index}`} className="ml-2 text-sm text-slate">
                      {tag}
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
            
            {/* Impact score filter */}
            <div>
              <h4 className="font-medium text-charcoal mb-2">Minimum Impact Score</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      className="h-8 rounded bg-light-gray hover:bg-earth-green hover:text-white transition-colors"
                    >
                      {star}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Clear filters button */}
            <button className="w-full mt-6 py-2 border border-gray-300 rounded-lg text-slate hover:bg-gray-50 transition-colors text-sm font-medium">
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-grow">
          {/* Sort and view options */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-3 sm:mb-0">
              <span className="text-sm text-slate mr-2">Sort by:</span>
              <select className="border border-gray-300 rounded p-1.5 text-sm text-charcoal">
                <option>Relevance</option>
                <option>Impact Score: High to Low</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
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
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-slate">Active filters:</span>
            <div className="bg-earth-green/10 text-earth-green text-sm px-3 py-1 rounded-full flex items-center">
              Personal Care
              <button className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-earth-green/10 text-earth-green text-sm px-3 py-1 rounded-full flex items-center">
              Eco-Friendly
              <button className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Products grid */}
          <ProductGrid 
            title="" 
            products={undefined} // Use the default sample products
            maxProducts={12} 
            filterTags={['Personal Care', 'Home', 'Electronics', 'Fashion']}
          />
          
          {/* Pagination */}
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
              <button className="px-3 py-2 text-sm font-medium border-t border-b border-gray-300 bg-white text-slate hover:bg-gray-50">
                8
              </button>
              <button className="px-3 py-2 text-sm font-medium rounded-r-lg border border-gray-300 bg-white text-slate hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 