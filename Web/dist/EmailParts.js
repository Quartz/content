import { gql } from '@apollo/client';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
export const EmailPartsFragmentDoc = /*#__PURE__*/ gql `
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
//# sourceMappingURL=EmailParts.js.map