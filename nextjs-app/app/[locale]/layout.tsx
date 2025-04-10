import "@/app/globals.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import { locales, defaultLocale } from "@/i18n";
import { initServerTranslations } from "@/i18n/init";
import Providers from "@/app/providers";

import Header from "@/app/components/landing/Header";
import Footer from "@/app/components/landing/Footer";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";

// Generate static params for optimization
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Type definition for metadata generation params
type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Generate metadata for the page
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Extract and validate locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Initialize translations for metadata
  await initServerTranslations(locale);
  
  // Fetch settings from Sanity for metadata
  let settings;
  try {
    settings = await client.fetch(settingsQuery);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
  }
  
  // Create base URL for canonical links
  const baseUrl = settings?.siteUrl 
    ? `https://${settings.siteUrl}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
  
  return {
    title: {
      template: '%s | Ethix',
      default: 'Ethix | Ethical Consumer Platform',
    },
    description: 'Find ethically-made, sustainable products and their verified impact data all in one place.',
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: 'website',
      locale: locale,
      alternateLocale: locales.filter(l => l !== locale),
    },
  };
}

/**
 * Root layout component
 */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Extract and validate locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Get draft mode status - properly awaited
  const { isEnabled: isDraftMode } = await draftMode();
  
  // Initialize translations for server-side rendering
  await initServerTranslations(locale);

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen bg-white text-charcoal antialiased">
        <Providers locale={locale}>
          <Header />
          <main className="flex-grow bg-white pt-16">
            {children}
            {isDraftMode && (
              <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white text-center py-1 text-sm">
                Draft Mode Enabled
              </div>
            )}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 