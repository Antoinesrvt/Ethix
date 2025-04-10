'use client';

import { useState, ReactNode, useEffect } from 'react';

type Metric = {
  name: string;
  description: string;
  methodology: string;
};

type MethodologySectionProps = {
  title: string;
  icon: ReactNode;
  description: string;
  metrics: Metric[] | unknown;
  delay?: number;
};

export default function MethodologySection({ 
  title, 
  icon, 
  description, 
  metrics,
  delay = 0
}: MethodologySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure metrics is always an array of valid metric objects
  const safeMetrics: Metric[] = Array.isArray(metrics) 
    ? metrics.filter(metric => 
        metric && 
        typeof metric === 'object' && 
        typeof metric.name === 'string' &&
        typeof metric.description === 'string')
          .map(metric => ({
            name: metric.name || 'Unnamed Metric',
            description: metric.description || 'No description available',
            methodology: metric.methodology || 'Methodology information not available'
          }))
    : [];

  // Animation delay for entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-white rounded-xl border border-light-gray overflow-hidden transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div 
        className={`p-6 cursor-pointer transition-colors duration-300 ${
          isExpanded ? 'bg-light-gray/20' : 'hover:bg-light-gray/10'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full bg-${isExpanded ? 'earth-green' : 'light-gray'}/10 flex items-center justify-center text-${isExpanded ? 'earth-green' : 'slate'} transition-colors duration-300`}>
            {icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-charcoal">{title || 'Section Title'}</h3>
              <button 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-slate transition-transform duration-300 ${
                  isExpanded ? 'rotate-180 bg-light-gray/30' : 'bg-light-gray/10'
                }`}
                aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-slate mt-1">{description || 'No description available'}</p>
          </div>
        </div>
      </div>
      
      {/* Expanded content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-light-gray/50">
          {safeMetrics.length === 0 ? (
            <div className="p-4 text-center text-slate">
              No metric details available for this section.
            </div>
          ) : (
            <div className="space-y-6 mt-6">
              {safeMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-light-gray/10 p-5 rounded-lg"
                >
                  <h4 className="font-heading text-lg font-bold text-charcoal mb-2">{metric.name}</h4>
                  <p className="text-slate mb-4">{metric.description}</p>
                  
                  <div className="bg-white p-4 rounded-md border border-light-gray/50">
                    <h5 className="text-sm font-medium text-slate mb-2">Our methodology:</h5>
                    <p className="text-sm text-slate">{metric.methodology}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 