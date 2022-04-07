import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { NugPartsFragmentDoc } from './NugParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export const CollectionPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment CollectionParts on Collection {
  id
  collectionId
  title
  dateGmt
  excerpt
  modifiedGmt
  slug
  tags(where: {orderby: COUNT}, last: 10) {
    nodes {
      slug
    }
  }
  featuredImage {
    ...MediaParts
  }
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
      ... on Nug {
        ...NugParts
      }
      ... on Nug {
        ...NugParts
      }
      ... on Promotion {
        ...PromotionParts
      }
    }
  }
}
    ${MediaPartsFragmentDoc}
${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${NugPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;
//# sourceMappingURL=CollectionParts.js.map