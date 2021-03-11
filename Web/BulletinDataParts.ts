import type * as Types from './types';

import { gql } from '@apollo/client';
export type BulletinDataPartsFragment = { __typename?: 'BulletinData', campaign?: Types.Maybe<{ __typename?: 'CampaignData', attribution?: Types.Maybe<string>, id?: Types.Maybe<string>, logo?: Types.Maybe<string>, logoLink?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string> }>, clientTracking?: Types.Maybe<{ __typename?: 'ClientTrackingData', article?: Types.Maybe<Array<Types.Maybe<string>>>, elsewhere?: Types.Maybe<Array<Types.Maybe<string>>>, logo?: Types.Maybe<string> }>, sponsor?: Types.Maybe<{ __typename?: 'CampaignData', attribution?: Types.Maybe<string>, id?: Types.Maybe<string>, logo?: Types.Maybe<string>, logoLink?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string> }> };

export const BulletinDataPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment BulletinDataParts on BulletinData {
  campaign {
    attribution
    id
    logo
    logoLink
    name
    slug
  }
  clientTracking {
    article
    elsewhere
    logo
  }
  sponsor {
    attribution
    id
    logo
    logoLink
    name
    slug
  }
}
    `;