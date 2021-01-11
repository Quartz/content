"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NugPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const BlockParts_1 = require("./BlockParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const MediaParts_1 = require("./MediaParts");
exports.NugPartsFragmentDoc = client_1.gql `
    fragment NugParts on Nug {
  id
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
    }
  }
  dateGmt
  emailLists {
    nodes {
      emailListId
      listId
      name
    }
  }
  link
  modifiedGmt
  nugId
  slug
  title
  tags {
    nodes {
      id
      name
      slug
    }
  }
  topics {
    nodes {
      id
      name
      slug
    }
  }
}
    ${BlockParts_1.BlockPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=NugParts.js.map