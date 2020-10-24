import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import * as Apollo from '@apollo/client';
export const NugDocument = /*#__PURE__*/ gql `
    query Nug($slug: String!) {
  nugBy(slug: $slug) {
    ...NugParts
  }
}
    ${NugPartsFragmentDoc}`;
/**
 * __useNugQuery__
 *
 * To run a query within a React component, call `useNugQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNugQuery(baseOptions) {
    return Apollo.useQuery(NugDocument, baseOptions);
}
export function useNugLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(NugDocument, baseOptions);
}
//# sourceMappingURL=Nug.js.map