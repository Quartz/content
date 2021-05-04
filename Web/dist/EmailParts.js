import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { MediaPartsFragmentDoc } from './MediaParts';
export const EmailPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment EmailParts on Email {
  id
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
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
  socialTitle
  subject
  title
}
    ${AuthorPartsFragmentDoc}
${MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map