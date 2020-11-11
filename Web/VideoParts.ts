import type * as Types from './types';

import { gql } from '@apollo/client';
export type VideoPartsFragment = { __typename?: 'VideoData', id?: Types.Maybe<string>, duration?: Types.Maybe<number>, episode?: Types.Maybe<number>, playlistId?: Types.Maybe<string>, season?: Types.Maybe<number>, type?: Types.Maybe<string> };

export const VideoPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment VideoParts on VideoData {
  id
  duration
  episode
  playlistId
  season
  type
}
    `;