import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type BulletinPartsFragment = (
  { __typename?: 'Bulletin' }
  & Pick<Types.Bulletin, 'link' | 'title' | 'dateGmt'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, bulletin?: Types.Maybe<(
    { __typename?: 'BulletinData' }
    & { sponsor?: Types.Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<Types.CampaignData, 'name'>
    )>, campaign?: Types.Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<Types.CampaignData, 'id'>
    )>, clientTracking?: Types.Maybe<(
      { __typename?: 'ClientTrackingData' }
      & Pick<Types.ClientTrackingData, 'article' | 'elsewhere'>
    )> }
  )> }
);

export const BulletinPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment BulletinParts on Bulletin {
  link
  title
  dateGmt
  featuredImage {
    ...MediaParts
  }
  bulletin {
    sponsor {
      name
    }
    campaign {
      id
    }
    clientTracking {
      article
      elsewhere
    }
  }
}
    ${MediaPartsFragmentDoc}`;