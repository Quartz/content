import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const ShowPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment ShowParts on Show {
  colors
  count
  description
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
  slug
  socialImage {
    ...MediaParts
  }
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=ShowParts.js.map