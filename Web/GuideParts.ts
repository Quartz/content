import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type GuidePartsFragment = { __typename?: 'Guide', id: string, guideId?: Types.Maybe<number>, link?: Types.Maybe<string>, count?: Types.Maybe<number>, description?: Types.Maybe<string>, shortDescription?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string>, socialTitle?: Types.Maybe<string>, colors?: Types.Maybe<Array<Types.Maybe<string>>>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'HeaderImages', layer?: Types.Maybe<number>, size?: Types.Maybe<string>, image?: Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }>>> };

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