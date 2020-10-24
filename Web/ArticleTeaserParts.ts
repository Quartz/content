import * as Types from './types';

import { MediaPartsFragment } from './MediaParts';
import { VideoPartsFragment } from './VideoParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { VideoPartsFragmentDoc } from './VideoParts';
export type ArticleTeaserPartsFragment = (
  { __typename?: 'Post' }
  & Pick<Types.Post, 'dateGmt' | 'id' | 'kicker' | 'link' | 'postId' | 'title'>
  & { bulletin?: Types.Maybe<(
    { __typename?: 'BulletinData' }
    & { campaign?: Types.Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<Types.CampaignData, 'id' | 'logo' | 'name' | 'slug'>
    )>, sponsor?: Types.Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<Types.CampaignData, 'attribution' | 'id' | 'slug' | 'name'>
    )>, clientTracking?: Types.Maybe<(
      { __typename?: 'ClientTrackingData' }
      & Pick<Types.ClientTrackingData, 'article' | 'elsewhere' | 'logo'>
    )> }
  )>, editions?: Types.Maybe<(
    { __typename?: 'PostToEditionConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Edition' }
      & Pick<Types.Edition, 'name' | 'slug'>
    )>>> }
  )>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, trailerVideo?: Types.Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )>, video?: Types.Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )> }
);

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