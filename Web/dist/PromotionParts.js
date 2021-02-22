import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const PromotionPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment PromotionParts on Promotion {
  content
  dateGmt
  description: excerpt
  destination
  featuredImage {
    ...MediaParts
  }
  id
  link
  modified
  title
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=PromotionParts.js.map