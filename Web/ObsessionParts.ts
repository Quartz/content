import * as Types from './types';

import { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type ObsessionPartsFragment = (
  { __typename?: 'Obsession' }
  & Pick<Types.Obsession, 'id' | 'description' | 'link' | 'name' | 'shortDescription' | 'slug' | 'subtitle'>
  & { featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, sponsor?: Types.Maybe<(
    { __typename?: 'SponsorData' }
    & Pick<Types.SponsorData, 'name'>
    & { campaign?: Types.Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<Types.CampaignData, 'id' | 'logo' | 'logoLink'>
    )> }
  )> }
);

export const ObsessionPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment ObsessionParts on Obsession {
  id
  description
  link
  name
  shortDescription
  slug
  subtitle
  featuredImage {
    ...MediaParts
  }
  sponsor {
    name
    campaign {
      id
      logo
      logoLink
    }
  }
}
    ${MediaPartsFragmentDoc}`;