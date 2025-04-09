import Image from 'next/image';

const testimonials = [
  {
    quote: "ChooseBetter has completely changed how I shop. I can now easily find products that align with my environmental values.",
    name: "Sophie Martinez",
    title: "Sustainability Advocate",
    avatar: "/images/testimonial-1.jpg" // Placeholder - replace with actual path
  },
  {
    quote: "I've been looking for a tool like this for years. The impact metrics make it easy to compare products and make better choices.",
    name: "David Chen",
    title: "Conscious Consumer",
    avatar: "/images/testimonial-2.jpg" // Placeholder - replace with actual path
  },
  {
    quote: "As someone who cares about ethical production, this platform has been invaluable in helping me support companies with fair labor practices.",
    name: "Aisha Johnson",
    title: "Ethical Shopping Enthusiast",
    avatar: "/images/testimonial-3.jpg" // Placeholder - replace with actual path
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-snow to-transparent z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            What Our <span className="text-earth-green">Community</span> Says
          </h2>
          <p className="text-slate text-lg">
            Join thousands of people who are making more conscious purchasing decisions with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-md border border-light-gray relative flex flex-col h-full"
            >
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-earth-green opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-slate flex-grow mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-earth-green/10 overflow-hidden flex items-center justify-center mr-4">
                  {/* Placeholder for avatar */}
                  <div className="text-earth-green font-medium">
                    {testimonial.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-slate">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-pill bg-earth-green/10 text-earth-green">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">Trusted by 50,000+ users worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
} 