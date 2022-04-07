"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const EmailTeaserParts_1 = require("./EmailTeaserParts");
const BlockParts_1 = require("./BlockParts");
const PromotionParts_1 = require("./PromotionParts");
exports.EmailPartsFragmentDoc = client_1.gql `
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
    ${EmailTeaserParts_1.EmailTeaserPartsFragmentDoc}
${BlockParts_1.BlockPartsFragmentDoc}
${PromotionParts_1.PromotionPartsFragmentDoc}`;
//# sourceMappingURL=EmailParts.js.map