import type * as Types from './types';

import type { AuthorPartsFragment } from './AuthorParts';
import type { EmailPartsFragment } from './EmailParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ContentByAuthorQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  perPage?: Types.Scalars['Int'];
  after?: Types.Maybe<Types.Scalars['String']>;
}>;


export type ContentByAuthorQuery = { __typename?: 'RootQuery', authors?: Types.Maybe<{ __typename?: 'RootQueryToCoAuthorConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'CoAuthor' }
      & AuthorPartsFragment
    )>>> }>, authorContent?: Types.Maybe<{ __typename?: 'RootQueryToContentUnionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | (
      { __typename?: 'Email', emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', slug?: Types.Maybe<string> }>>> }> }
      & EmailPartsFragment
    ) | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const ContentByAuthorDocument = /*#__PURE__*/ gql`
    query ContentByAuthor($slug: String!, $perPage: Int! = 10, $after: String = "") {
  authors: coAuthors(where: {name: [$slug]}) {
    nodes {
      ...AuthorParts
    }
  }
  authorContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
        emailLists {
          nodes {
            slug
          }
        }
      }
      ... on Post {
        ...ArticleTeaserParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${AuthorPartsFragmentDoc}
${EmailPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useContentByAuthorQuery__
 *
 * To run a query within a React component, call `useContentByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useContentByAuthorQuery(baseOptions: Apollo.QueryHookOptions<ContentByAuthorQuery, ContentByAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContentByAuthorQuery, ContentByAuthorQueryVariables>(ContentByAuthorDocument, options);
      }
export function useContentByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentByAuthorQuery, ContentByAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContentByAuthorQuery, ContentByAuthorQueryVariables>(ContentByAuthorDocument, options);
        }
export type ContentByAuthorQueryHookResult = ReturnType<typeof useContentByAuthorQuery>;
export type ContentByAuthorLazyQueryHookResult = ReturnType<typeof useContentByAuthorLazyQuery>;
export type ContentByAuthorQueryResult = Apollo.QueryResult<ContentByAuthorQuery, ContentByAuthorQueryVariables>;