'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { languages } from '@/i18n';

// Function to extract locale from pathname
const extractLocale = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  return segments[0] && ['en', 'fr'].includes(segments[0]) ? segments[0] : 'en';
};

// Function to get path without locale
const removeLocaleFromPath = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && ['en', 'fr'].includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const currentLocale = extractLocale(pathname);
  
  // Compute localized paths for each language
  const getLocalizedPath = (targetLocale: string) => {
    const pathWithoutLocale = removeLocaleFromPath(pathname);
    return `/${targetLocale}${pathWithoutLocale}`;
  };

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Change i18next language
    i18n.changeLanguage(newLocale);
    
    // Navigate to the new localized path
    const newPath = getLocalizedPath(newLocale);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 py-1 px-2 rounded hover:bg-light-gray/50 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg mr-1">
          {languages.find(lang => lang.code === currentLocale)?.flag}
        </span>
        <span className="uppercase text-xs font-medium">{currentLocale}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 py-2 w-40 bg-white rounded-md shadow-lg z-50 border border-light-gray">
          {languages.map((language) => {
            const isActive = currentLocale === language.code;
            
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-light-gray/30 ${
                  isActive ? 'text-earth-green font-medium bg-light-gray/20' : 'text-charcoal'
                }`}
              >
                <span className="mr-2 text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {isActive && (
                  <svg
                    className="ml-auto w-4 h-4 text-earth-green"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
} 