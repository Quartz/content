import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const ObsessionPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment ObsessionParts on Obsession {
  id
  description
  hasEssentials
  headerImage {
    ...MediaParts
  }
  link
  name
  shortDescription
  slug
  subtitle
  featuredImage {
    ...MediaParts
  }
  sponsor {
    name
    campaign {
      id
      logo
      logoLink
    }
  }
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=ObsessionParts.js.map