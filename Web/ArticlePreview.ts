import type * as Types from './types';

import type { ArticlePartsFragment } from './ArticleParts';
import { gql } from '@apollo/client';
import { ArticlePartsFragmentDoc } from './ArticleParts';
import * as Apollo from '@apollo/client';
export type ArticlePreviewQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  time: Types.Scalars['Int'];
  token: Types.Scalars['String'];
}>;


export type ArticlePreviewQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticlePartsFragment
    )>>> }> };


export const ArticlePreviewDocument = /*#__PURE__*/ gql`
    query ArticlePreview($id: Int!, $time: Int!, $token: String!) {
  posts(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...ArticleParts
    }
  }
}
    ${ArticlePartsFragmentDoc}`;

/**
 * __useArticlePreviewQuery__
 *
 * To run a query within a React component, call `useArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useArticlePreviewQuery(baseOptions: Apollo.QueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>) {
        return Apollo.useQuery<ArticlePreviewQuery, ArticlePreviewQueryVariables>(ArticlePreviewDocument, baseOptions);
      }
export function useArticlePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>) {
          return Apollo.useLazyQuery<ArticlePreviewQuery, ArticlePreviewQueryVariables>(ArticlePreviewDocument, baseOptions);
        }
export type ArticlePreviewQueryHookResult = ReturnType<typeof useArticlePreviewQuery>;
export type ArticlePreviewLazyQueryHookResult = ReturnType<typeof useArticlePreviewLazyQuery>;
export type ArticlePreviewQueryResult = Apollo.QueryResult<ArticlePreviewQuery, ArticlePreviewQueryVariables>;