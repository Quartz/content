import type * as Types from './types';

import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type ArticlesByTagQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;


export type ArticlesByTagQuery = { __typename?: 'RootQuery', tags?: Types.Maybe<{ __typename?: 'RootQueryToTagConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag', posts?: Types.Maybe<{ __typename?: 'TagToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & TagPartsFragment
    )>>> }> };


export const ArticlesByTagDocument = /*#__PURE__*/ gql`
    query ArticlesByTag($after: String = "", $perPage: Int, $slug: [String]) {
  tags(where: {slug: $slug}) {
    nodes {
      ...TagParts
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
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByTagQuery__
 *
 * To run a query within a React component, call `useArticlesByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByTagQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>) {
        return Apollo.useQuery<ArticlesByTagQuery, ArticlesByTagQueryVariables>(ArticlesByTagDocument, baseOptions);
      }
export function useArticlesByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByTagQuery, ArticlesByTagQueryVariables>(ArticlesByTagDocument, baseOptions);
        }
export type ArticlesByTagQueryHookResult = ReturnType<typeof useArticlesByTagQuery>;
export type ArticlesByTagLazyQueryHookResult = ReturnType<typeof useArticlesByTagLazyQuery>;
export type ArticlesByTagQueryResult = Apollo.QueryResult<ArticlesByTagQuery, ArticlesByTagQueryVariables>;