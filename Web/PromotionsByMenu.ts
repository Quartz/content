import type * as Types from './types';

import type { PromotionPartsFragment } from './PromotionParts';
import { gql } from '@apollo/client';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import * as Apollo from '@apollo/client';
export type PromotionsByMenuQueryVariables = Types.Exact<{
  menuLocation: Types.MenuLocationEnum;
}>;


export type PromotionsByMenuQuery = { __typename?: 'RootQuery', menuItems?: Types.Maybe<{ __typename?: 'RootQueryToMenuItemConnection', edges?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'RootQueryToMenuItemConnectionEdge', node?: Types.Maybe<{ __typename?: 'MenuItem', connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | (
          { __typename?: 'Promotion' }
          & PromotionPartsFragment
        ) | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'EmailSegments' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }> }>>> }> };


export const PromotionsByMenuDocument = /*#__PURE__*/ gql`
    query PromotionsByMenu($menuLocation: MenuLocationEnum!) {
  menuItems(first: 50, where: {location: $menuLocation}) {
    edges {
      node {
        connectedObject {
          ... on Promotion {
            ...PromotionParts
          }
        }
      }
    }
  }
}
    ${PromotionPartsFragmentDoc}`;

/**
 * __usePromotionsByMenuQuery__
 *
 * To run a query within a React component, call `usePromotionsByMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByMenuQuery({
 *   variables: {
 *      menuLocation: // value for 'menuLocation'
 *   },
 * });
 */
export function usePromotionsByMenuQuery(baseOptions: Apollo.QueryHookOptions<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>) {
        return Apollo.useQuery<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>(PromotionsByMenuDocument, baseOptions);
      }
export function usePromotionsByMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>) {
          return Apollo.useLazyQuery<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>(PromotionsByMenuDocument, baseOptions);
        }
export type PromotionsByMenuQueryHookResult = ReturnType<typeof usePromotionsByMenuQuery>;
export type PromotionsByMenuLazyQueryHookResult = ReturnType<typeof usePromotionsByMenuLazyQuery>;
export type PromotionsByMenuQueryResult = Apollo.QueryResult<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>;