"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Get translations
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: t('navigation.home') },
    { 
      href: "/products", 
      label: t('navigation.products'),
      isDropdown: true,
      dropdownLinks: [
        { href: "/products", label: t('products_categories.all_products') },
        { href: "/products?category=personal-care", label: t('products_categories.personal_care') },
        { href: "/products?category=home", label: t('products_categories.home') },
        { href: "/products?category=fashion", label: t('products_categories.fashion') },
      ] 
    },
    { href: "/impact-data", label: t('navigation.impact_data') },
    { href: "/learn", label: t('navigation.learn') },
    { href: "/community", label: t('navigation.community') },
    { href: "/about", label: t('navigation.about') },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-20 cursor-pointer">
            <div className="logo-icon w-10 h-10 bg-earth-green rounded-md flex items-center justify-center text-white font-bold text-xl shadow-sm">
              Ex
            </div>
            <div className="font-heading font-bold text-xl text-charcoal">
              Explore<span className="text-earth-green relative">Better</span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:block h-full">
              <ul className="flex items-center space-x-8 h-full">
                {navLinks.map((link, index) => (
                  <li key={index} className={`${link.isDropdown ? "relative group" : ""}`}>
                    <Link 
                      href={link.href}
                      className="inline-flex items-center font-medium text-slate hover:text-earth-green transition-colors duration-200 cursor-pointer py-2 px-1 relative"
                    >
                      {link.label}
                      {link.isDropdown && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                    
                    {link.isDropdown && link.dropdownLinks && (
                      <div className="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform origin-top-left scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-20">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                            <Link 
                              key={dropdownIndex} 
                              href={dropdownLink.href}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-earth-green/10 hover:text-earth-green cursor-pointer"
                            >
                              {dropdownLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              onClick={toggleSearch}
              className="text-slate hover:text-earth-green focus:outline-none transition-colors w-10 h-10 flex items-center justify-center cursor-pointer"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link href="/get-started" className="hidden md:inline-flex items-center justify-center rounded-full bg-earth-green hover:bg-earth-green-dark text-white font-medium py-2 px-5 transition-colors duration-200 cursor-pointer">
              {t('navigation.get_started')}
            </Link>

            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-md text-slate hover:text-earth-green hover:bg-gray-50 focus:outline-none md:hidden cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100">
            {navLinks.map((link, index) => (
              link.isDropdown ? (
                <details key={index} className="group">
                  <summary className="text-charcoal hover:bg-earth-green/10 hover:text-earth-green px-3 py-2 rounded-md text-base font-medium flex items-center justify-between cursor-pointer">
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="pl-4 pb-1 space-y-1">
                    {link.dropdownLinks?.map((dropdownLink, dropdownIndex) => (
                      <Link 
                        key={dropdownIndex} 
                        href={dropdownLink.href}
                        className="text-slate hover:text-earth-green block px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      >
                        {dropdownLink.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-charcoal hover:bg-earth-green/10 hover:text-earth-green block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Language Switcher for mobile */}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            
            <Link href="/get-started" className="flex items-center justify-center w-full rounded-full bg-earth-green text-white font-medium py-3 px-5 mt-3 hover:bg-earth-green-dark transition-colors duration-200 cursor-pointer">
              {t('navigation.get_started')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={`absolute inset-x-0 transition-all duration-300 bg-white shadow-md ${isSearchOpen ? 'top-full opacity-100 pointer-events-auto' : '-top-full opacity-0 pointer-events-none'}`}>
          <div className="container py-4">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-slate" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-3 pl-10 text-charcoal border border-light-gray rounded-lg bg-snow focus:outline-none focus:ring-2 focus:ring-earth-green/50"
                  placeholder="Search for products, brands, or topics..."
                  autoFocus={isSearchOpen}
                />
              </div>
              <button type="submit" className="ml-2 rounded-full bg-earth-green hover:bg-earth-green-dark text-white font-medium py-3 px-5 transition-colors duration-200 cursor-pointer">
                Search
              </button>
              <button
                type="button"
                className="p-3 ml-2 text-sm text-slate rounded-lg hover:text-earth-green cursor-pointer"
                onClick={toggleSearch}
              >
                Cancel
              </button>
            </form>
            <div className="mt-4">
              <h4 className="text-xs font-medium text-slate mb-2">POPULAR SEARCHES:</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="/search?q=eco-friendly" className="px-3 py-1 text-xs bg-earth-green/10 text-earth-green rounded-full hover:bg-earth-green/20 transition-colors cursor-pointer">
                  Eco-friendly products
                </Link>
                <Link href="/search?q=sustainable-fashion" className="px-3 py-1 text-xs bg-earth-green/10 text-earth-green rounded-full hover:bg-earth-green/20 transition-colors cursor-pointer">
                  Sustainable fashion
                </Link>
                <Link href="/search?q=fair-trade" className="px-3 py-1 text-xs bg-earth-green/10 text-earth-green rounded-full hover:bg-earth-green/20 transition-colors cursor-pointer">
                  Fair trade
                </Link>
                <Link href="/search?q=carbon-neutral" className="px-3 py-1 text-xs bg-earth-green/10 text-earth-green rounded-full hover:bg-earth-green/20 transition-colors cursor-pointer">
                  Carbon neutral
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
