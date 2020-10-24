import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type PromotionPartsFragment = (
  { __typename?: 'Promotion' }
  & Pick<Types.Promotion, 'content' | 'dateGmt' | 'destination' | 'id' | 'link' | 'modified' | 'title'>
  & { description: Types.Promotion['excerpt'] }
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export const PromotionPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment PromotionParts on Promotion {
  content
  dateGmt
  description: excerpt(format: RAW)
  destination
  featuredImage {
    ...MediaParts
  }
  id
  link
  modified
  title
}
    ${MediaPartsFragmentDoc}`;