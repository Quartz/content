import type * as Types from './types';

import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import type { BlockPartsFragment } from './BlockParts';
import type { PromotionPartsFragment } from './PromotionParts';
import { gql } from '@apollo/client';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export type EmailPartsFragment = (
  { __typename?: 'Email', disablePaywall?: Types.Maybe<boolean>, sendgridID?: Types.Maybe<Array<Types.Maybe<string>>>, blocks?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Block', connections?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | (
      { __typename?: 'Promotion' }
      & PromotionPartsFragment
    ) | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>> }
    & BlockPartsFragment
  )>>>, emailLogoAd?: Types.Maybe<{ __typename?: 'EmailLogoAd', alt?: Types.Maybe<string>, src?: Types.Maybe<string>, url?: Types.Maybe<string> }> }
  & EmailTeaserPartsFragment
);

export const EmailPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailParts on Email {
  ...EmailTeaserParts
  disablePaywall
  blocks {
    ...BlockParts
    connections {
      ... on Promotion {
        ...PromotionParts
      }
    }
  }
  sendgridID
  emailLogoAd {
    alt
    src
    url
  }
}
    ${EmailTeaserPartsFragmentDoc}
${BlockPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;