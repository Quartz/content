import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const NugsByTagDocument = /*#__PURE__*/ gql `
    query NugsByTag($perPage: Int!, $slug: [String]!) {
  nugs(first: $perPage, where: {tagSlugIn: $slug}) {
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
 * __useNugsByTagQuery__
 *
 * To run a query within a React component, call `useNugsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNugsByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(NugsByTagDocument, options);
}
export function useNugsByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(NugsByTagDocument, options);
}
//# sourceMappingURL=NugsByTag.js.map