"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeCollectionPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
const BlockParts_1 = require("./BlockParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const NugParts_1 = require("./NugParts");
exports.HomeCollectionPartsFragmentDoc = client_1.gql `
    fragment HomeCollectionParts on Collection {
  id
  title
  featuredImage {
    ...MediaParts
  }
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
      ... on Nug {
        ...NugParts
      }
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}
${BlockParts_1.BlockPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${NugParts_1.NugPartsFragmentDoc}`;
//# sourceMappingURL=HomeCollectionParts.js.map