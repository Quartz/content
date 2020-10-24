"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorPartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
exports.AuthorPartsFragmentDoc = client_1.gql `
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