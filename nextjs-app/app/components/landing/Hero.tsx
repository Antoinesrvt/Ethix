"use client"

import Link from 'next/link';
import LocalizedLink from '@/components/LocalizedLink';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import InfoTooltip from './InfoTooltip';
import HeroTitle from './HeroTitle';

export default function Hero() {
  // Use the useTranslation hook for client components
  const { t } = useTranslation();
  
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
                {t('hero.platform_badge')}
              </span>
              <HeroTitle />
              <p className="text-lg text-slate max-w-lg mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <LocalizedLink href="/products" className="rounded-full bg-earth-green text-white font-medium py-3 px-6 hover:bg-earth-green-dark transition-colors flex items-center justify-center">
                {t('hero.start_exploring')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </LocalizedLink>
              <LocalizedLink href="/methodology" className="rounded-full bg-white text-earth-green font-medium py-3 px-6 border border-earth-green/20 hover:bg-earth-green/5 transition-colors flex items-center justify-center">
                {t('hero.how_it_works')}
              </LocalizedLink>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">{t('hero.features.products')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">{t('hero.features.metrics')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">{t('hero.features.data')}</span>
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
                  {t('product_impact.example_analysis')}
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
                      <h3 className="font-heading font-bold text-xl">{t('product_impact.product_impact')}</h3>
                      <p className="text-xs text-slate">{t('product_impact.eco_friendly')} | {t('product_impact.category')}</p>
                    </div>
                  </div>
                  
                  {/* Verified data badge */}
                  <div className="flex items-center gap-1 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-earth-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-slate">{t('product_impact.verified_data')}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          {t('product_impact.metrics.carbon_footprint.name')}
                          <InfoTooltip i18nKey="product_impact.metrics.carbon_footprint.tooltip" />
                        </span>
                        <span className="text-sm font-medium text-positive">{t('product_impact.metrics.carbon_footprint.excellent')}</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-positive h-2 rounded-full animate-expand-x" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          {t('product_impact.metrics.water_usage.name')}
                          <InfoTooltip i18nKey="product_impact.metrics.water_usage.tooltip" />
                        </span>
                        <span className="text-sm font-medium text-positive">{t('product_impact.metrics.water_usage.good')}</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-positive h-2 rounded-full animate-expand-x" style={{ width: '70%', animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          {t('product_impact.metrics.labor_conditions.name')}
                          <InfoTooltip i18nKey="product_impact.metrics.labor_conditions.tooltip" />
                        </span>
                        <span className="text-sm font-medium text-neutral">{t('product_impact.metrics.labor_conditions.average')}</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
                        <div className="bg-neutral h-2 rounded-full animate-expand-x" style={{ width: '50%', animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate flex items-center">
                          {t('product_impact.metrics.end_of_life.name')}
                          <InfoTooltip i18nKey="product_impact.metrics.end_of_life.tooltip" />
                        </span>
                        <span className="text-sm font-medium text-negative">{t('product_impact.metrics.end_of_life.poor')}</span>
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
                        <span className="text-sm font-medium">{t('product_impact.alternative')}</span>
                      </div>
                      <LocalizedLink 
                        href="/products/alternatives" 
                        className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center"
                      >
                        {t('product_impact.view')}
                      </LocalizedLink>
                    </div>
                  </div>
                </div>
                
                {/* Educational element */}
                <div className="p-3 bg-light-gray/20 text-center border-t border-light-gray">
                  <LocalizedLink href="/methodology" className="text-xs text-earth-green hover:text-earth-green-dark font-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {t('product_impact.how_calculated')}
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 