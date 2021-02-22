import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export const MenuItemPartsFragmentDoc = /*#__PURE__*/ gql `
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
//# sourceMappingURL=MenuItemParts.js.map