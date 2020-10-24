"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.BlockPartsFragmentDoc = client_1.gql `
    fragment BlockParts on Block {
  attributes {
    name
    value
  }
  id
  innerHtml
  tagName
  type
}
    `;
//# sourceMappingURL=BlockParts.js.map