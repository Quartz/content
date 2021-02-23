"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.MediaPartsFragmentDoc = client_1.gql `
    fragment MediaParts on MediaItem {
  altText
  caption
  credit
  id
  mediaDetails {
    height
    width
  }
  mediaItemUrl
  sourceUrl
  title
}
    `;
//# sourceMappingURL=MediaParts.js.map