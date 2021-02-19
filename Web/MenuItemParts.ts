import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { PromotionPartsFragment } from './PromotionParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export type MenuItemPartsFragment = { __typename?: 'MenuItem', id: string, connectedNode?: Types.Maybe<{ __typename?: 'MenuItemToMenuItemLinkableConnectionEdge', node?: Types.Maybe<{ __typename?: 'BlogPost' } | (
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Category' } | { __typename?: 'CoAuthor' } | { __typename?: 'Chapter' } | { __typename?: 'Tag' } | { __typename?: 'Collection' } | { __typename?: 'Email' } | { __typename?: 'EmailList' } | { __typename?: 'Nug' } | { __typename?: 'Topic' } | { __typename?: 'EmailSegment' } | (
      { __typename?: 'Promotion' }
      & PromotionPartsFragment
    ) | { __typename?: 'Obsession' } | { __typename?: 'Page' } | { __typename?: 'Show' }> }> };

export const MenuItemPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuItemParts on MenuItem {
  id
  connectedNode {
    node {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on Promotion {
        ...PromotionParts
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;