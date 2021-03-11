import { gql } from '@apollo/client';
export const BulletinDataPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment BulletinDataParts on BulletinData {
  campaign {
    attribution
    id
    logo
    logoLink
    name
    slug
  }
  clientTracking {
    article
    elsewhere
    logo
  }
  sponsor {
    attribution
    id
    logo
    logoLink
    name
    slug
  }
}
    `;
//# sourceMappingURL=BulletinDataParts.js.map