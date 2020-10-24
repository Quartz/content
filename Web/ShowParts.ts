import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type ShowPartsFragment = (
  { __typename?: 'Show' }
  & Pick<Types.Show, 'colors' | 'count' | 'description' | 'id' | 'link' | 'name' | 'postOrder' | 'shortDescription' | 'slug'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'ShowHeaderImages' }
    & Pick<Types.ShowHeaderImages, 'layer' | 'size'>
    & { image?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, headerVideos?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'ShowHeaderVideos' }
    & Pick<Types.ShowHeaderVideos, 'size'>
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

export const ShowPartsFragmentDoc = /*#__PURE__*/ gql`
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