import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type GuidePartsFragment = (
  { __typename?: 'Guide' }
  & Pick<Types.Guide, 'id' | 'guideId' | 'link' | 'count' | 'description' | 'shortDescription' | 'name' | 'slug' | 'socialTitle' | 'colors'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'HeaderImages' }
    & Pick<Types.HeaderImages, 'layer' | 'size'>
    & { image?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>> }
);

export const GuidePartsFragmentDoc = /*#__PURE__*/ gql`
    fragment GuideParts on Guide {
  id
  guideId
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
    ${MediaPartsFragmentDoc}`;