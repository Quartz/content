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
  link
  segment
  socialImage {
    ...MediaParts
  }
  seoTitle
  socialDescription
  subject
  title
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map