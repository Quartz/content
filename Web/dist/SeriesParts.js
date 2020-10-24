import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const SeriesPartsFragmentDoc = /*#__PURE__*/ gql `
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
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=SeriesParts.js.map