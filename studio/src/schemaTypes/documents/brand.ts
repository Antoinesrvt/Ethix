import {BillIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters',
      type: 'reference',
      to: [{ type: 'country' }]
    }),
    defineField({
      name: 'sustainabilityRating',
      title: 'Sustainability Rating',
      type: 'number',
      description: 'Rating from 1-10',
      validation: rule => rule.min(1).max(10)
    }),
    defineField({
      name: 'sustainabilityStatement',
      title: 'Sustainability Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sustainabilityInitiatives',
      title: 'Sustainability Initiatives',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Initiative Name',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description'
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}) 