import { defineQuery } from "next-sanity";

// Query for all certifications
export const allCertificationsQuery = defineQuery(`
  *[_type == "certification"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    website,
    category,
    credibility,
    "logo": logo {
      asset->{
        _id,
        url
      },
      alt
    },
    "localizedContent": {
      "en": localizedContent.en,
      "fr": localizedContent.fr
    }
  }
`);

// Query for a single certification by slug
export const certificationBySlugQuery = defineQuery(`
  *[_type == "certification" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    website,
    category,
    credibility,
    "logo": logo {
      asset->{
        _id,
        url
      },
      alt
    },
    "localizedContent": {
      "en": localizedContent.en,
      "fr": localizedContent.fr
    },
    "criteria": criteria[] {
      name,
      description,
      "localizedContent": {
        "en": localizedContent.en,
        "fr": localizedContent.fr
      }
    }
  }
`);

// Query for certifications by category
export const certificationsByCategoryQuery = defineQuery(`
  *[_type == "certification" && category == $category] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    website,
    category,
    credibility,
    "logo": logo {
      asset->{
        _id,
        url
      },
      alt
    },
    "localizedContent": {
      "en": localizedContent.en,
      "fr": localizedContent.fr
    }
  }
`); 