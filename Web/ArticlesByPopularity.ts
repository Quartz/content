import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type PopularArticlesQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  edition?: Types.Maybe<Types.EditionName>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type PopularArticlesQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const PopularArticlesDocument = /*#__PURE__*/ gql`
    query PopularArticles($after: String = "", $edition: EditionName, $perPage: Int) {
  posts(first: $perPage, after: $after, where: {popular: {edition: $edition}}) {
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
 * __usePopularArticlesQuery__
 *
 * To run a query within a React component, call `usePopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function usePopularArticlesQuery(baseOptions?: Apollo.QueryHookOptions<PopularArticlesQuery, PopularArticlesQueryVariables>) {
        return Apollo.useQuery<PopularArticlesQuery, PopularArticlesQueryVariables>(PopularArticlesDocument, baseOptions);
      }
export function usePopularArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularArticlesQuery, PopularArticlesQueryVariables>) {
          return Apollo.useLazyQuery<PopularArticlesQuery, PopularArticlesQueryVariables>(PopularArticlesDocument, baseOptions);
        }
export type PopularArticlesQueryHookResult = ReturnType<typeof usePopularArticlesQuery>;
export type PopularArticlesLazyQueryHookResult = ReturnType<typeof usePopularArticlesLazyQuery>;
export type PopularArticlesQueryResult = Apollo.QueryResult<PopularArticlesQuery, PopularArticlesQueryVariables>;