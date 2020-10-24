import { gql } from '@apollo/client';
export const VideoPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment VideoParts on VideoData {
  id
  duration
  episode
  playlistId
  season
  type
}
    `;
//# sourceMappingURL=VideoParts.js.map