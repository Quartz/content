"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinDataPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.BulletinDataPartsFragmentDoc = client_1.gql `
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