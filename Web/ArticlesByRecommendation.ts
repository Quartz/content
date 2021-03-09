import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticlesByRecommendationQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  postId: Types.Scalars['Int'];
}>;


export type ArticlesByRecommendationQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }> };


export const ArticlesByRecommendationDocument = /*#__PURE__*/ gql`
    query ArticlesByRecommendation($perPage: Int!, $postId: Int!) {
  posts(first: $perPage, where: {recommended: {id: $postId}}) {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByRecommendationQuery__
 *
 * To run a query within a React component, call `useArticlesByRecommendationQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByRecommendationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByRecommendationQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useArticlesByRecommendationQuery(baseOptions: Apollo.QueryHookOptions<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>(ArticlesByRecommendationDocument, options);
      }
export function useArticlesByRecommendationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>(ArticlesByRecommendationDocument, options);
        }
export type ArticlesByRecommendationQueryHookResult = ReturnType<typeof useArticlesByRecommendationQuery>;
export type ArticlesByRecommendationLazyQueryHookResult = ReturnType<typeof useArticlesByRecommendationLazyQuery>;
export type ArticlesByRecommendationQueryResult = Apollo.QueryResult<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>;