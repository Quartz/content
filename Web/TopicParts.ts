import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type TopicPartsFragment = { __typename?: 'Topic', description?: Types.Maybe<string>, id: string, link?: Types.Maybe<string>, name?: Types.Maybe<string>, shortDescription?: Types.Maybe<string>, slug?: Types.Maybe<string>, topicId?: Types.Maybe<number>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

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