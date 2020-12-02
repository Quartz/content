"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObsessionPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.ObsessionPartsFragmentDoc = client_1.gql `
    fragment ObsessionParts on Obsession {
  id
  description
  hasEssentials
  headerImage {
    ...MediaParts
  }
  link
  name
  shortDescription
  slug
  subtitle
  featuredImage {
    ...MediaParts
  }
  sponsor {
    name
    campaign {
      id
      logo
      logoLink
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=ObsessionParts.js.map