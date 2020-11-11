import type * as Types from './types';

import { gql } from '@apollo/client';
export type MediaPartsFragment = { __typename?: 'MediaItem', altText?: Types.Maybe<string>, caption?: Types.Maybe<string>, credit?: Types.Maybe<string>, id: string, sourceUrl?: Types.Maybe<string>, title?: Types.Maybe<string>, mediaDetails?: Types.Maybe<{ __typename?: 'MediaDetails', height?: Types.Maybe<number>, width?: Types.Maybe<number> }> };

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