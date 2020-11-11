import type * as Types from './types';

import { gql } from '@apollo/client';
export type AuthorPartsFragment = { __typename?: 'CoAuthor', avatar?: Types.Maybe<string>, bio?: Types.Maybe<string>, emeritus?: Types.Maybe<boolean>, email?: Types.Maybe<string>, facebook?: Types.Maybe<string>, firstName?: Types.Maybe<string>, id: string, instagram?: Types.Maybe<string>, lastName?: Types.Maybe<string>, linkedin?: Types.Maybe<string>, name?: Types.Maybe<string>, organization?: Types.Maybe<string>, pgp?: Types.Maybe<string>, shortBio?: Types.Maybe<string>, title?: Types.Maybe<string>, twitter?: Types.Maybe<string>, type?: Types.Maybe<string>, url?: Types.Maybe<string>, username?: Types.Maybe<string>, website?: Types.Maybe<string> };

export const AuthorPartsFragmentDoc = /*#__PURE__*/ gql`
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