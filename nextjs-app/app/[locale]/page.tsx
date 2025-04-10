import { Suspense } from "react";
import { initServerTranslations } from "@/i18n/init";
import { locales } from "@/i18n";

import Hero from "../components/landing/Hero";
import Partners from "../components/landing/Partners";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import ImpactMetrics from "../components/landing/ImpactMetrics";
import CallToAction from "../components/landing/CallToAction";
import { AllPosts } from "@/app/components/Posts";

// Type definition for page props
type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Home page component
 */
export default async function Home({ params }: Props) {
  // Extract and validate locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Initialize translations for this page
  await initServerTranslations(locale);
  
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Partners Section */}
      {/* <Partners /> */}
      
      {/* Features Section */}
      <Features />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Impact Metrics Section */}
      <ImpactMetrics />
      
      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white border-t border-light-gray">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
              Latest from Our <span className="text-earth-green">Blog</span>
            </h2>
            <p className="text-slate text-lg">
              Discover insights, guides, and news on ethical consumption and sustainable living.
            </p>
          </div>
          
          <Suspense>
            <AllPosts />
          </Suspense>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
} 