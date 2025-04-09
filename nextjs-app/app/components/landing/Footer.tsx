export default function Footer() {
  return (
    <footer className="bg-white border-t border-light-gray pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="logo-icon w-10 h-10 bg-gradient-to-r from-earth-green to-deep-teal rounded-md flex items-center justify-center text-white font-bold text-xl shadow-md">
                CB
              </div>
              <div className="logo-text font-heading font-bold text-xl text-charcoal">
                Choose<span className="text-earth-green">Better</span>
              </div>
            </div>
            <p className="text-slate max-w-sm mb-6">
              Helping consumers make ethical and sustainable choices through transparent product impact data.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate hover:text-earth-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                </svg>
              </a>
              <a href="#" className="text-slate hover:text-earth-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className="text-slate hover:text-earth-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-heading font-bold text-charcoal mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Impact Metrics</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Sustainability Guide</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Ethical Standards</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Research</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-charcoal mb-4">About</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Our Team</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Methodology</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-charcoal mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate hover:text-earth-green transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-light-gray pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate">
          <p>© {new Date().getFullYear()} ChooseBetter. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-eu-blue flex items-center justify-center">
                <span className="text-eu-gold text-[8px]">★</span>
              </div>
              Made in Europe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
