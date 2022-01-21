import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type FirstPopularArticlesQueryVariables = Types.Exact<{
  edition?: Types.Maybe<Types.EditionName>;
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type FirstPopularArticlesQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const FirstPopularArticlesDocument = /*#__PURE__*/ gql`
    query FirstPopularArticles($edition: EditionName, $first: Int) {
  posts(first: $first, where: {popular: {edition: $edition}}) {
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
 * __useFirstPopularArticlesQuery__
 *
 * To run a query within a React component, call `useFirstPopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstPopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstPopularArticlesQuery({
 *   variables: {
 *      edition: // value for 'edition'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstPopularArticlesQuery(baseOptions?: Apollo.QueryHookOptions<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>(FirstPopularArticlesDocument, options);
      }
export function useFirstPopularArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>(FirstPopularArticlesDocument, options);
        }
export type FirstPopularArticlesQueryHookResult = ReturnType<typeof useFirstPopularArticlesQuery>;
export type FirstPopularArticlesLazyQueryHookResult = ReturnType<typeof useFirstPopularArticlesLazyQuery>;
export type FirstPopularArticlesQueryResult = Apollo.QueryResult<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>;