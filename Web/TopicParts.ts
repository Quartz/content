import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type TopicPartsFragment = (
  { __typename?: 'Topic' }
  & Pick<Types.Topic, 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'topicId'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export const TopicPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment TopicParts on Topic {
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  topicId
}
    ${MediaPartsFragmentDoc}`;