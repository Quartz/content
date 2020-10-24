import { gql } from '@apollo/client';
import { BlockPartsFragmentDoc } from './BlockParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { MediaPartsFragmentDoc } from './MediaParts';
export const NugPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment NugParts on Nug {
  id
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
    }
  }
  dateGmt
  emailLists {
    nodes {
      emailListId
      listId
      name
    }
  }
  link
  modifiedGmt
  nugId
  slug
  title
}
    ${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${MediaPartsFragmentDoc}`;
//# sourceMappingURL=NugParts.js.map