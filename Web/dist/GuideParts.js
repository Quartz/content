import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const GuidePartsFragmentDoc = /*#__PURE__*/ gql `
    fragment GuideParts on Guide {
  id
  guideId
  link
  count
  description
  shortDescription
  name
  slug
  featuredImage {
    ...MediaParts
  }
  socialImage {
    ...MediaParts
  }
  socialTitle
  colors
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=GuideParts.js.map