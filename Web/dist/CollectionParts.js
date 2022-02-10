import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { MediaPartsFragmentDoc } from './MediaParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { NugPartsFragmentDoc } from './NugParts';
export const CollectionPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment CollectionParts on Collection {
  id
  collectionId
  title
  dateGmt
  excerpt
  modifiedGmt
  slug
  tags {
    nodes {
      ...TagParts
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
    }
  }
}
    ${TagPartsFragmentDoc}
${MediaPartsFragmentDoc}
${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${NugPartsFragmentDoc}`;
//# sourceMappingURL=CollectionParts.js.map