import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export const HomeCollectionPreviewDocument = /*#__PURE__*/ gql `
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;
/**
 * __useHomeCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useHomeCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useHomeCollectionPreviewQuery(baseOptions) {
    return Apollo.useQuery(HomeCollectionPreviewDocument, baseOptions);
}
export function useHomeCollectionPreviewLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(HomeCollectionPreviewDocument, baseOptions);
}
//# sourceMappingURL=HomeCollectionPreview.js.map