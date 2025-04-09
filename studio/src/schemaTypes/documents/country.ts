import {EarthGlobeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const country = defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Country Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Country Code',
      type: 'string',
      description: 'ISO 3166-1 alpha-2 code (e.g., FR for France)',
      validation: (rule) => rule.required().length(2),
    }),
    defineField({
      name: 'flag',
      title: 'Flag',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'Europe', value: 'europe' },
          { title: 'Asia', value: 'asia' },
          { title: 'Africa', value: 'africa' },
          { title: 'North America', value: 'north-america' },
          { title: 'South America', value: 'south-america' },
          { title: 'Oceania', value: 'oceania' }
        ],
      },
    }),
    defineField({
      name: 'isEU',
      title: 'EU Member',
      type: 'boolean',
      initialValue: false
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'code',
      media: 'flag',
    },
  },
}) 