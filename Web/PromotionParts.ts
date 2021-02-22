import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type PromotionPartsFragment = { __typename?: 'Promotion', content?: Types.Maybe<string>, dateGmt?: Types.Maybe<string>, destination?: Types.Maybe<string>, id: string, link?: Types.Maybe<string>, modified?: Types.Maybe<string>, title?: Types.Maybe<string>, description?: Types.Maybe<string>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const PromotionPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment PromotionParts on Promotion {
  content
  dateGmt
  description: excerpt
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