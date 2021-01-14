import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const EmailListPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment EmailListParts on EmailList {
  id
  description
  featuredImage {
    ...MediaParts
  }
  isPrivate: private
  link
  listId
  name
  slug
  summary
  subtitle
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailListParts.js.map