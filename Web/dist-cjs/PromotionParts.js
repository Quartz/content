"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.PromotionPartsFragmentDoc = client_1.gql `
    fragment PromotionParts on Promotion {
  content
  dateGmt
  description: excerpt
  destination
  featuredImage {
    ...MediaParts
  }
  id
  link
  modified
  title
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=PromotionParts.js.map