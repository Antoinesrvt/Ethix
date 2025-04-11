import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/lib/api";
import { token } from "./token";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
  perspective: "published",
  token, // Required if you have a private dataset
});

// Create a client for authenticated requests
export const previewClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  perspective: 'published',
  token,
});

// Helper function for choosing the right client
export const getClient = (usePreview = false) => 
  usePreview ? previewClient : client;
