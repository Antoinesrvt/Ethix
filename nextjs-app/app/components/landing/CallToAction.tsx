import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-green via-deep-teal to-earth-green-dark z-0 opacity-90"></div>
      <div className="absolute inset-0 bg-pattern-dots z-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Join the Movement for More Conscious Consumption
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Together, we can drive meaningful change through our everyday purchasing decisions. Start your journey toward more ethical and sustainable choices today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn bg-white text-earth-green hover:bg-light-gray">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/how-it-works" className="btn border border-white/30 text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80 text-sm">Products Analyzed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 text-sm">Impact Metrics</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-sm">Brand Partners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80 text-sm">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 