import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type TagPartsFragment = { __typename?: 'Tag', count?: Types.Maybe<number>, description?: Types.Maybe<string>, id: string, link?: Types.Maybe<string>, name?: Types.Maybe<string>, shortDescription?: Types.Maybe<string>, slug?: Types.Maybe<string>, tagId?: Types.Maybe<number>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const TagPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment TagParts on Tag {
  count
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  tagId
}
    ${MediaPartsFragmentDoc}`;