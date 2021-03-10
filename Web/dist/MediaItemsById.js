import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const MediaItemsByIdDocument = /*#__PURE__*/ gql `
    query MediaItemsById($ids: [ID!]) {
  mediaItems(where: {in: $ids}) {
    nodes {
      ...MediaParts
    }
  }
}
    ${MediaPartsFragmentDoc}`;
/**
 * __useMediaItemsByIdQuery__
 *
 * To run a query within a React component, call `useMediaItemsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaItemsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaItemsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useMediaItemsByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MediaItemsByIdDocument, options);
}
export function useMediaItemsByIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MediaItemsByIdDocument, options);
}
//# sourceMappingURL=MediaItemsById.js.map