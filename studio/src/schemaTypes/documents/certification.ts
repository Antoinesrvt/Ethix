import {CheckmarkCircleIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Certification Name',
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
      title: 'Certification Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Environmental', value: 'environmental' },
          { title: 'Social', value: 'social' },
          { title: 'Quality', value: 'quality' },
          { title: 'Health & Safety', value: 'health-safety' },
          { title: 'Other', value: 'other' }
        ],
      },
    }),
    defineField({
      name: 'credibility',
      title: 'Credibility Rating',
      type: 'number',
      description: 'Rating from 1-10',
      validation: rule => rule.min(1).max(10)
    }),
    defineField({
      name: 'criteria',
      title: 'Certification Criteria',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Criterion Name',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
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
      subtitle: 'category',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}` : '',
        media
      }
    }
  },
}) 