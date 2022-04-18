import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import type { AuthorPartsFragment } from './AuthorParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
export type EmailTeaserPartsFragment = { __typename?: 'Email', id: string, dateGmt?: Types.Maybe<string>, emailId: number, link?: Types.Maybe<string>, slug?: Types.Maybe<string>, segment?: Types.Maybe<string>, seoTitle?: Types.Maybe<string>, socialDescription?: Types.Maybe<string>, socialTitle?: Types.Maybe<string>, subject?: Types.Maybe<string>, title?: Types.Maybe<string>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, authors?: Types.Maybe<{ __typename?: 'EmailToCoAuthorConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'CoAuthor' }
      & AuthorPartsFragment
    )>>> }> };

export const EmailTeaserPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment EmailTeaserParts on Email {
  id
  dateGmt
  emailId
  featuredImage {
    ...MediaParts
  }
  link
  slug
  segment
  socialImage {
    ...MediaParts
  }
  seoTitle
  socialDescription
  socialTitle
  subject
  title
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
}
    ${MediaPartsFragmentDoc}
${AuthorPartsFragmentDoc}`;