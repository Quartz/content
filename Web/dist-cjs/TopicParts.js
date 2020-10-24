"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.TopicPartsFragmentDoc = client_1.gql `
    fragment TopicParts on Topic {
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  topicId
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=TopicParts.js.map