"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
exports.BulletinPartsFragmentDoc = client_1.gql `
    fragment BulletinParts on Bulletin {
  link
  title
  dateGmt
  featuredImage {
    ...MediaParts
  }
  bulletin {
    sponsor {
      name
    }
    campaign {
      id
    }
    clientTracking {
      article
      elsewhere
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
//# sourceMappingURL=BulletinParts.js.map