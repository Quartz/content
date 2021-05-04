import type * as Types from './types';

import type { AuthorPartsFragment } from './AuthorParts';
import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { MediaPartsFragmentDoc } from './MediaParts';
export type EmailPartsFragment = { __typename?: 'Email', id: string, dateGmt?: Types.Maybe<string>, emailId: number, link?: Types.Maybe<string>, segment?: Types.Maybe<string>, seoTitle?: Types.Maybe<string>, socialDescription?: Types.Maybe<string>, socialTitle?: Types.Maybe<string>, subject?: Types.Maybe<string>, title?: Types.Maybe<string>, authors?: Types.Maybe<{ __typename?: 'EmailToCoAuthorConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'CoAuthor' }
      & AuthorPartsFragment
    )>>> }>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> };

export const EmailPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailParts on Email {
  id
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  link
  segment
  socialImage {
    ...MediaParts
  }
  seoTitle
  socialDescription
  socialTitle
  subject
  title
}
    ${AuthorPartsFragmentDoc}
${MediaPartsFragmentDoc}`;