"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidePartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.GuidePartsFragmentDoc = client_1.gql `
    fragment GuideParts on Guide {
  id
  guideId
  hasEssentials
  link
  count
  description
  shortDescription
  name
  slug
  featuredImage {
    ...MediaParts
  }
  socialImage {
    ...MediaParts
  }
  socialTitle
  colors
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=GuideParts.js.map