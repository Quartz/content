import type * as Types from './types';

import { gql } from '@apollo/client';
export type MediaPartsFragment = (
  { __typename?: 'MediaItem' }
  & Pick<Types.MediaItem, 'altText' | 'caption' | 'credit' | 'id' | 'sourceUrl' | 'title'>
  & { mediaDetails?: Types.Maybe<(
    { __typename?: 'MediaDetails' }
    & Pick<Types.MediaDetails, 'height' | 'width'>
  )> }
);

export const MediaPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment MediaParts on MediaItem {
  altText
  caption
  credit
  id
  mediaDetails {
    height
    width
  }
  sourceUrl
  title
}
    `;