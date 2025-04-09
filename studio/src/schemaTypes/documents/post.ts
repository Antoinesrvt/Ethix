import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  icon: DocumentTextIcon,
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'meta', title: 'Metadata' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    // Content
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.featuredImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        }
      ],
      group: 'content'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary of the article',
      group: 'content'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: rule => rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true
                  }
                ]
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'post' },
                      { type: 'product' },
                      { type: 'category' }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'code',
          options: {
            withFilename: true
          }
        },
        {
          name: 'callout',
          title: 'Callout',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: ['info', 'tip', 'warning', 'alert']
              },
              initialValue: 'info'
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ],
          preview: {
            select: {
              type: 'type',
              content: 'content'
            },
            prepare({ type, content }) {
              return {
                title: `${type.charAt(0).toUpperCase() + type.slice(1)} Callout`,
                subtitle: content && content[0]?.children
                  ?.filter((child: Record<string, any>) => child._type === 'span')
                  ?.map((span: { text: string }) => span.text)
                  ?.join('') || ''
              }
            }
          }
        },
        {
          name: 'productEmbed',
          title: 'Product Embed',
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }]
            },
            {
              name: 'displayStyle',
              title: 'Display Style',
              type: 'string',
              options: {
                list: ['compact', 'detailed', 'full']
              },
              initialValue: 'compact'
            }
          ],
          preview: {
            select: {
              title: 'product.name',
              style: 'displayStyle'
            },
            prepare({ title, style }) {
              return {
                title: title || 'Product Embed',
                subtitle: `Style: ${style}`
              }
            }
          }
        }
      ],
      group: 'content'
    }),

    // Metadata
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      group: 'meta'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      group: 'meta'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'meta'
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
      group: 'meta'
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      group: 'meta'
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO & Social Sharing',
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
        },
        {
          name: 'socialImage',
          title: 'Social Sharing Image',
          type: 'image',
          description: 'Image for social media sharing (Facebook, Twitter, etc.)',
          options: {
            hotspot: true
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      authorName: 'author.name',
      date: 'publishedAt',
      media: 'featuredImage'
    },
    prepare({title, media, authorName, date}) {
      const dateFormatted = date 
        ? format(parseISO(date), 'LLL d, yyyy')
        : 'Unpublished';
      
      return {
        title,
        subtitle: `By ${authorName || 'No author'} | ${dateFormatted}`,
        media
      }
    }
  }
})
