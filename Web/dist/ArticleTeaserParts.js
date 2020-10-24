import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { VideoPartsFragmentDoc } from './VideoParts';
export const ArticleTeaserPartsFragmentDoc = /*#__PURE__*/ gql `
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
  id
  kicker
  link
  postId
  title
  trailerVideo {
    ...VideoParts
  }
  video {
    ...VideoParts
  }
}
    ${MediaPartsFragmentDoc}
${VideoPartsFragmentDoc}`;
//# sourceMappingURL=ArticleTeaserParts.js.map