"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.EmailPartsFragmentDoc = client_1.gql `
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
  seoTitle
  socialDescription
  subject
  title
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map