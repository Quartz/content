import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type EmailPartsFragment = { __typename?: 'Email', id: string, dateGmt?: Types.Maybe<string>, emailId: number, segment?: Types.Maybe<string>, subject?: Types.Maybe<string>, title?: Types.Maybe<string>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const EmailPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailParts on Email {
  id
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  segment
  socialImage {
    ...MediaParts
  }
  subject
  title
}
    ${MediaPartsFragmentDoc}`;