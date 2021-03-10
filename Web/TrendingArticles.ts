import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TrendingArticlesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TrendingArticlesQuery = { __typename?: 'RootQuery', trendingPosts?: Types.Maybe<{ __typename?: 'RootQueryToTrendingPostsConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }> };


export const TrendingArticlesDocument = /*#__PURE__*/ gql`
    query TrendingArticles {
  trendingPosts {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useTrendingArticlesQuery__
 *
 * To run a query within a React component, call `useTrendingArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingArticlesQuery(baseOptions?: Apollo.QueryHookOptions<TrendingArticlesQuery, TrendingArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingArticlesQuery, TrendingArticlesQueryVariables>(TrendingArticlesDocument, options);
      }
export function useTrendingArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingArticlesQuery, TrendingArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingArticlesQuery, TrendingArticlesQueryVariables>(TrendingArticlesDocument, options);
        }
export type TrendingArticlesQueryHookResult = ReturnType<typeof useTrendingArticlesQuery>;
export type TrendingArticlesLazyQueryHookResult = ReturnType<typeof useTrendingArticlesLazyQuery>;
export type TrendingArticlesQueryResult = Apollo.QueryResult<TrendingArticlesQuery, TrendingArticlesQueryVariables>;