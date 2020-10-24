import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type SeriesPartsFragment = (
  { __typename?: 'Series' }
  & Pick<Types.Series, 'colors' | 'count' | 'description' | 'emailListId' | 'ended' | 'id' | 'link' | 'name' | 'postOrder' | 'shortDescription' | 'showToc' | 'slug' | 'socialTitle'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'HeaderImages' }
    & Pick<Types.HeaderImages, 'layer' | 'size'>
    & { image?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, headerVideos?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'HeaderVideos' }
    & Pick<Types.HeaderVideos, 'size'>
    & { mp4?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, webm?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, poster?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

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