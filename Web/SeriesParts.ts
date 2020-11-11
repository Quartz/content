import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type SeriesPartsFragment = { __typename?: 'Series', colors?: Types.Maybe<Array<Types.Maybe<string>>>, count?: Types.Maybe<number>, description?: Types.Maybe<string>, emailListId?: Types.Maybe<number>, ended?: Types.Maybe<boolean>, id: string, link?: Types.Maybe<string>, name?: Types.Maybe<string>, postOrder?: Types.Maybe<Array<Types.Maybe<number>>>, shortDescription?: Types.Maybe<string>, showToc?: Types.Maybe<boolean>, slug?: Types.Maybe<string>, socialTitle?: Types.Maybe<string>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'HeaderImages', layer?: Types.Maybe<number>, size?: Types.Maybe<string>, image?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }>>>, headerVideos?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'HeaderVideos', size?: Types.Maybe<string>, mp4?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, webm?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, poster?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }>>>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const SeriesPartsFragmentDoc = /*#__PURE__*/ gql`
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