import "@/app/globals.css";
import { Metadata } from "next";
import { draftMode } from "next/headers";

import { defaultLocale } from "@/i18n";
import { initServerTranslations } from "@/i18n/init";

import Header from "@/app/components/landing/Header";
import Footer from "@/app/components/landing/Footer";

/**
 * Generate metadata for the page
 */
export const metadata: Metadata = {
  title: {
    template: '%s | Ethix',
    default: 'Ethix | Ethical Consumer Platform',
  },
  description: 'Find ethically-made, sustainable products and their verified impact data all in one place.',
};

/**
 * Root layout component
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize translations for server components
  await initServerTranslations(defaultLocale);
  
  // Get draft mode status
  const { isEnabled: isDraftMode } = await draftMode();

  // We only render the children here and let the locale-specific layout handle the HTML structure
  return children;
}
