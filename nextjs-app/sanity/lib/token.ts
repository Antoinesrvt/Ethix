// Remove server-only import so this can be used in client components
// import "server-only";

export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (typeof window === 'undefined' && !token) {
  throw new Error("Missing SANITY_API_READ_TOKEN or NEXT_PUBLIC_SANITY_API_READ_TOKEN");
}
