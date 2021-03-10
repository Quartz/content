import type * as Types from './types';

import type { SeriesPartsFragment } from './SeriesParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticlesBySeriesQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type ArticlesBySeriesQuery = { __typename?: 'RootQuery', serieses?: Types.Maybe<{ __typename?: 'RootQueryToSeriesConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Series', posts?: Types.Maybe<{ __typename?: 'SeriesToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & SeriesPartsFragment
    )>>> }> };


export const ArticlesBySeriesDocument = /*#__PURE__*/ gql`
    query ArticlesBySeries($after: String = "", $perPage: Int, $slug: [String]) {
  serieses(where: {slug: $slug}) {
    nodes {
      ...SeriesParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${SeriesPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesBySeriesQuery__
 *
 * To run a query within a React component, call `useArticlesBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesBySeriesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>(ArticlesBySeriesDocument, options);
      }
export function useArticlesBySeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>(ArticlesBySeriesDocument, options);
        }
export type ArticlesBySeriesQueryHookResult = ReturnType<typeof useArticlesBySeriesQuery>;
export type ArticlesBySeriesLazyQueryHookResult = ReturnType<typeof useArticlesBySeriesLazyQuery>;
export type ArticlesBySeriesQueryResult = Apollo.QueryResult<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>;