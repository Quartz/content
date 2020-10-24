import { gql } from '@apollo/client';
import { HomeCollectionPartsFragmentDoc } from './HomeCollectionParts';
import * as Apollo from '@apollo/client';
export const HomeCollectionDocument = /*#__PURE__*/ gql `
    query HomeCollection {
  collections(first: 1, where: {tagSlugIn: ["home"]}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${HomeCollectionPartsFragmentDoc}`;
/**
 * __useHomeCollectionQuery__
 *
 * To run a query within a React component, call `useHomeCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeCollectionQuery(baseOptions) {
    return Apollo.useQuery(HomeCollectionDocument, baseOptions);
}
export function useHomeCollectionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(HomeCollectionDocument, baseOptions);
}
//# sourceMappingURL=HomeCollection.js.map