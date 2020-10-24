import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const TopicPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment TopicParts on Topic {
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  topicId
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=TopicParts.js.map