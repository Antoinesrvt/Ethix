import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-sand via-white to-white opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots z-0"></div>
      
      <div className="container relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-pill bg-earth-green/10 text-earth-green font-medium text-sm">
                Ethical Consumer Platform
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal">
                Make <span className="text-earth-green">Ethical</span> Choices for a <span className="text-earth-green">Better</span> Tomorrow
              </h1>
              <p className="text-lg text-slate max-w-lg mx-auto lg:mx-0">
                Access transparent impact data on products to make informed, ethical choices that align with your values.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started" className="btn btn-primary">
                Start Exploring
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                How It Works
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">10,000+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">Multiple Impact Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-positive/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-positive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate">Verified Data Sources</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-earth-green/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-terracotta/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-floating overflow-hidden border border-light-gray">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-earth-green/10 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl">Product Impact</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate">Carbon Footprint</span>
                        <span className="text-sm font-medium text-positive">Excellent</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2">
                        <div className="bg-positive h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate">Water Usage</span>
                        <span className="text-sm font-medium text-positive">Good</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2">
                        <div className="bg-positive h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate">Labor Conditions</span>
                        <span className="text-sm font-medium text-neutral">Average</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2">
                        <div className="bg-neutral h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate">End of Life</span>
                        <span className="text-sm font-medium text-negative">Poor</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-2">
                        <div className="bg-negative h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-light-gray">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-charcoal">AS</div>
                        <span className="text-sm font-medium">Alternative Suggestion</span>
                      </div>
                      <Link href="#" className="text-earth-green text-sm font-medium hover:text-earth-green-dark">
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 