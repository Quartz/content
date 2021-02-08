"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const BlockParts_1 = require("./BlockParts");
const MediaParts_1 = require("./MediaParts");
exports.EmailPartsFragmentDoc = client_1.gql `
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
    ${BlockParts_1.BlockPartsFragmentDoc}
${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map