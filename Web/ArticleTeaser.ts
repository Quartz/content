import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticleOrBulletinTeaserQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type ArticleOrBulletinTeaserQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }> };


export const ArticleOrBulletinTeaserDocument = /*#__PURE__*/ gql`
    query ArticleOrBulletinTeaser($id: Int!) {
  posts(where: {id: $id}) {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticleOrBulletinTeaserQuery__
 *
 * To run a query within a React component, call `useArticleOrBulletinTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleOrBulletinTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleOrBulletinTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleOrBulletinTeaserQuery(baseOptions: Apollo.QueryHookOptions<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>(ArticleOrBulletinTeaserDocument, options);
      }
export function useArticleOrBulletinTeaserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>(ArticleOrBulletinTeaserDocument, options);
        }
export type ArticleOrBulletinTeaserQueryHookResult = ReturnType<typeof useArticleOrBulletinTeaserQuery>;
export type ArticleOrBulletinTeaserLazyQueryHookResult = ReturnType<typeof useArticleOrBulletinTeaserLazyQuery>;
export type ArticleOrBulletinTeaserQueryResult = Apollo.QueryResult<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>;