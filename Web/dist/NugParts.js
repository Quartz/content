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
      slug
      listId
      name
    }
  }
  link
  modifiedGmt
  nugId
  slug
  title
  tags {
    nodes {
      id
      name
      slug
    }
  }
  topics {
    nodes {
      id
      name
      slug
    }
  }
}
    ${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${MediaPartsFragmentDoc}`;
//# sourceMappingURL=NugParts.js.map