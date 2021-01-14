import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { PromotionPartsFragment } from './PromotionParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export type MenuItemPartsFragment = { __typename?: 'MenuItem', id: string, connectedObject?: Types.Maybe<(
    { __typename?: 'Post' }
    & ArticleTeaserPartsFragment
  ) | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | (
    { __typename?: 'Promotion' }
    & PromotionPartsFragment
  ) | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> };

export const MenuItemPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuItemParts on MenuItem {
  id
  connectedObject {
    ... on Post {
      ...ArticleTeaserParts
    }
    ... on Promotion {
      ...PromotionParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;