"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// InfoTooltip component for displaying explanations on hover
const InfoTooltip = ({ content }: { content: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block ml-1">
      <button
        className="text-slate/60 hover:text-earth-green transition-colors w-4 h-4 rounded-full bg-light-gray flex items-center justify-center text-xs"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        aria-label="More information"
      >
        ?
      </button>
      {isVisible && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded-lg shadow-md text-xs text-slate border border-light-gray">
          {content}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b border-light-gray"></div>
        </div>
      )}
    </div>
  );
};

export default function Hero() {
  // Animation classes for progress bars
  const animatedBarClasses = "transition-all duration-1000 ease-out transform origin-left scale-x-0 animate-expand";

  return (
    <section className="relative overflow-hidden bg-warm-sand/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-sand/20 to-white/80 opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots z-0"></div>
      
      <div className="container relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-pill bg-earth-green/10 text-earth-green font-medium text-sm">
                Ethical Consumer Platform
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal">
                Make <span className="text-earth-green">Ethical</span> Choices for a <span className="text-earth-green">Better</span> Tomorrow
              </h1>
              <p className="text-lg text-slate max-w-lg mx-auto lg:mx-0">
                Access transparent impact data on products to make informed, ethical choices that align with your values.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products" className="rounded-full bg-earth-green text-white font-medium py-3 px-6 hover:bg-earth-green-dark transition-colors flex items-center justify-center">
                Start Exploring
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/methodology" className="rounded-full bg-white text-earth-green font-medium py-3 px-6 border border-earth-green/20 hover:bg-earth-green/5 transition-colors flex items-center justify-center">
                How It Works
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">10,000+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">Multiple Impact Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">Verified Data Sources</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-earth-green/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-terracotta/10 rounded-full blur-3xl"></div>
              
              {/* Enhanced Product Impact Card */}
              <div className="relative bg-white rounded-2xl shadow-floating overflow-hidden border border-light-gray transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Label indicating this is an example */}
                <div className="absolute top-3 right-3 bg-earth-green/10 text-earth-green text-xs font-medium px-2 py-1 rounded-pill">
                  Example Analysis
                </div>
                
                <div className="p-6">
                  {/* Product information */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center overflow-hidden">
                      {/* Placeholder product image */}
                      <div className="text-earth-green/70">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">Product Impact</h3>
                      <p className="text-xs text-slate">Eco-Friendly T-Shirt | Sustainable Fashion</p>
                    </div>
                  </div>
                  
                  {/* Verified data badge */}
                  <div className="flex items-center gap-1 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-earth-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-slate">Based on verified data from multiple sources</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          Carbon Footprint
                          <InfoTooltip content="Measures the total greenhouse gas emissions caused during the product's lifecycle, expressed in CO2 equivalent." />
                        </span>
                        <span className="text-sm font-medium text-positive">Excellent</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-positive h-2 rounded-full animate-expand-x" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          Water Usage
                          <InfoTooltip content="The amount of water required to produce the product from raw materials to finished product, measured in liters." />
                        </span>
                        <span className="text-sm font-medium text-positive">Good</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-positive h-2 rounded-full animate-expand-x" style={{ width: '70%', animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          Labor Conditions
                          <InfoTooltip content="Assessment of working conditions, fair wages, and ethical labor practices in the supply chain." />
                        </span>
                        <span className="text-sm font-medium text-neutral">Average</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-neutral h-2 rounded-full animate-expand-x" style={{ width: '50%', animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          End of Life
                          <InfoTooltip content="How recyclable, biodegradable, or reusable the product is after its useful life." />
                        </span>
                        <span className="text-sm font-medium text-negative">Poor</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-negative h-2 rounded-full animate-expand-x" style={{ width: '25%', animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-light-gray">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-light-gray flex items-center justify-center text-xs font-medium text-charcoal">AS</div>
                        <span className="text-sm font-medium">Alternative Suggestion</span>
                      </div>
                      <Link 
                        href="/products/alternatives" 
                        className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Educational element */}
                <div className="p-3 bg-light-gray/20 text-center border-t border-light-gray">
                  <Link href="/methodology" className="text-xs text-earth-green hover:text-earth-green-dark font-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    How are these ratings calculated?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 