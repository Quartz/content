import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export const CollectionDocument = /*#__PURE__*/ gql `
    query Collection($slug: String!) {
  collectionBy(slug: $slug) {
    ...CollectionParts
  }
}
    ${CollectionPartsFragmentDoc}`;
/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCollectionQuery(baseOptions) {
    return Apollo.useQuery(CollectionDocument, baseOptions);
}
export function useCollectionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(CollectionDocument, baseOptions);
}
//# sourceMappingURL=Collection.js.map