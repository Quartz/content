"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailListPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.EmailListPartsFragmentDoc = client_1.gql `
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
  colors
  summary
  subtitle
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=EmailListParts.js.map