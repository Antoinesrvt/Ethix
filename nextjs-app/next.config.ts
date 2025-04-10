import type { NextConfig } from 'next';

// Basic Next.js configuration with i18n support
const nextConfig: NextConfig = {
  // Environment variables
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  // Configure React strict mode for development
  reactStrictMode: true,
  
  // Configure images domains for next/image (if needed)
  images: {
    domains: ['cdn.sanity.io'],
  },
};

// Export the configuration
export default nextConfig;
