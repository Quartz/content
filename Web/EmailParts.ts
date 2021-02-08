import type * as Types from './types';

import type { BlockPartsFragment } from './BlockParts';
import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { BlockPartsFragmentDoc } from './BlockParts';
import { MediaPartsFragmentDoc } from './MediaParts';
export type EmailPartsFragment = { __typename?: 'Email', id: string, dateGmt?: Types.Maybe<string>, emailId: number, segment?: Types.Maybe<string>, seoTitle?: Types.Maybe<string>, socialDescription?: Types.Maybe<string>, subject?: Types.Maybe<string>, title?: Types.Maybe<string>, blocks?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Block' }
    & BlockPartsFragment
  )>>>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const EmailPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailParts on Email {
  id
  blocks {
    ...BlockParts
  }
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  segment
  socialImage {
    ...MediaParts
  }
  seoTitle
  socialDescription
  subject
  title
}
    ${BlockPartsFragmentDoc}
${MediaPartsFragmentDoc}`;