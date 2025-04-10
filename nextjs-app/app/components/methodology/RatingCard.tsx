'use client';

import { useEffect, useState } from 'react';

type RatingCardProps = {
  grade: string;
  label: string;
  description: string;
  color: string;
  delay?: number;
};

export default function RatingCard({ 
  grade, 
  label, 
  description, 
  color = 'emerald',
  delay = 0 
}: RatingCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`bg-white p-6 rounded-lg border border-light-gray flex items-start hover:shadow-md transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center font-bold text-${color}-700 text-xl mr-4 transition-transform hover:scale-110 duration-300`}>
        {grade}
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{label}</h3>
        <p className="text-slate">
          {description}
        </p>
      </div>
    </div>
  );
} 