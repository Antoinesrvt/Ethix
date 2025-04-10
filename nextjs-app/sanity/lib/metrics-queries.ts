import { defineQuery } from "next-sanity";

// Query for the main metrics page
export const metricsPageQuery = defineQuery(`
  *[_type == "metricsPage"][0] {
    title,
    description,
    introduction,
    "featuredMetrics": featuredMetrics[]-> {
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
    },
    "sections": sections[] {
      title,
      description,
      layout,
      backgroundColor,
      "metrics": metrics[]-> {
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
    },
    metaTitle,
    metaDescription
  }
`);

// Query for a single metric by slug
export const metricBySlugQuery = defineQuery(`
  *[_type == "metric" && slug.current == $slug][0] {
    _id,
    name,
    description,
    "slug": slug.current,
    "category": category-> {
      name,
      icon,
      color,
      "slug": slug.current
    },
    unit,
    icon,
    importance,
    detailedDescription,
    methodology,
    impactExplanation,
    dataSource,
    "benchmarks": benchmarks[] {
      label,
      value,
      percentile,
      color
    },
    industryAverage,
    bestPractice,
    "relatedMetrics": relatedMetrics[]-> {
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
      icon
    },
    "relatedContent": relatedContent[]-> {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "featuredImage": featuredImage
    }
  }
`);

// Query for all metric categories
export const metricCategoriesQuery = defineQuery(`
  *[_type == "metricCategory"] | order(name asc) {
    _id,
    name,
    description,
    "slug": slug.current,
    icon,
    color,
    "metricsCount": count(*[_type == "metric" && references(^._id)])
  }
`);

// Query for featured metrics (for use on the landing page)
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

// Query for all metrics
export const allMetricsQuery = defineQuery(`
  *[_type == "metric"] | order(name asc) {
    _id,
    name,
    description,
    "slug": slug.current,
    "category": category-> {
      name,
      icon,
      color,
      "slug": slug.current
    },
    unit,
    icon,
    importance
  }
`);

// Query for metrics by category
export const metricsByCategoryQuery = defineQuery(`
  *[_type == "metric" && category._ref == $categoryId] | order(name asc) {
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