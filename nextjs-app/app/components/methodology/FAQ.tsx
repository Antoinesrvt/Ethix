'use client';

import { useState, useEffect } from 'react';

type FAQProps = {
  question: string;
  answer: string;
  delay?: number;
};

export default function FAQ({ 
  question = "Frequently Asked Question", 
  answer = "This answer is currently unavailable.", 
  delay = 0 
}: FAQProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Ensure question and answer are not empty
  const safeQuestion = question && typeof question === 'string' ? question : "Frequently Asked Question";
  const safeAnswer = answer && typeof answer === 'string' ? answer : "This answer is currently unavailable.";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg border border-light-gray transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-heading text-xl font-bold text-charcoal pr-8">{safeQuestion}</h3>
        <button 
          className={`w-8 h-8 rounded-full bg-light-gray/20 flex items-center justify-center text-slate transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate">{safeAnswer}</p>
      </div>
    </div>
  );
} 