import { gql } from '@apollo/client';
import { MenuItemPartsFragmentDoc } from './MenuItemParts';
import * as Apollo from '@apollo/client';
export const MenuByNameDocument = /*#__PURE__*/ gql `
    query MenuByName($id: ID!) {
  menu(id: $id, idType: NAME) {
    id
    menuItems {
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
 *   },
 * });
 */
export function useMenuByNameQuery(baseOptions) {
    return Apollo.useQuery(MenuByNameDocument, baseOptions);
}
export function useMenuByNameLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(MenuByNameDocument, baseOptions);
}
//# sourceMappingURL=MenuByName.js.map