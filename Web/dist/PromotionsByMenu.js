import { gql } from '@apollo/client';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import * as Apollo from '@apollo/client';
export const PromotionsByMenuDocument = /*#__PURE__*/ gql `
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
export function usePromotionsByMenuQuery(baseOptions) {
    return Apollo.useQuery(PromotionsByMenuDocument, baseOptions);
}
export function usePromotionsByMenuLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(PromotionsByMenuDocument, baseOptions);
}
//# sourceMappingURL=PromotionsByMenu.js.map