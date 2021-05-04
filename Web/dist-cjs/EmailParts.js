"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const AuthorParts_1 = require("./AuthorParts");
const MediaParts_1 = require("./MediaParts");
exports.EmailPartsFragmentDoc = client_1.gql `
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
    ${AuthorParts_1.AuthorPartsFragmentDoc}
${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map