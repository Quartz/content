import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export const CollectionsDocument = /*#__PURE__*/ gql `
    query Collections($first: Int = 10, $after: String) {
  collections(first: $first, after: $after) {
    pageInfo {
      endCursor
    }
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;
/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions) {
    return Apollo.useQuery(CollectionsDocument, baseOptions);
}
export function useCollectionsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(CollectionsDocument, baseOptions);
}
//# sourceMappingURL=Collections.js.map