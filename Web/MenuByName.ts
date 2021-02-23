import type * as Types from './types';

import type { MenuItemPartsFragment } from './MenuItemParts';
import { gql } from '@apollo/client';
import { MenuItemPartsFragmentDoc } from './MenuItemParts';
import * as Apollo from '@apollo/client';
export type MenuByNameQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type MenuByNameQuery = { __typename?: 'RootQuery', menu?: Types.Maybe<{ __typename?: 'Menu', id: string, menuItems?: Types.Maybe<{ __typename?: 'MenuToMenuItemConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'MenuItem' }
        & MenuItemPartsFragment
      )>>> }> }> };


export const MenuByNameDocument = /*#__PURE__*/ gql`
    query MenuByName($id: ID!, $first: Int = 10) {
  menu(id: $id, idType: NAME) {
    id
    menuItems(first: $first) {
      nodes {
        ...MenuItemParts
      }
    }
  }
}
    ${MenuItemPartsFragmentDoc}`;

/**
 * __useMenuByNameQuery__
 *
 * To run a query within a React component, call `useMenuByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuByNameQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useMenuByNameQuery(baseOptions: Apollo.QueryHookOptions<MenuByNameQuery, MenuByNameQueryVariables>) {
        return Apollo.useQuery<MenuByNameQuery, MenuByNameQueryVariables>(MenuByNameDocument, baseOptions);
      }
export function useMenuByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuByNameQuery, MenuByNameQueryVariables>) {
          return Apollo.useLazyQuery<MenuByNameQuery, MenuByNameQueryVariables>(MenuByNameDocument, baseOptions);
        }
export type MenuByNameQueryHookResult = ReturnType<typeof useMenuByNameQuery>;
export type MenuByNameLazyQueryHookResult = ReturnType<typeof useMenuByNameLazyQuery>;
export type MenuByNameQueryResult = Apollo.QueryResult<MenuByNameQuery, MenuByNameQueryVariables>;