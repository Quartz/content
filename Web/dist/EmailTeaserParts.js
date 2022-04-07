import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
export const EmailTeaserPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment EmailTeaserParts on Email {
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
  socialTitle
  subject
  title
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
}
    ${MediaPartsFragmentDoc}
${AuthorPartsFragmentDoc}`;
//# sourceMappingURL=EmailTeaserParts.js.map