import type * as Types from './types';

import type { ShowPartsFragment } from './ShowParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ShowPartsFragmentDoc } from './ShowParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticlesByShowQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type ArticlesByShowQuery = { __typename?: 'RootQuery', shows?: Types.Maybe<{ __typename?: 'RootQueryToShowConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Show', posts?: Types.Maybe<{ __typename?: 'ShowToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & ShowPartsFragment
    )>>> }> };


export const ArticlesByShowDocument = /*#__PURE__*/ gql`
    query ArticlesByShow($after: String = "", $perPage: Int, $slug: [String]) {
  shows(where: {slug: $slug}) {
    nodes {
      ...ShowParts
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
    ${ShowPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByShowQuery__
 *
 * To run a query within a React component, call `useArticlesByShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByShowQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByShowQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesByShowQuery, ArticlesByShowQueryVariables>(ArticlesByShowDocument, options);
      }
export function useArticlesByShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesByShowQuery, ArticlesByShowQueryVariables>(ArticlesByShowDocument, options);
        }
export type ArticlesByShowQueryHookResult = ReturnType<typeof useArticlesByShowQuery>;
export type ArticlesByShowLazyQueryHookResult = ReturnType<typeof useArticlesByShowLazyQuery>;
export type ArticlesByShowQueryResult = Apollo.QueryResult<ArticlesByShowQuery, ArticlesByShowQueryVariables>;