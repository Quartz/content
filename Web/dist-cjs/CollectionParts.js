"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
const BlockParts_1 = require("./BlockParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const NugParts_1 = require("./NugParts");
const PromotionParts_1 = require("./PromotionParts");
exports.CollectionPartsFragmentDoc = client_1.gql `
    fragment CollectionParts on Collection {
  id
  collectionId
  title
  dateGmt
  excerpt
  modifiedGmt
  slug
  tags(where: {orderby: COUNT}, last: 10) {
    nodes {
      slug
    }
  }
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
      ... on Nug {
        ...NugParts
      }
      ... on Promotion {
        ...PromotionParts
      }
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}
${BlockParts_1.BlockPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${NugParts_1.NugPartsFragmentDoc}
${PromotionParts_1.PromotionPartsFragmentDoc}`;
//# sourceMappingURL=CollectionParts.js.map