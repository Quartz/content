import { gql } from '@apollo/client';
export const AuthorPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment AuthorParts on CoAuthor {
  avatar
  bio
  emeritus
  email
  facebook
  firstName
  id
  instagram
  lastName
  linkedin
  name
  organization
  pgp
  shortBio
  title
  twitter
  type
  url
  username
  website
}
    `;
//# sourceMappingURL=AuthorParts.js.map