"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTeaserPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
const AuthorParts_1 = require("./AuthorParts");
exports.EmailTeaserPartsFragmentDoc = client_1.gql `
    fragment EmailTeaserParts on Email {
  id
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  link
  slug
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
    ${MediaParts_1.MediaPartsFragmentDoc}
${AuthorParts_1.AuthorPartsFragmentDoc}`;
//# sourceMappingURL=EmailTeaserParts.js.map