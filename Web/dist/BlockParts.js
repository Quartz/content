import { gql } from '@apollo/client';
export const BlockPartsFragmentDoc = /*#__PURE__*/ gql `
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