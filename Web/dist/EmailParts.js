import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const EmailPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment EmailParts on Email {
  id
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  segment
  socialImage {
    ...MediaParts
  }
  subject
  title
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map