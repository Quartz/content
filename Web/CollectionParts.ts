import type * as Types from './types';

import type { TagPartsFragment } from './TagParts';
import type { MediaPartsFragment } from './MediaParts';
import type { BlockPartsFragment } from './BlockParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { NugPartsFragment } from './NugParts';
import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { MediaPartsFragmentDoc } from './MediaParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { NugPartsFragmentDoc } from './NugParts';
export type CollectionPartsFragment = { __typename?: 'Collection', id: string, collectionId: number, title?: Types.Maybe<string>, dateGmt?: Types.Maybe<string>, excerpt?: Types.Maybe<string>, modifiedGmt?: Types.Maybe<string>, slug?: Types.Maybe<string>, tags?: Types.Maybe<{ __typename?: 'CollectionToTagConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag' }
      & TagPartsFragment
    )>>> }>, featuredImage?: Types.Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, blocks?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Block', connections?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | (
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    ) | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | (
      { __typename?: 'Nug' }
      & NugPartsFragment
    ) | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>> }
    & BlockPartsFragment
  )>>> };

export const CollectionPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment CollectionParts on Collection {
  id
  collectionId
  title
  dateGmt
  excerpt
  modifiedGmt
  slug
  tags {
    nodes {
      ...TagParts
    }
  }
  featuredImage {
    ...MediaParts
  }
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
      ... on Nug {
        ...NugParts
      }
    }
  }
}
    ${TagPartsFragmentDoc}
${MediaPartsFragmentDoc}
${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${NugPartsFragmentDoc}`;