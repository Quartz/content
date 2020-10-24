"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.TagPartsFragmentDoc = client_1.gql `
    fragment TagParts on Tag {
  count
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  tagId
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=TagParts.js.map