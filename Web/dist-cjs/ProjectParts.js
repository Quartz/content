"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.ProjectPartsFragmentDoc = client_1.gql `
    fragment ProjectParts on Project {
  id
  count
  description
  shortDescription
  link
  name
  slug
}
    `;
//# sourceMappingURL=ProjectParts.js.map