import { gql } from '@apollo/client';
export const MediaPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment MediaParts on MediaItem {
  altText
  caption
  credit
  id
  mediaDetails {
    height
    width
  }
  sourceUrl
  title
}
    `;
//# sourceMappingURL=MediaParts.js.map