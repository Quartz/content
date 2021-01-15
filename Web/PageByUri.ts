import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type PageByUriQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type PageByUriQuery = { __typename?: 'RootQuery', pageBy?: Types.Maybe<{ __typename?: 'Page', id: string, content?: Types.Maybe<string>, title?: Types.Maybe<string> }> };


export const PageByUriDocument = /*#__PURE__*/ gql`
    query PageByUri($slug: String!) {
  pageBy(uri: $slug) {
    id
    content
    title
  }
}
    `;

/**
 * __usePageByUriQuery__
 *
 * To run a query within a React component, call `usePageByUriQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByUriQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByUriQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageByUriQuery(baseOptions: Apollo.QueryHookOptions<PageByUriQuery, PageByUriQueryVariables>) {
        return Apollo.useQuery<PageByUriQuery, PageByUriQueryVariables>(PageByUriDocument, baseOptions);
      }
export function usePageByUriLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageByUriQuery, PageByUriQueryVariables>) {
          return Apollo.useLazyQuery<PageByUriQuery, PageByUriQueryVariables>(PageByUriDocument, baseOptions);
        }
export type PageByUriQueryHookResult = ReturnType<typeof usePageByUriQuery>;
export type PageByUriLazyQueryHookResult = ReturnType<typeof usePageByUriLazyQuery>;
export type PageByUriQueryResult = Apollo.QueryResult<PageByUriQuery, PageByUriQueryVariables>;