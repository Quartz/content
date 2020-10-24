"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.VideoPartsFragmentDoc = client_1.gql `
    fragment VideoParts on VideoData {
  id
  duration
  episode
  playlistId
  season
  type
}
    `;
//# sourceMappingURL=VideoParts.js.map