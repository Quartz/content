import type * as Types from './types';

import { gql } from '@apollo/client';
export type VideoPartsFragment = (
  { __typename?: 'VideoData' }
  & Pick<Types.VideoData, 'id' | 'duration' | 'episode' | 'playlistId' | 'season' | 'type'>
);

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