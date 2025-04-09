import { Suspense } from "react";

import Hero from "./components/landing/Hero";
import Partners from "./components/landing/Partners";
import Features from "./components/landing/Features";
import Testimonials from "./components/landing/Testimonials";
import ImpactMetrics from "./components/landing/ImpactMetrics";
import CallToAction from "./components/landing/CallToAction";
import { AllPosts } from "@/app/components/Posts";

export default async function Page() {
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
            {await AllPosts()}
          </Suspense>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
}
