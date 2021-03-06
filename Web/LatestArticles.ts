import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type LatestArticlesQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  edition?: Types.Maybe<Types.EditionName>;
  postsPerPage?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type LatestArticlesQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const LatestArticlesDocument = /*#__PURE__*/ gql`
    query LatestArticles($after: String = "", $edition: EditionName, $postsPerPage: Int) {
  posts(after: $after, first: $postsPerPage, where: {edition: $edition}) {
    nodes {
      ...ArticleTeaserParts
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useLatestArticlesQuery__
 *
 * To run a query within a React component, call `useLatestArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      postsPerPage: // value for 'postsPerPage'
 *   },
 * });
 */
export function useLatestArticlesQuery(baseOptions?: Apollo.QueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestArticlesQuery, LatestArticlesQueryVariables>(LatestArticlesDocument, options);
      }
export function useLatestArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestArticlesQuery, LatestArticlesQueryVariables>(LatestArticlesDocument, options);
        }
export type LatestArticlesQueryHookResult = ReturnType<typeof useLatestArticlesQuery>;
export type LatestArticlesLazyQueryHookResult = ReturnType<typeof useLatestArticlesLazyQuery>;
export type LatestArticlesQueryResult = Apollo.QueryResult<LatestArticlesQuery, LatestArticlesQueryVariables>;