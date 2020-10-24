import { gql } from '@apollo/client';
export const ProjectPartsFragmentDoc = /*#__PURE__*/ gql `
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