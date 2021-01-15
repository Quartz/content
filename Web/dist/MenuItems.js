import { gql } from '@apollo/client';
import { MenuItemPartsFragmentDoc } from './MenuItemParts';
import * as Apollo from '@apollo/client';
export const MenuItemsDocument = /*#__PURE__*/ gql `
    query MenuItems($perPage: Int!, $slug: MenuLocationEnum!) {
  menuItems(where: {location: $slug}, first: $perPage) {
    nodes {
      ...MenuItemParts
    }
  }
}
    ${MenuItemPartsFragmentDoc}`;
/**
 * __useMenuItemsQuery__
 *
 * To run a query within a React component, call `useMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuItemsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMenuItemsQuery(baseOptions) {
    return Apollo.useQuery(MenuItemsDocument, baseOptions);
}
export function useMenuItemsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(MenuItemsDocument, baseOptions);
}
//# sourceMappingURL=MenuItems.js.map