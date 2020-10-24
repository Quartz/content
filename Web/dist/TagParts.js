import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const TagPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment TagParts on Tag {
  count
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  tagId
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=TagParts.js.map