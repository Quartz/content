import * as Types from './types';

import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type ArticleTeaserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type ArticleTeaserQuery = (
  { __typename?: 'RootQuery' }
  & { post?: Types.Maybe<(
    { __typename?: 'Post' }
    & ArticleTeaserPartsFragment
  )> }
);


export const ArticleTeaserDocument = /*#__PURE__*/ gql`
    query ArticleTeaser($id: ID!) {
  post(id: $id) {
    ...ArticleTeaserParts
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticleTeaserQuery__
 *
 * To run a query within a React component, call `useArticleTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleTeaserQuery(baseOptions?: Apollo.QueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>) {
        return Apollo.useQuery<ArticleTeaserQuery, ArticleTeaserQueryVariables>(ArticleTeaserDocument, baseOptions);
      }
export function useArticleTeaserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>) {
          return Apollo.useLazyQuery<ArticleTeaserQuery, ArticleTeaserQueryVariables>(ArticleTeaserDocument, baseOptions);
        }
export type ArticleTeaserQueryHookResult = ReturnType<typeof useArticleTeaserQuery>;
export type ArticleTeaserLazyQueryHookResult = ReturnType<typeof useArticleTeaserLazyQuery>;
export type ArticleTeaserQueryResult = Apollo.QueryResult<ArticleTeaserQuery, ArticleTeaserQueryVariables>;