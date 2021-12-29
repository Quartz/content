import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const NugDocument = /*#__PURE__*/ gql `
    query Nug($id: Int!) {
  nugs(where: {id: $id}) {
    nodes {
      ...NugParts
      bulletin {
        ...BulletinDataParts
      }
    }
  }
}
    ${NugPartsFragmentDoc}
${BulletinDataPartsFragmentDoc}`;
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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNugQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(NugDocument, options);
}
export function useNugLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(NugDocument, options);
}
//# sourceMappingURL=Nug.js.map