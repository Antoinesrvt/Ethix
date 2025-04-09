import {BasketIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BasketIcon,
  groups: [
    { name: 'basic', title: 'Basic Information' },
    { name: 'environmental', title: 'Environmental Impact' },
    { name: 'social', title: 'Social Impact' },
    { name: 'additional', title: 'Additional Information' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'basic'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (rule) => rule.required(),
      group: 'basic'
    }),
    defineField({
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for accessibility and SEO'
        }
      ],
      group: 'basic'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
      group: 'basic'
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      group: 'basic'
    }),
    defineField({
      name: 'origin',
      title: 'Country of Origin',
      type: 'reference',
      to: [{ type: 'country' }],
      group: 'basic'
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 3,
      group: 'basic'
    }),
    defineField({
      name: 'price',
      title: 'Approximate Price (€)',
      type: 'number',
      group: 'basic'
    }),

    // Environmental Impact
    defineField({
      name: 'environmentalImpact',
      title: 'Environmental Impact',
      type: 'object',
      group: 'environmental',
      fields: [
        defineField({
          name: 'carbonFootprint',
          title: 'Carbon Footprint',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'number',
              description: 'CO₂ equivalent in kg'
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  { title: 'Excellent', value: 'positive' },
                  { title: 'Good', value: 'positive' },
                  { title: 'Average', value: 'neutral' },
                  { title: 'Poor', value: 'negative' },
                  { title: 'Very Poor', value: 'negative' }
                ]
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'waterUsage',
          title: 'Water Usage',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'number',
              description: 'Liters of water'
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  { title: 'Excellent', value: 'positive' },
                  { title: 'Good', value: 'positive' },
                  { title: 'Average', value: 'neutral' },
                  { title: 'Poor', value: 'negative' },
                  { title: 'Very Poor', value: 'negative' }
                ]
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'chemicalsUsed',
          title: 'Chemicals Used',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['None', 'Minimal', 'Moderate', 'Significant', 'Heavy']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  { title: 'Excellent', value: 'positive' },
                  { title: 'Good', value: 'positive' },
                  { title: 'Average', value: 'neutral' },
                  { title: 'Poor', value: 'negative' },
                  { title: 'Very Poor', value: 'negative' }
                ]
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'endOfLife',
          title: 'End of Life',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['Biodegradable', 'Recyclable', 'Partially Recyclable', 'Non-Recyclable', 'Hazardous Waste']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  { title: 'Excellent', value: 'positive' },
                  { title: 'Good', value: 'positive' },
                  { title: 'Average', value: 'neutral' },
                  { title: 'Poor', value: 'negative' },
                  { title: 'Very Poor', value: 'negative' }
                ]
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'resourceUse',
          title: 'Resource Use',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['Renewable', 'Mostly Renewable', 'Mixed', 'Mostly Non-Renewable', 'Non-Renewable']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  { title: 'Excellent', value: 'positive' },
                  { title: 'Good', value: 'positive' },
                  { title: 'Average', value: 'neutral' },
                  { title: 'Poor', value: 'negative' },
                  { title: 'Very Poor', value: 'negative' }
                ]
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'additionalMetrics',
          title: 'Additional Environmental Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Metric Name',
                  type: 'string'
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string'
                },
                {
                  name: 'rating',
                  title: 'Rating',
                  type: 'string',
                  options: {
                    list: ['positive', 'neutral', 'negative']
                  }
                },
                {
                  name: 'percentile',
                  title: 'Percentile',
                  type: 'number',
                  validation: (rule) => rule.min(0).max(100)
                }
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'value'
                }
              }
            }
          ]
        })
      ]
    }),

    // Social Impact
    defineField({
      name: 'socialImpact',
      title: 'Social Impact',
      type: 'object',
      group: 'social',
      fields: [
        defineField({
          name: 'laborConditions',
          title: 'Labor Conditions',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['Fair Trade', 'Good', 'Standard', 'Unknown', 'Concerning']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: ['positive', 'neutral', 'negative']
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'supplyChain',
          title: 'Supply Chain',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['Transparent', 'Mostly Transparent', 'Partially Transparent', 'Limited Transparency', 'Opaque']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: ['positive', 'neutral', 'negative']
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'communityImpact',
          title: 'Community Impact',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              options: {
                list: ['Positive', 'Somewhat Positive', 'Neutral', 'Somewhat Negative', 'Negative']
              }
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: ['positive', 'neutral', 'negative']
              }
            },
            {
              name: 'percentile',
              title: 'Percentile',
              type: 'number',
              description: 'Bar chart fill percentage (0-100)',
              validation: (rule) => rule.min(0).max(100)
            }
          ]
        }),
        defineField({
          name: 'additionalSocialMetrics',
          title: 'Additional Social Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Metric Name',
                  type: 'string'
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string'
                },
                {
                  name: 'rating',
                  title: 'Rating',
                  type: 'string',
                  options: {
                    list: ['positive', 'neutral', 'negative']
                  }
                },
                {
                  name: 'percentile',
                  title: 'Percentile',
                  type: 'number',
                  validation: (rule) => rule.min(0).max(100)
                }
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'value'
                }
              }
            }
          ]
        })
      ]
    }),

    // Additional Information
    defineField({
      name: 'impactSummary',
      title: 'Impact Summary',
      type: 'text',
      rows: 3,
      description: 'Brief summary of the overall impact of this product',
      group: 'additional'
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'certification' }] }],
      group: 'additional'
    }),
    defineField({
      name: 'alternatives',
      title: 'Alternative Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      group: 'additional'
    }),
    defineField({
      name: 'dataSources',
      title: 'Data Sources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Source Name',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description'
            }
          }
        }
      ],
      group: 'additional'
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
      group: 'additional'
    }),

    // SEO & Metadata
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for browser tab and search results'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engine results'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'productImage'
    }
  }
}) 