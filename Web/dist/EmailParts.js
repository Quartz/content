import { gql } from '@apollo/client';
import { BlockPartsFragmentDoc } from './BlockParts';
import { MediaPartsFragmentDoc } from './MediaParts';
export const EmailPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment EmailParts on Email {
  id
  blocks {
    ...BlockParts
  }
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  segment
  socialImage {
    ...MediaParts
  }
  seoTitle
  socialDescription
  subject
  title
}
    ${BlockPartsFragmentDoc}
${MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map