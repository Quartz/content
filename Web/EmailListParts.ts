import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export type EmailListPartsFragment = { __typename?: 'EmailList', id: string, description?: Types.Maybe<string>, link?: Types.Maybe<string>, listId?: Types.Maybe<number>, name?: Types.Maybe<string>, slug?: Types.Maybe<string>, colors?: Types.Maybe<Array<Types.Maybe<string>>>, summary?: Types.Maybe<string>, subtitle?: Types.Maybe<string>, isPrivate?: Types.Maybe<boolean>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const EmailListPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailListParts on EmailList {
  id
  description
  featuredImage {
    ...MediaParts
  }
  isPrivate: private
  link
  listId
  name
  slug
  colors
  summary
  subtitle
}
    ${MediaPartsFragmentDoc}`;