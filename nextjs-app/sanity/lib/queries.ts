import { defineQuery } from "next-sanity";

const localizedFields = `
  "localizedContent": {
    "en": {
      "title": title,
      "description": description
    },
    "fr": localizedContent.fr
  }
`;

export const settingsQuery = defineQuery(`*[_type == "settings"][0] {
  title,
  description,
  "ogImage": {
    "url": ogImage.asset->url,
    "alt": ogImage.alt
  },
  "localizedContent": {
    "en": {
      "title": title,
      "description": description
    },
    "fr": localizedContent.fr
  }
}`);

const postFields = /* groq */ `
  _id,
  title,
  excerpt,
  date,
  content,
  'slug': slug.current,
  'author': author->{
    name,
    'image': image.asset->url
  },
  'featuredImage': {
    'url': featuredImage.asset->url,
    'alt': featuredImage.alt
  },
  "localizedContent": {
    "en": {
      "title": title,
      "excerpt": excerpt,
      "content": content
    },
    "fr": localizedContent.fr
  }
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    _id,
    _type,
    name,
    heading,
    subheading,
    slug,
    pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
        "localizedContent": {
          "en": {
            "heading": heading,
            "subheading": subheading
          },
          "fr": localizedContent.fr
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        },
        "localizedContent": {
          "en": {
            "title": title,
            "content": content
          },
          "fr": localizedContent.fr
        }
      },
    },
    "localizedContent": {
      "en": {
        "name": name,
        "heading": heading,
        "subheading": subheading
      },
      "fr": localizedContent.fr
    }
  }
`);

export const sitemapData = defineQuery(`
  {
    "pages": *[_type == 'page'] {
      'slug': slug.current
    },
    "posts": *[_type == 'post'] {
      'slug': slug.current
    }
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == 'post'] | order(date desc) [0...2] {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == 'post' && _id != $skip] | order(date desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == 'post' && slug.current == $slug][0] {
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == 'post'] {
    'params': {
      'slug': slug.current
    }
  }
`);

export const pagesSlugs = defineQuery(`
  *[_type == 'page'] {
    'params': {
      'slug': slug.current
    }
  }
`);

// Metric fields for reuse
const metricFields = /* groq */ `
  _id,
  name,
  "slug": slug.current,
  description,
  icon,
  "category": category->{
    name,
    "slug": slug.current,
    icon,
    color
  },
  unit,
  importance,
  what,
  why,
  howWeMeasure,
  industryStats,
  consumerTips,
  impactScale,
  "benchmarks": benchmarks[]{
    ...,
  },
  "relatedMetrics": relatedMetrics[]->{ 
    name, 
    "slug": slug.current,
    icon
  }
`;

export const allMetricsSummaryQuery = defineQuery(`
  *[_type == "metric" && defined(slug.current)] {
    _id,
    name,
    "slug": slug.current,
    description,
    icon,
    "category": category->{
      name,
      color
    }
  } | order(importance desc)
`);

export const metricQuery = defineQuery(`
  *[_type == "metric" && slug.current == $slug][0] {
    ${metricFields}
  }
`);

export const metricCategoriesQuery = defineQuery(`
  *[_type == "metricCategory" && defined(slug.current)] {
    _id,
    name,
    "slug": slug.current,
    description,
    icon,
    color
  } | order(name asc)
`);

export const metricsPageQuery = defineQuery(`
  *[_type == "metricsPage"][0] {
    _id,
    title,
    introduction,
    hero,
    "sections": sections[]{
      ...,
      "metrics": metrics[]-> {
        _id,
        name,
        "slug": slug.current,
        description,
        icon,
        "category": category->{
          name,
          color
        }
      }
    }
  }
`);

export const metricPagesSlugs = defineQuery(`
  *[_type == "metric" && defined(slug.current)]
  {"slug": slug.current}
`);

// Featured metrics for the landing page
export const featuredMetricsQuery = defineQuery(`
  *[_type == "metric"] | order(importance desc) [0...4] {
    _id,
    name,
    description,
    "slug": slug.current,
    "category": category-> {
      name,
      icon,
      color
    },
    unit,
    icon,
    "benchmarks": benchmarks[] {
      label,
      value,
      percentile,
      color
    }
  }
`);
