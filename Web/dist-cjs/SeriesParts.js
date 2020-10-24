"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.SeriesPartsFragmentDoc = client_1.gql `
    fragment SeriesParts on Series {
  colors
  count
  description
  emailListId
  ended
  featuredImage {
    ...MediaParts
  }
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
  headerVideos {
    size
    mp4 {
      ...MediaParts
    }
    webm {
      ...MediaParts
    }
    poster {
      ...MediaParts
    }
  }
  id
  link
  name
  postOrder
  shortDescription
  showToc
  slug
  socialImage {
    ...MediaParts
  }
  socialTitle
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=SeriesParts.js.map