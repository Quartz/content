"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleTeaserPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
const VideoParts_1 = require("./VideoParts");
exports.ArticleTeaserPartsFragmentDoc = client_1.gql `
    fragment ArticleTeaserParts on Post {
  bulletin {
    campaign {
      id
      logo
      name
      slug
    }
    sponsor {
      attribution
      id
      slug
      name
    }
    clientTracking {
      article
      elsewhere
      logo
    }
  }
  dateGmt
  editions {
    nodes {
      name
      slug
    }
  }
  featuredImage {
    ...MediaParts
  }
  guides {
    nodes {
      name
    }
  }
  id
  kicker
  link
  postId
  serieses {
    nodes {
      name
    }
  }
  title
  trailerVideo {
    ...VideoParts
  }
  video {
    ...VideoParts
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}
${VideoParts_1.VideoPartsFragmentDoc}`;
//# sourceMappingURL=ArticleTeaserParts.js.map