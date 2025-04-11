import { t } from '@/i18n/server';
import LocalizedLink from '@/components/LocalizedLink';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const year = new Date().getFullYear();
  
  // Navigation columns
  const footerColumns = [
    {
      key: 'explore',
      links: ['categories', 'brands', 'resources', 'european', 'community']
    },
    {
      key: 'about',
      links: ['mission', 'methodology', 'data', 'team', 'partners']
    },
    {
      key: 'support',
      links: ['contact', 'faqs', 'suggest', 'report', 'feedback']
    }
  ];
  
  return (
    <footer className="bg-snow border-t border-light-gray pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="logo-icon w-10 h-10 bg-gradient-to-r from-earth-green to-deep-teal rounded-md flex items-center justify-center text-white font-bold text-xl shadow-md">
                Ex
              </div>
              <div className="logo-text font-heading font-bold text-xl text-charcoal">
                <span className="text-earth-green">E</span>Thix
              </div>
            </div>
            <p className="text-slate max-w-sm mb-6">
              {t("footer.about_description")}
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.254-.66.599-1.216 1.153-1.772a4.908 4.908 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.055.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-sm bg-light-gray p-3 rounded-lg">
                <span className="text-slate">
                  {t("footer.newsletter.join")}
                </span>
                <NewsletterForm />
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.key}>
              <h5 className="font-heading font-bold text-charcoal mb-4">
                {t(`footer.columns.${column.key}.title`)}
              </h5>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate hover:text-earth-green transition-colors"
                    >
                      {t(`footer.columns.${column.key}.links.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile newsletter subscription */}
        <div className="md:hidden mb-8">
          <div className="bg-light-gray p-4 rounded-lg">
            <h5 className="font-heading font-bold text-charcoal mb-2">
              {t("footer.newsletter.stay_updated")}
            </h5>
            <p className="text-slate text-sm mb-3">
              {t("footer.newsletter.description")}
            </p>
            <NewsletterForm isMobile={true} />
          </div>
        </div>

        <div className="border-t border-light-gray pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate">
          <p>
            © {year} Ethix. {t("footer.rights_reserved")}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
              >
                {t("footer.policies.privacy")}
              </a>
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
              >
                {t("footer.policies.terms")}
              </a>
              <a
                href="#"
                className="text-slate hover:text-earth-green transition-colors"
              >
                {t("footer.policies.cookies")}
              </a>
            </div>
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-eu-blue flex items-center justify-center">
                <span className="text-eu-gold text-[8px]">★</span>
              </div>
              {t("footer.powered_by")} Sanity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
