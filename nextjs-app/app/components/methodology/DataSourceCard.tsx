'use client';

import { useEffect, useState } from 'react';

type DataSourceCardProps = {
  icon: string;
  title: string;
  description: string;
  delay?: number;
};

export default function DataSourceCard({ 
  icon = "📊", 
  title = "Data Source", 
  description = "Information about this data source is not available.", 
  delay = 0 
}: DataSourceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Ensure properties are valid
  const safeIcon = icon && typeof icon === 'string' ? icon : "📊";
  const safeTitle = title && typeof title === 'string' ? title : "Data Source";
  const safeDescription = description && typeof description === 'string' 
    ? description 
    : "Information about this data source is not available.";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg border border-light-gray flex items-start hover:shadow-md transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-2xl mr-4 transition-transform hover:scale-110 duration-300">
        {safeIcon}
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
          {safeTitle}
        </h3>
        <p className="text-slate">
          {safeDescription}
        </p>
      </div>
    </div>
  );
} 