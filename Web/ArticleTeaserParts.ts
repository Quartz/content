import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import type { VideoPartsFragment } from './VideoParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { VideoPartsFragmentDoc } from './VideoParts';
export type ArticleTeaserPartsFragment = { __typename?: 'Post', dateGmt?: Types.Maybe<string>, id: string, kicker?: Types.Maybe<string>, link?: Types.Maybe<string>, postId: number, title?: Types.Maybe<string>, bulletin?: Types.Maybe<{ __typename?: 'BulletinData', campaign?: Types.Maybe<{ __typename?: 'CampaignData', id?: Types.Maybe<string>, logo?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string> }>, sponsor?: Types.Maybe<{ __typename?: 'CampaignData', attribution?: Types.Maybe<string>, id?: Types.Maybe<string>, slug?: Types.Maybe<string>, name?: Types.Maybe<string> }>, clientTracking?: Types.Maybe<{ __typename?: 'ClientTrackingData', article?: Types.Maybe<Array<Types.Maybe<string>>>, elsewhere?: Types.Maybe<Array<Types.Maybe<string>>>, logo?: Types.Maybe<string> }> }>, editions?: Types.Maybe<{ __typename?: 'PostToEditionConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Edition', name?: Types.Maybe<string>, slug?: Types.Maybe<string> }>>> }>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, trailerVideo?: Types.Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )>, video?: Types.Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )> };

export const ArticleTeaserPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment ArticleTeaserParts on Post {
  bulletin {
    campaign {
      id
      logo
      name
      slug
    }
    sponsor {
      attribution
      id
      slug
      name
    }
    clientTracking {
      article
      elsewhere
      logo
    }
  }
  dateGmt
  editions {
    nodes {
      name
      slug
    }
  }
  featuredImage {
    ...MediaParts
  }
  id
  kicker
  link
  postId
  title
  trailerVideo {
    ...VideoParts
  }
  video {
    ...VideoParts
  }
}
    ${MediaPartsFragmentDoc}
${VideoPartsFragmentDoc}`;