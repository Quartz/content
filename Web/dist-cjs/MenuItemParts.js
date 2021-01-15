"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const PromotionParts_1 = require("./PromotionParts");
exports.MenuItemPartsFragmentDoc = client_1.gql `
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
    ${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${PromotionParts_1.PromotionPartsFragmentDoc}`;
//# sourceMappingURL=MenuItemParts.js.map