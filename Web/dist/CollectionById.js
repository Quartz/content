import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const CollectionByIdDocument = /*#__PURE__*/ gql `
    query CollectionById($id: ID!) {
  collection(id: $id, idType: ID) {
    ...CollectionParts
  }
}
    ${CollectionPartsFragmentDoc}`;
/**
 * __useCollectionByIdQuery__
 *
 * To run a query within a React component, call `useCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(CollectionByIdDocument, options);
}
export function useCollectionByIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(CollectionByIdDocument, options);
}
//# sourceMappingURL=CollectionById.js.map