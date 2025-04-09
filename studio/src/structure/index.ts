import {CogIcon, UserIcon, TagIcon, BasketIcon, DocumentTextIcon, EarthGlobeIcon, BillIcon, CheckmarkCircleIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Editorial Content
      S.listItem()
        .title('Editorial')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Editorial Content')
            .items([
              S.listItem()
                .title('Blog Posts')
                .icon(DocumentTextIcon)
                .schemaType('post')
                .child(S.documentTypeList('post')),
              S.listItem()
                .title('Authors')
                .icon(UserIcon)
                .schemaType('author')
                .child(S.documentTypeList('author')),
              S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(S.documentTypeList('page')),
            ]),
        ),

      // Products & Catalog
      S.listItem()
        .title('Products & Catalog')
        .icon(BasketIcon)
        .child(
          S.list()
            .title('Products & Catalog')
            .items([
              S.listItem()
                .title('Products')
                .icon(BasketIcon)
                .schemaType('product')
                .child(S.documentTypeList('product')),
              S.listItem()
                .title('Categories')
                .icon(TagIcon)
                .schemaType('category')
                .child(S.documentTypeList('category')),
              S.listItem()
                .title('Brands')
                .icon(BillIcon)
                .schemaType('brand')
                .child(S.documentTypeList('brand')),
            ]),
        ),

      // Reference Data
      S.listItem()
        .title('Reference Data')
        .child(
          S.list()
            .title('Reference Data')
            .items([
              S.listItem()
                .title('Countries')
                .icon(EarthGlobeIcon)
                .schemaType('country')
                .child(S.documentTypeList('country')),
              S.listItem()
                .title('Certifications')
                .icon(CheckmarkCircleIcon)
                .schemaType('certification')
                .child(S.documentTypeList('certification')),
              S.listItem()
                .title('People')
                .icon(UserIcon)
                .schemaType('person')
                .child(S.documentTypeList('person')),
            ]),
        ),

      // Settings
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('siteSettings')),
    ])
