import Link from 'next/link';

const metrics = [
  {
    id: 'carbon',
    title: 'Carbon Footprint',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'The total greenhouse gas emissions caused by a product throughout its lifecycle.',
    values: [
      { label: 'Low Impact', percent: 75, color: 'positive' },
      { label: 'Average', percent: 50, color: 'neutral' },
      { label: 'High Impact', percent: 25, color: 'negative' },
    ]
  },
  {
    id: 'water',
    title: 'Water Usage',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: 'The amount of water required to produce the product, from manufacturing to packaging.',
    values: [
      { label: 'Low Impact', percent: 80, color: 'positive' },
      { label: 'Average', percent: 45, color: 'neutral' },
      { label: 'High Impact', percent: 20, color: 'negative' },
    ]
  },
  {
    id: 'labor',
    title: 'Labor Conditions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Assessment of working conditions and fair labor practices in the supply chain.',
    values: [
      { label: 'Excellent', percent: 90, color: 'positive' },
      { label: 'Fair', percent: 60, color: 'neutral' },
      { label: 'Poor', percent: 30, color: 'negative' },
    ]
  },
  {
    id: 'materials',
    title: 'Materials & Resources',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    description: 'Evaluation of material sourcing, renewable resources, and resource efficiency.',
    values: [
      { label: 'Sustainable', percent: 85, color: 'positive' },
      { label: 'Mixed', percent: 50, color: 'neutral' },
      { label: 'Unsustainable', percent: 15, color: 'negative' },
    ]
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-16 md:py-24 bg-snow relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-waves opacity-20 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            Impact <span className="text-earth-green">Metrics</span> That Matter
          </h2>
          <p className="text-slate text-lg">
            We evaluate products across multiple dimensions of environmental and social impact to give you a comprehensive view.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="bg-white rounded-2xl shadow-md border border-light-gray overflow-hidden">
              <div className="p-6 border-b border-light-gray">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-earth-green/10 flex items-center justify-center text-earth-green">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-charcoal">{metric.title}</h3>
                    <p className="text-sm text-slate">{metric.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  {metric.values.map((value, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate">{value.label}</span>
                      </div>
                      <div className="w-full bg-light-gray rounded-full h-3">
                        <div 
                          className={`bg-${value.color} h-3 rounded-full relative`} 
                          style={{ width: `${value.percent}%` }}
                        >
                          <div className="absolute -right-2 -top-1 bg-white rounded-full border border-light-gray shadow-sm w-5 h-5 flex items-center justify-center text-xs font-medium">
                            {value.percent}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-light-gray/50 py-3 px-6">
                <Link 
                  href={`/metrics/${metric.id}`} 
                  className="text-earth-green text-sm font-medium hover:text-earth-green-dark flex items-center justify-end"
                >
                  Learn more about this metric
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/methodology" className="btn btn-secondary">
            Learn About Our Methodology
          </Link>
        </div>
      </div>
    </section>
  );
} 