import * as Types from './types';

import { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type TagPartsFragment = (
  { __typename?: 'Tag' }
  & Pick<Types.Tag, 'count' | 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'tagId'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

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