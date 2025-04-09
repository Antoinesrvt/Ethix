import {person} from './documents/person'
import {author} from './documents/author'
import {page} from './documents/page'
import {post} from './documents/post'
import {product} from './documents/product'
import {category} from './documents/category'
import {brand} from './documents/brand'
import {country} from './documents/country'
import {certification} from './documents/certification'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  author,
  product,
  category,
  brand,
  country,
  certification,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
